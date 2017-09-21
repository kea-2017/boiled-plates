localhostMd is another look at combining some old code.
A react/redux setup with some express/knex ready to go. Google maps API is connected and awaiting searchBar linkup. Auth next and the websockets.


npm install
knex migrate:latest
knex seed:run

`npm run dev` for bundling, watch and nodemon
`npm start` only runs server (setup for heroku)
`npm run h:deploy` will push your local master branch to your heroku app
`npm run h:migrate` will run your knex migrations on your deployed heroku app
`npm run h:seed` will run your seeds on your deployed app 
`npm run h:rollback`


