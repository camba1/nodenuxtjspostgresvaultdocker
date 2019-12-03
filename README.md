# NodeNuxtjsPostgresVaultDocker

Sample application that uses Server side rendering on the front end and Vault to secure credentials among other things

## Node Application

### Using the Dockerfile

To bring the application up:  Use the following command to build the image and run the container in the ./nodeApp directory:

``` bash
docker build -t nodepg .
docker run -p 3000:3000 --name nodepgcont nodepg
 ```

Then, in your browser go to  ``` localhost:3000 ```
Note that to automatically remove the container every time it is stopped, you can use the follwoing command:

``` bash
docker run --rm -p 3000:3000 --name nodepgcont nodepg
```

## Docker-compose

### Creating the node_modules folder
If this is the **first time** you will try to bring up the application, you will need to create the ```node_modules``` folder since that is not checked into source control.

If you have npm installed in your machine:

``` bash
cd ./nodeApp
npm install
```

If you do not have npm installed in your machine, from the root folder of our repo (where we have the docker-compose file):

``` bash
docker-compose run --rm  nodepg bash
npm install
exit
```

The above commands will:

- Start the nodepg service defined in our docker-compose file and log you  into the console in the container
- In the container, run npm install, which creates the node_modules folder in the container. Since we have a volume mounted in our container to the nodeApp folder in our machine (as defined in our dockercompose file), the node_modules folder gets created in our host machine as well and is ready for use.
- Exit the container and return to our host machine

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
