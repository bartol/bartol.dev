<a href="https://bartol.dev">
  <img alt="logo" src="https://bartol.dev/files/logo.svg" align="right" width="200" height="205" />
</a>

# [bartol.dev](https://bartol.dev)

my website

## Deploy instructions

```
# setup admin user
adduser admin
usermod -aG sudo admin
cp -r ~/.ssh /home/admin
chown -R admin:admin /home/admin/.ssh

# install curl
apt update
apt install -y curl
```

Install:

```
curl https://raw.githubusercontent.com/bartol/bartol.dev/master/deploy/install.sh | bash
```

Update:

```
up

# or
~/bartol.dev/deploy/update.sh
```

After nginx config changes run:

```
sudo cp -svf ~/bartol.dev/deploy/nginx /etc/nginx/sites-available/bartol.dev
sudo nginx -t
sudo nginx -s reload
sudo certbot --nginx -n -d bartol.dev -d www.bartol.dev --reinstall
```

After service config changes run:

```
sudo systemctl daemon-reload
```