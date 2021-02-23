# Encoder Shorten url API from 🇧🇷 
### What this API does?
This project use PostgreSQL database to save and persist data to handle with encoded and shortened urls.

### Authentication
You will need to authenticate and connect to a PostgreSQL database 
Create a ```.env``` file on project's root with fields
```bash
DB_HOST=[YOUR_HOST]
DB_USER=[YOUR_USER]
DB_PASSWORD=[YOUR_PASSWORD]
DB_PORT=[YOUR_PORT]
DB_DATABASE=[YOUR_DATABASE]
SERVER_URL=[YOUR_URL_ADDRESS]
```
### How to run it
1. ```npm install```
2. ```npm run dev``` for development running
3. ```npm run build``` for build it
4. ```npm run prod``` for run in production

### API 
You can access the full API clicking [here 🔥](https://documenter.getpostman.com/view/7161525/TWDZJbgm) 

### Running in Docker Container
In terminal run ```docker-compose up --build``` 

##### Running NPM in the container

```docker-compose exec app bash```

Then, once you’re inside the container, run the following:

```npm install -D @types/node```

### API
Send ```POST``` request like passing the original url and ```expiryTime``` in seconds 
```json 
{
	"url": "www.youtube.com"
}
```
to ```localhost:3000```
and receive 
```json
{
    "newUrl": "Wwl4iiS"
}
```

You can else specify the newUrl's lenght (min 5 and max 15) passing ```leng``` to you request
```json
 {
	"url": "www.youtube.com",
	"expiryTime": "30", // segundos
	"leng": 5 // tamanho da id a ser retornada 
}
```

You can access route with ```GET``` method at ```/Wlii3``` to get redirected to the original url page