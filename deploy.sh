#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run build

cd out
# navigate into the build output directory

# if you are deploying to a custom domain
echo 'txphotography.us' > CNAME
touch .nojekyll

cd ..

gh-pages -d out -t true