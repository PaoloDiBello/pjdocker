FROM node:jessie

WORKDIR /pjdocker/

COPY ./ ./

RUN npm install

CMD  ["/bin/bash"]