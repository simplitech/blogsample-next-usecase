# Production image, copy all the files and run next
FROM node:14-alpine AS runner

RUN apk add curl

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY ./public ./public
COPY --chown=nextjs:nodejs ./.next ./.next
COPY ./node_modules ./node_modules
COPY ./package.json ./package.json
COPY ./.env ./.env

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
