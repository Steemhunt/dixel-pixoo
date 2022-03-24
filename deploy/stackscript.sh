# MARK: - System updates
sudo update-locale LANG=en_US.UTF-8 LANGUAGE= LC_CTYPE="en_US.UTF-8" LC_NUMERIC="en_US.UTF-8" LC_TIME="en_US.UTF-8" LC_COLLATE="en_US.UTF-8" LC_MONETARY="en_US.UTF-8" LC_MESSAGES="en_US.UTF-8" LC_PAPER="en_US.UTF-8" LC_NAME="en_US.UTF-8" LC_ADDRESS="en_US.UTF-8" LC_TELEPHONE="en_US.UTF-8" LC_MEASUREMENT="en_US.UTF-8" LC_IDENTIFICATION="en_US.UTF-8" LC_ALL=en_US.UTF-8
sudo locale-gen en_US.UTF-8
sudo apt update && sudo apt -y upgrade && sudo apt -y dist-upgrade && sudo apt -y autoremove

# MARK: - Install Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt update && sudo apt install nodejs && node -v # v14.19.0

sudo npm install pm2 -g

# MARK: - Pull code

git clone https://github.com/Steemhunt/dixel-pixoo.git && cd dixel-pixoo && npm install
cat > .env # setup env
```
# .env file format
PIXOO_IP_ADDRESS="1.2.3.4" # Need to be on DMZ if public IP
```

pm2 start index.js --node-args="-r esm"