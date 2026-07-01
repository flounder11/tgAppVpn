# ---- Stage 1: build ----
FROM node:22-alpine AS build

WORKDIR /app

# Кэшируем установку зависимостей отдельным слоем
COPY package.json package-lock.json* ./
RUN npm ci

# Копируем исходники и собираем
COPY . .
RUN npm run build

# ---- Stage 2: serve ----
FROM nginx:1.27-alpine AS runtime

# Дефолтный конфиг nginx заменяем своим
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Собранная статика из стадии build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]