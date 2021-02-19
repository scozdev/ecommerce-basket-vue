# ecommerce-basket-vue


## Docker setup

```
docker build -t vue-app .

docker run -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm vue-app
```

---

## Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your unit tests
```
npm run test:unit
```


