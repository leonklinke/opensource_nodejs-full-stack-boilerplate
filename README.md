# node-react-full-stack-boilerplate
Boilerplate for a full stack project using nodejs (adonisJS), ReactJs as frontEnd, Mysql Database and Docker development based.

To install docker visit: https://docs.docker.com/get-docker/

- After get docker, lets create docker containers
IMPORTANT: choose a project name that will be used everywhere, in my example is just: ```project```


```
docker run -p83:3000 -p84:3333 --name project-back-front-container -v /home/leon/projects/project-back:/project-back -v /home/leon/projects/project-front:/project-front -d nginx
docker run --name project-database-container -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7
```
- Configuring Back/Front container

```
docker exec -it project-back-front-container bash
cd /project-back && node ace serve --watch
```
