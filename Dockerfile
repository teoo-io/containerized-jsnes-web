FROM node:11
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN yarn install --frozen-lockfile --check-files --network-timeout 600000
RUN yarn build --noninteractive && cd build
EXPOSE 3000
CMD [ "npm", "start" ]

