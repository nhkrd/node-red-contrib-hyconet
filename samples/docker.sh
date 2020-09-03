#!/bin/bash

# install

# run
docker-compose up
#docker-compose exec -it --name nodered-agent bash

# https://nodered.jp/docs/getting-started/docker
docker run -it --net=host -p 1880:1880 --name nodered-agent -v `pwd`:/data nodered/node-red bash

cd /data
git clone [hyconet.js]
git clone [node-red-contrib-hyconet]

npm install /data/hyconet.js
npm install /data/node-red-contrib-hyconet


