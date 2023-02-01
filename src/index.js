const express = require('express') //llamamos a Express  

const v1Songs = require('./v1/routes/songs');  
const v1Films = require('./v1/routes/films');       
const {swaggerDocs: V1SwaggerDocs} = require('./v1/swagger');

const app = express();  
const port = process.env.PORT || 4000;  // establecemos nuestro puerto
 
app.use(express.json());

app.use('/api/v1/songs', v1Songs);
app.use('/api/v1/films', v1Films);



//arrancamos el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    V1SwaggerDocs(app, port);
  });
