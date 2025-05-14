# Étape 1 : build du site avec pnpm
FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm install -g pnpm && pnpm install && pnpm run build

# Étape 2 : image finale pour servir avec Nginx
FROM nginx:alpine

# Copie du build dans le dossier public de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Supprime la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Ajoute notre propre config optimisée pour une SPA React
COPY src/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

RUN ls -al
