FROM node:14
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN yarn install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 5000
CMD [ "npm", "start" ]