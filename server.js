const express = require(`express`);
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const path = require(`path`)

const hbs = exphbs.create();
app.set('view engine', 'handlebars')
app.engine('handlebars', hbs.engine);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/work', (req, res) => {
  console.log(`"/work" route slapped`)
  res.render(`work`)
});

app.get('/resume', (req, res) => {
  console.log(`"/contact" route slapped`)
  res.render(`resume`)
});

app.get('/contact', (req, res) => {
  console.log(`"/work" route slapped`)
  res.render(`contact`)
});

app.get('/', (req, res) => {
  console.log(`/ route slapped`)
  res.render(`landingPage`, {})
});


app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
})