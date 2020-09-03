FROM nodered/node-red
MAINTAINER ikeomasaya 20200903

# Copy _your_ Node-RED project files into place
# NOTE: This will only work if you DO NOT later mount /data as an external volume.
#       If you need to use an external volume for persistence then
#       copy your settings and flows files to that volume instead.
#COPY settings.js /data/settings.js
#COPY flows_cred.json /data/flows_cred.json
#COPY flows.json /data/flows.json

# copy once "./" directory in your machine to "/data" in docker-container
ADD . /data

# Install hyconet package as a node-red plugin.
# It needs to change directory /usr/src/node-red as the official documents shows in https://nodered.org/docs/user-guide/runtime/adding-nodes#installing-with-npm

# You should add extra nodes via your package.json file but you can also add them here:
WORKDIR /usr/src/node-red
## install from repository in github.com
RUN npm install git+https://github.com/nhkrd/hyconet.js.git && npm install git+https://github.com/nhkrd/node-red-contrib-hyconet.git


# No additional command to launch node-red in this Dockerfile.
# Launch node-red as default so that nodered/node-red dockerhub-image set.
# If you customize command, comment out the COMMAND below and change the command you like.

#COMMAND ['cd', '/usr/src/node-red', '&&', 'node-red']