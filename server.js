const express = require(`express`);
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const path = require(`path`)

const hbs = exphbs.create();
app.set('view engine', 'handlebars')
app.engine('handlebars', hbs.engine);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(`landingPage`)
})

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})