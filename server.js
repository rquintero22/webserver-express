const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// directorio public
app.use( express.static( __dirname + '/public' ) )

// Expressa hbs engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');

 
 app.get('/', (req, res) => {
  
    res.render('home.hbs', {
      nombre: 'Raymond Quintero'
    });

})

app.get('/about', (req, res) => {
  
  res.render('about.hbs', {
    anio: new Date().getFullYear()
  });

})
 
 
app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})