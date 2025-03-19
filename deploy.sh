#!/bin/bash

# Stopp scriptet hvis en kommando feiler
set -e

# Last inn variabler fra .env
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env file not found! Exiting."
    exit 1
fi

# Bygg Docker-image
docker build . -t xcomdata/webapp

# Logg inn til Docker Hub
echo "$DOCKER_PASSWORD" | docker login -u xcomdata --password-stdin

# Push image til Docker Hub
docker push xcomdata/webapp

echo "Docker image successfully pushed!"
