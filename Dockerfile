FROM node:11
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY src ./src
COPY public ./public
RUN CI=true
RUN yarn install --frozen-lockfile --check-files --network-timeout 600000
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_prod --network-timeout 600000
ENV NODE_ENV production
EXPOSE 3000
CMD [ "node", "node_modules/react-scripts/scripts/start.js" ]

