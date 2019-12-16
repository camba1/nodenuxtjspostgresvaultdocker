# NodeNuxtjsPostgresVaultDocker

Sample application that uses Server side rendering on the front end and Vault to secure credentials among other things

## Nuxtjs application

### Using the Dockerfile

To bring the application up ,use the following command to build the image and run the container in the ./nuxtFrontEnd directory:

``` bash
docker build -t nuxtfrontend .
docker run -p 3000:3000 --name nuxtfrontendcont nuxtfrontend
```

Then, in your browser go to  ```localhost:3000```
Note that to automatically remove the container every time it is stopped, you can use the following command:

``` bash
docker run --rm -p 3000:3000 --name nuxtfrontendcont nuxtfrontend
```

Since the Nuxt front end depends on other parts of the app, trying to open any page that needs data could result in an error. As such it is usually better to bring it up with docker-compose along with the other part of the app.

## Node Application

### Using the Dockerfile

To bring the application up ,use the following command to build the image and run the container in the ./nodeApp directory:

``` bash
docker build -t nodepg .
docker run -p 3000:3000 --name nodepgcont nodepg
 ```

Then, in your browser go to  ``` localhost:3000 ```
Note that to automatically remove the container every time it is stopped, you can use the follwoing command:

``` bash
docker run --rm -p 3000:3000 --name nodepgcont nodepg
```

### Running tests

The nodejs application uses cucumber as the testing framework. To run the tests, just execute ```npm test``` All test are located in the ./nodeApp/features directory

## Vault

### Configuration

Vault is running on it own container and listening on port 8200 by default and is currently configured to use the filesystem as a backend. It is also configured to enable the UI in localhost:8200. Finally tls is currently disabled (should be on for production)

### Unlocking

- Login to the container and then:
```vault operator init```
- Write down somewhere safe the unseal keys and the root Token
- Unseal vault by running the command below ( 3 times, each time with a different unseal key)
```vault operator unseal <key>```
- Login to Vault for the first time with the root Token
```vault login <root token>```

## Traefik

Traefik will server as a proxy for the application. while the configuration of the individual routs can be done in the docker-compose file, the ./traefik/traefik.yml hold the default route and the security mode.

## Docker-compose

### Creating the node_modules folder
If this is the **first time** you will try to bring up the application, you will need to create the ```node_modules``` folder since that is not checked into source control.

If you have npm installed in your machine:

``` bash
cd ./nodeApp
npm install
cd ../nuxtFrontEnd
npm install
```

If you do not have npm installed in your machine, from the root folder of our repo (where we have the docker-compose file):

``` bash
docker-compose run --rm  nodepg bash
npm install
exit
docker-compose down

docker-compose run --rm  nuxtfrontend bash
npm install
exit
docker-compose down
```

The above commands will:

- Start the nodepg service defined in our docker-compose file and log you  into the console in the container
- In the container, run npm install, which creates the node_modules folder in the container. Since we have a volume mounted in our container to the nodeApp folder in our machine (as defined in our dockercompose file), the node_modules folder gets created in our host machine as well and is ready for use.
- Exit the container and return to our host machine
- Bring the application down

### Bring the application up

To bring up the whole application you can use the following command in the root directory:

docker-compose up

### Restarting any portion of the app

You can restart any of the containers that make up this application by doing:

```
docker restart <containerName>
```

Note that Nodemon is installed and functional in the nodejs container, so any changes made to the node code should restart the node server automatically without having to restart the container.

### Bring application down

Use ```docker-compose down``` in the same directory where you have the docker-compose file to bring the application down.
