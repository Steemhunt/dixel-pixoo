# Dixel Club on Pixoo-64
Display the latest Dixel Club collection on Divoom's [Pixoo-64 display](https://www.divoom.com/products/pixoo-64)

## Install
```
git clone https://github.com/Steemhunt/dixel-pixoo.git && cd dixel-pixoo && npm install

# Set Pixoo-64 IP address on .env file
echo "PIXOO_IP_ADDRESS=1.2.3.4" > .env # Need to be on DMZ if public IP

sudo npm install pm2 -g
pm2 start index.js --node-args="-r esm"
```
