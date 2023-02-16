#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
scp -r build/* root@20.71.117.163:/var/www/html
echo "Deployment complete"