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

**You can skip docker part and execute everything in your machine** _But if you  are a good person keep going with docker :wink:_

## Cloning project

- First Fork the project and clone

Once cloned
```
$ cd project-front && yarn && cd ..
$ cd project-back && yarn && cp .env.example .env && cd ..
``` 

That will install node dependencies into your project

## Instaling Docker

- Get docker
To install docker visit: https://docs.docker.com/get-docker/
- Get docker compose
To install docker compose visit: https://docs.docker.com/compose/install/

After get docker and compose, lets create docker containers
IMPORTANT: I've choosen a project name that will be used everywhere, in my example is just: `project` but you can change.

- Build containers

```
$ docker-compose build
$ docker-compose up -d
``` 
_-d option run your containers in background_

## Done

Now you have 

**AdonisJS back-end up in `localhost:83`**

**ReactJS front-end up in `localhost:84`**

**Mysql database up in `localhost:3308`**

## Working with project

If you want to enter containers, you can use `goto` script like:

`$ ./goto front`

That will take you to the *project-front* container

- **Testing your front-end**
```
$ ./goto front
yarn test
```

## Migrating database

First you need to create your database, in this example `project`

```
$ ./goto database
mysql -uroot -phashProj123
create database project
exit
```

You can use a client like workbench as well accessing: *localhost:3308* and create the `project` database

Now lets make the migrations

```
$ ./goto back
adonis migration:run
```

**Now you are good to go!! :wink:**
