#Start from node image
FROM node:14

#Create and set the work directory inside the image named 'app'
WORKDIR /app

#Copy the code across
COPY . .

#Dependencies intall
RUN npm i

#Entry point
ENTRYPOINT ["npm", "start"]

#Set an environment variable
ENV PORT=5000
