FROM node:10.16.1
COPY source/dist/. src/
WORKDIR /src
ENV MEMORY 2048
ENV API_PORT 8080
CMD node --max-old-space-size=$MEMORY --optimize-for-size --inspect config/server.js

