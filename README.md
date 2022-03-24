# Dixel Club on Pixoo-64
Display the latest [Dixel Club](https://dixel.club) collection on Divoom's [Pixoo-64](https://www.divoom.com/products/pixoo-64) display

## Look! ❤️
![IMG_8855 3](https://user-images.githubusercontent.com/1332279/159866736-a8a7fee0-697a-44ce-95eb-af1ef7cb9904.jpg)

## Install
```
git clone https://github.com/Steemhunt/dixel-pixoo.git && cd dixel-pixoo && npm install

# Set Pixoo-64 IP address on .env file
echo "PIXOO_IP_ADDRESS=1.2.3.4" > .env # Need to be on DMZ if public IP

sudo npm install pm2 -g
pm2 start index.js --node-args="-r esm"
```
