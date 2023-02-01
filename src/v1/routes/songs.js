var router = require('express').Router();
const songs = new Map();

songs.set("1", "Like a Rolling Stone", "Bob Dylan");
songs.set("2", "Satisfaction", "The Rolling Stones");
songs.set("3", "Imagine", "John Lennon");
songs.set("4", "What's Going On", "Marvin Gaye");
songs.set("5", "Respect", "Aretha Franklin");
songs.set("6", "Good Vibrations", "	Beach Boys");
songs.set("7", "Johnny B. Goode", "Chuck Berry");
songs.set("8", "Hey Jude", "The Beatles");
songs.set("9", "Smells Like Teen Spirit", "Nirvana");
songs.set("10", "What'd I Say", "Ray Charles");


//funciones
router.get('/:id', function (req, res) {
    var nombre = songs.get(req.params.id);

    if (nombre == null) {
        res.json({ message: "No existe la cancion con id " + req.params.id});
    }
    else {
        res.json({ name: nombre })
    }
})

router.get('/', function (req, res) {
    array = Array.from(songs, ([id, name, artist]) => ({ id, name, artist }));
    console.log(array);
    res.json(array)
})

router.post('/', function (req, res) {
    songs.set(songs.size+1,req.params.name,req.params.artist)
    res.json({ message: 'Vas a añadir un registro' })
})

router.put('/:id', function (req, res) {
    res.json({ message: 'Vas a actualizar el registro con id ' + req.params.id })
})

router.delete('/:id', function (req, res) {
    if(!songs.delete(req.params.id)){
        res.json({ message: 'El resgitro con id ' + req.params.id +' no existe' })
    }else{
        res.json({ message: 'Vas a borrar el registro con id ' + req.params.id })

    }
    
})


module.exports = router