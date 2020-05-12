<a href="https://bartol.dev">
  <img alt="Bartol's logo" src="https://bartol.dev/img/logo.svg" align="right" width="200" height="205" />
</a>

# [bartol.dev](https://bartol.dev)

Personal cyberspace where you can find my thoughts and notes.

[![Netlify Status](https://api.netlify.com/api/v1/badges/f87ba513-159f-4d19-81a3-1dd06e9ec817/deploy-status)](https://app.netlify.com/sites/bartol/deploys)

## Navigate project

Directory names same as routes on website.

| Posts about                          |  Directory   |
| ------------------------------------ | :----------: |
| [Programming](https://bartol.dev/p/) |  [p/](./p/)  |
| [Software](https://bartol.dev/s/)    |  [s/](./s/)  |
| [Electronics](https://bartol.dev/e/) |  [e/](./e/)  |
| [Me](https://bartol.dev/me/)         | [me/](./me/) |

<!--
| [Cooking](https://bartol.dev/c/)     |  [c/](./c/)  |
-->

## Run locally

1. Install dependencies.

   ```
   yarn
   ```

2. Start development environment.

   ```
   yarn dev
   ```

   Navigate to `localhost:8080` in browser of your choice.

3. Generate static site.

   ```
   yarn prod
   ```

## Deploy

```bash
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

```bash
curl https://raw.githubusercontent.com/bartol/bartol.dev/master/deploy/install.sh | bash
```

Update:

```bash
up

# or
~/bartol.dev/deploy/update.sh
```

After nginx config changes run:

```bash
sudo cp -svf ~/bartol.dev/deploy/nginx /etc/nginx/sites-available/bartol.dev
sudo certbot --nginx -n -d bartol.dev -d www.bartol.dev --reinstall
```

After service config changes run:

```bash
sudo systemctl daemon-reload
```

## Tech stack

- [Eleventy](https://www.11ty.io/) - static site generator
- [Fuse.js](https://fusejs.io/) - client side search
- [Prism.js](https://prismjs.com/) - syntax highlighting
