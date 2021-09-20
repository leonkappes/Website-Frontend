FROM node:alpine
RUN apk --no-cache add ca-certificates
ADD . .
RUN npm i
RUN npm run build

CMD npm run start
