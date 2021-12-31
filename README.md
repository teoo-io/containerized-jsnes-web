# 🕹️ Containerized JSNES Web UI 🕹️

A containerized version of [BFirsh's](https://github.com/bfirsh) React-based web UI for [JSNES](https://github.com/bfirsh/jsnes).

## 📍 Getting Started
The easiest way to run the JSNES Web UI locally is on Docker, but for dev purposes it can also be run using npm/yarn.

All YAML's and scripts necessary for a CI/CD deployment to Kubernetes are included in the repo as well (set-up steps covered below).  

```bash
    
```


### 🐳 Docker
First, make sure Docker is installed. Then, from the repository directory, build the Docker image from source, and run it.

```BASH
    $ sudo docker build --tag jsnes       # Use the Dockerfile to build a docker container using the source
    $ sudo docker run -it -p 3000:3000 jsnes:latest       # you can also run the container detached by using -d instead of -it
```
This will make the app available from a local browser at on https://localhost:3000.

### 🚀 Running on Yarn/npm
First, make sure npm and nodejs are installed.

```BASH
$ yarn install
$ yarn start
```
OR

```BASH
$ npm install
$ npm start
```

### ☸ Deploy to Kubernetes CI/CD
First, fork this repository to your GitHub account and make sure GitHub Actions are allowed for this repository (see 'Actions' tab under repository Settings).

With GitHub Actions enabled, the CI/CD script included in the `.github/workflows/deploy.yml` wil run every time changes are pushed to 
the `master` branch - but it will need the following GitHub Action "secrets" to be defined (see 'Secrets' tab under repository Settings):
- `APP_NAME`: The name of your app with no trailing spaces (for usage see `deployment.yml` `service.yml` and `ingress.yml` files).
- `KUBE_CONFIG`: Your Kubeconfig file pointing to your exposed Kubernetes API.
- `DOCKERHUB_USERNAME`: Your Docker Hub account username.
- `DOCKERHUB_TOKEN`: The API token to authenticate the Docker Hub account and push images to your repository.

Lastly, modify the `deployment.yml`, `service.yml` and `ingress.yml` files with your own details (domain name and certificate issuer if using Cert-Manager). 

When changes are pushed to the `master` branch and the script runs, it will first log in to Docker Hub using your credentials passed in as secrets; it will 
then push the built image to your Docker Hub repository. 

A namespace will be created for your app using your `APP_NAME` variable, and the `deployment.yml`, `service.yml` and `ingress.yml` will be applied using Kubectl.
If you need to deploy an ingress, make sure to uncomment the last two lines of the `.github/workflows/deploy.yml` script.


## 🩺 Running tests
```BASH
    $ yarn test
```
## Formatting code

All code must conform to [Prettier](https://prettier.io/) formatting. The test suite won't pass unless it does.

To automatically format all your code, run:

```BASH
    $ yarn run format
```

## Embedding JSNES in your own app

Unfortunately this isn't trivial at the moment. The best way is copy and paste code from this repository into a React app, then use the [`<Emulator>`](https://github.com/bfirsh/jsnes-web/blob/master/src/Emulator.js). [Here is a usage example.](https://github.com/bfirsh/jsnes-web/blob/d3c35eec11986412626cbd08668dbac700e08751/src/RunPage.js#L119-L125).

A project for potential contributors (hello!): jsnes-web should be reusable and on NPM! It just needs compiling and bundling.

## Adding roms

Open `src/config.js` and add a new key to `config.ROMS`. For example:

```javascript
const config = {
  ROMS: {
    // ...
    myrom: {
      name: "My Rom",
      description: <span>This is my own homebrew NES rom</span>,
      url: "http://localhost:3000/roms/myrom/myrom.nes"
    }
  }
}
```

Then, add the ROM file as `public/roms/myrom/myrom.nes`.
