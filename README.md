# Github Jobs Project

## Frontend
The Github Jobs Project Frontend created using reactjs, to install it in your computer:
- open terminal, then
```
cd frontend
```
```
npm install
```
- wait until node modules installed and then you can run it by using this command:
```
npm start
```

## Backend
The Github Jobs Project Backend created using nodejs, to install it in your computer:
- open terminal, then
```
cd backend
```
```
npm install
```
- wait until node modules installed and then run the migration and seed using this commands:
```
npx sequelize-cli db:migrate
```
```
npx sequelize-cli db:seed:all
```
- after migration and seed complete, you can run it by using this command:
```
node server.js
```