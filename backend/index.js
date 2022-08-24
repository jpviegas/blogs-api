const express = require('express');
const cors = require('cors');
const {
  usersRoutes, postsRoutes, loginRoutes, categoriesRoutes,
} = require('./routes');

const app = express();
app.listen(3002, () => console.log('ouvindo porta http://localhost:3002 !'));

app.use(express.json());
app.use(cors());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/post', postsRoutes);
app.use('/categories', categoriesRoutes);
