import { useEffect, useRef, useState } from 'react'
import { useAuthStore } from '../../store/useAuthStore'

interface IEmailModal {
	isOpen: boolean
	onClose: () => void
	onSuccess: (email: string) => void
}

type Step = 'email' | 'code'

export default function EmailModal({
	isOpen,
	onClose,
	onSuccess
}: IEmailModal) {
	const [step, setStep] = useState<Step>('email')
	const [email, setEmail] = useState('')
	const [code, setCode] = useState(['', '', '', '', '', ''])

	const [cooldown, setCooldown] = useState(30)
	const canResend = cooldown <= 0
	const codeRefs = useRef<(HTMLInputElement | null)[]>([])

	// вызов таймера при загрузке модалки
	useEffect(() => {
		if (step !== 'code' || cooldown <= 0) return
		const timer = setTimeout(() => {
			setCooldown(c => c - 1)
		}, 1000)
		return () => clearTimeout(timer)
	}, [step, cooldown])

	const handleCodeChange = (value: string, index: number) => {
		if (!/^\d*$/.test(value)) return // только цифры

		const next = [...code]
		next[index] = value.slice(-1) // берём последний введённый символ
		setCode(next)

		// переход на следующий инпут
		if (value && index < code.length - 1) {
			codeRefs.current[index + 1]?.focus()
		}

		// если все заполнены — можно сразу слать подтверждение
		if (next.every(d => d !== '')) {
			// опционально: handleConfirm()
		}
	}

	// удаление введенных цифр с input
	const handleCodeKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace' && !code[index] && index > 0) {
			codeRefs.current[index - 1]?.focus()
		}
	}

	// вставка кода через ctrl + v
	const handleCodePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		const pasted = e.clipboardData
			.getData('text')
			.replace(/\D/g, '')
			.slice(0, code.length)
		const next = [...code]
		pasted.split('').forEach((char, i) => {
			next[i] = char
		})
		setCode(next)
		const lastFilledIndex = Math.min(pasted.length, code.length - 1)
		codeRefs.current[lastFilledIndex]?.focus()
	}

	const isLoading = useAuthStore(state => state.isLoading)
	const error = useAuthStore(state => state.error)
	const sendVerificationCode = useAuthStore(state => state.sendVerificationCode)
	const verifyEmail = useAuthStore(state => state.verifyEmail)

	if (!isOpen) return null

	const handleSendCode = async () => {
		const ok = await sendVerificationCode(email)
		if (ok) {
			setStep('code')
			setCooldown(30)
		}
	}

	const handleResend = async () => {
		const ok = await sendVerificationCode(email)
		if (ok) setCooldown(30)
	}

	const handleConfirm = async () => {
		const ok = await verifyEmail(email, code.join(''))
		if (ok) onSuccess(email)
	}

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-xs">
			<div className="bg-background border font-manrope border-accent/50 p-4 rounded-2xl w-full max-w-[354px] -translate-y-20">
				{step === 'email' && (
					<>
						<p className="text-white  font-bold text-xl text-center mb-4">
							Привязать E-mail
						</p>
						<div className="flex flex-col gap-y-2">
							<label className="text-white text-xs">E-main адрес</label>
							<input
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder="example@mail.com"
								className="w-full text-white border text-xs border-gray-600 rounded-2xl py-3 pl-4 outline-0"
							/>
							<p className="text-white/40 text-xs">
								На эту почту будет отправлен код подтверждения
							</p>
						</div>

						{error && <p className="text-[#EB5454] text-xs mt-2">{error}</p>}

						<div className="flex justify-between mt-2">
							<button
								onClick={onClose}
								className="bg-[#EB5454]/10 border border-[#EB5454] rounded-2xl text-[#EB5454]  h-[35px] text-center text-sm max-w-[153px] w-full"
							>
								Отмена
							</button>
							<button
								onClick={handleSendCode}
								disabled={isLoading || !email}
								className="bg-accent/10 border border-accent rounded-2xl text-accent h-[35px] text-center text-sm max-w-[153px] w-full disabled:opacity-50"
							>
								Отправить код
							</button>
						</div>
					</>
				)}

				{step === 'code' && (
					<>
						<p className="text-white  font-bold text-xl text-center mb-4">
							Введите код
						</p>

						<p className="text-white/40 text-xs text-center">
							Код отправлен на {email}
						</p>

						<div className="flex gap-x-2 justify-center my-2">
							{code.map((digit, i) => (
								<input
									type="number"
									key={i}
									ref={el => {
										codeRefs.current[i] = el
									}}
									value={digit}
									maxLength={1}
									onChange={e => handleCodeChange(e.target.value, i)}
									onKeyDown={e => handleCodeKeyDown(e, i)}
									onPaste={handleCodePaste}
									className="w-9 h-9 text-white text-center rounded-lg border border-accent bg-[#0D010C]/70 outline-0"
								/>
							))}
						</div>

						{canResend ? (
							<button
								onClick={handleResend}
								disabled={isLoading}
								className="text-accent text-xs underline disabled:opacity-50"
							>
								Отправить повторно
							</button>
						) : (
							<p className="text-white/40 text-xs">
								Отправить повторно ({cooldown} сек)
							</p>
						)}

						{error && <p className="text-[#EB5454] text-xs mt-2">{error}</p>}

						<div className="flex justify-between mt-2">
							<button
								onClick={onClose}
								className="bg-[#EB5454]/10 border border-[#EB5454] rounded-2xl text-[#EB5454]  h-[35px] text-center text-sm max-w-[153px] w-full"
							>
								Отмена
							</button>
							<button
								onClick={handleConfirm}
								disabled={isLoading || code.some(d => !d)}
								className="bg-accent/10 border border-accent rounded-2xl text-accent h-[35px] text-center text-sm max-w-[153px] w-full disabled:opacity-50"
							>
								Подтвердить
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
