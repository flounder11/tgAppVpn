import { Progress as ProgressPrimitive } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Progress({
	className,
	value,
	...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
	const [animatedValue, setAnimatedValue] = React.useState(0)

	React.useEffect(() => {
		const id = requestAnimationFrame(() => {
			setAnimatedValue(value ?? 0)
		})

		return () => cancelAnimationFrame(id)
	}, [value])

	return (
		<ProgressPrimitive.Root
			data-slot="progress"
			className={cn(
				'relative flex h-2.5 w-full items-center overflow-x-hidden rounded-full bg-accent/10',
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				data-slot="progress-indicator"
				className="size-full flex-1 bg-accent transition-all"
				style={{ transform: `translateX(-${100 - animatedValue}%)` }}
			/>
		</ProgressPrimitive.Root>
	)
}

export { Progress }
