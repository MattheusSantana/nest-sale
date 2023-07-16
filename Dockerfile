FROM node:19-slim

WORKDIR /home/node/app

EXPOSE 3000

#Manter conteiner de pé
CMD ["npm", "start"]