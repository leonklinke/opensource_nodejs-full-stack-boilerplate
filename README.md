# Node-React-full-stack-Boilerplate
Boilerplate for a full-stack, Docker based project using nodeJS (adonisJS) as back-end, ReactJS as front-end and Mysql as the Database.

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

**You can skip the docker part and execute everything in your machine** _But if you are a good person, keep going with docker :wink:_

## Cloning the project

- First, fork the project and clone it

- Once cloned, run:
```
$ cd project-front && yarn && cd ..
$ cd project-back && yarn && cp .env.example .env && cd ..
``` 

That will install the node dependencies into your project

## Installing Docker

- Get docker
To install docker visit: https://docs.docker.com/get-docker/
- Get docker compose
To install docker compose visit: https://docs.docker.com/compose/install/

After you get docker and compose, let's create the docker containers
IMPORTANT: I've choosen a project name that will be used everywhere, in my example it's just: `project` but you can change it.

- Build containers

```
$ docker-compose build
$ docker-compose up -d
``` 
_-d option runs your containers in the background_

## Done

Now you have:

**AdonisJS back-end up in `localhost:83`**

**ReactJS front-end up in `localhost:84`**

**Mysql database up in `localhost:3308`**

## Working with the project

If you want to enter one of the containers, you can use the `goto` script like this:

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

You can use a client like workbench or access: *localhost:3308* and create the `project` database

Now lets make the migrations:

```
$ ./goto back
adonis migration:run
```

**Now you are good to go!! :wink:**
