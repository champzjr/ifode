from node:10

workdir /usr/app/

copy package*.json ./

run npm install

copy . .

expose 3000

cmd ["npm", "start"]