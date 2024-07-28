# Build a production distribution

FROM cgr.dev/chainguard/node:latest AS setup

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm install --clean

COPY --chown=node:node . .

RUN npm run build

CMD [ "echo", "TEST" ]

# Setup proxy for deployment

FROM nginx as production

LABEL authors="botprzemek"

ENV NODE_ENV=production

COPY --chown=node:node --from=setup /app/dist /app

COPY --chown=node:node nginx.conf /etc/nginx/nginx.conf