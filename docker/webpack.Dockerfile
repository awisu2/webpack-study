FROM node:13

RUN npm install -g yarn
RUN npm install -g webpack webpack-cli

CMD ["webpack", "--version"]
