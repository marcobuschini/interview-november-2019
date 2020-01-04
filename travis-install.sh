#!/bin/sh

echo "Installing NPM packages"
npm install
echo "Cloning widget repository"
git clone https://github.com/marcobuschini/parking-widget.git
echo "Building widget"
(cd parking-widget; npm install; ng build widget)
echo "Removing old widget"
rm node_modules/widget
echo "Installing new widget"
cp -R parking-widget/dist/widget node_modules
echo "Removing sources"
rm -rf parking-widget
echo "Done"
sudo chown -R $USER node_modules/widget
