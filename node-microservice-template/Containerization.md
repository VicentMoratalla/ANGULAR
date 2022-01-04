# Docker

Node based applications play very well with Docker and container images can be easily setup with just the node version
required needed for initial configuration.

Docker will run an npm install and ensure all the dependencies are installed as soon as the container is spun up.

Imnut and output of the application is handled using ports which can be specified or left for docker to set up on startup.

As part of the containerisation process additional security measures can be put in place at a security level above the node
application to ensure only those with relevant permissions can access the container.

