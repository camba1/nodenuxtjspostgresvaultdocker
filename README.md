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
