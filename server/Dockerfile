FROM node:22-alpine as build
COPY  . /app
WORKDIR /app
RUN yarn && yarn build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json /app
COPY --from=build /app/yarn.lock /app
RUN yarn install --production --frozen-lockfile

EXPOSE 3000
CMD ["node", "dist/index.js"]

