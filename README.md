# Node-React-full-stack-Boilerplate
Boilerplate for a full stack project using nodejs (adonisJS), ReactJs as frontEnd, Mysql Database and Docker development based.

![](https://d2.alternativeto.net/dist/icons/adonis-js_151971.png?width=128&height=128&mode=crop&upscale=false)
![](https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png?w=128)
![](https://cdn.iconscout.com/icon/free/png-128/mysql-20-1174940.png)
![](https://cdn.iconscout.com/icon/free/png-128/docker-226091.png)

**It contains**
- Live reload 
- Jest test https://jestjs.io/
- Eslint https://eslint.org/
- React Router Dom https://www.npmjs.com/package/react-router-dom
- Axios https://www.npmjs.com/package/react-axios
- Yup https://github.com/jquense/yup

**You can skip docker part and execute everything in your machine** _But if you  are a good person keep going with docker :wink:_

- First Fork the project and clone

Once cloned
```
$ cd project-back && yarn && cd ..
$ cd project-front && yarn && cd ..
``` 
- Get docker
To install docker visit: https://docs.docker.com/get-docker/
- Get docker compose
To install docker compose visit: https://docs.docker.com/compose/install/

After get docker and compose, lets create docker containers
IMPORTANT: I've choosen a project name that will be used everywhere, in my example is just: `project` but you can change.


```
$ docker-compose build
$ docker-compose up -d
``` 
_-d option run your containers in background_

- Now you have 

**AdonisJS back-end up in `localhost:83`**

**ReactJS front-end up in `localhost:84`**


- **Testing your front-end**
```
docker exec -it project-front bash
yarn test
```

- **Migrating database**
```
docker exec -d project-back adonis migration:run
```