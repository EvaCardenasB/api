var router = require('express').Router();
const films = new Map();

films.set("1", "Like a Rolling Stone", "Bob Dylan");
films.set("2", "Satisfaction", "The Rolling Stones");
films.set("3", "Imagine", "John Lennon");
films.set("4", "What's Going On", "Marvin Gaye");
films.set("5", "Respect", "Aretha Franklin");
films.set("6", "Good Vibrations", "	Beach Boys");
films.set("7", "Johnny B. Goode", "Chuck Berry");
films.set("8", "Hey Jude", "The Beatles");
films.set("9", "Smells Like Teen Spirit", "Nirvana");
films.set("10", "What'd I Say", "	Ray Charles");


//funciones
router.get('/:id', function (req, res) {
    var nombre = films.get(req.params.id);

    if (nombre == null) {
        res.json({ message: "No existe la pelicula con id " + req.params.id});
    }
    else {
        res.json({ name: nombre })
    }
})

router.get('/', function (req, res) {
    array = Array.from(films, ([id, name, artist]) => ({ id, name, artist }));
    console.log(array);
    res.json(array)
})

router.post('/', function (req, res) {
    res.json({ message: 'Vas a añadir un registro' })
})

router.put('/:id', function (req, res) {
    res.json({ message: 'Vas a actualizar el registro con id ' + req.params.id })
})

router.delete('/:id', function (req, res) {
    if(!films.delete(req.params.id)){
        res.json({ message: 'El resgitro con id ' + req.params.id +' no existe' })
    }else{
        res.json({ message: 'Vas a borrar el registro con id ' + req.params.id + 'name: '+ films.get(req.params.id)})

    }
    
})


module.exports = router