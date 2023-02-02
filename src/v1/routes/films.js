var router = require('express').Router();
const films = new Map();

films.set("1", "Stalker", "1979");
films.set("2", "Seven ", "1995");
films.set("3", "La milla verde", "1999");
films.set("4", "Persona", "1966");
films.set("5", "Parásitos ", "2019");
films.set("6", "El viaje de Chihiro", "2001");
films.set("7", "Coco", "2017");
films.set("8", "Interstellar", "2014");

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
    array = Array.from(films, ([id, name, year]) => ({ id, name, year }));
    console.log(array);
    res.json(array)
})

router.post('/', function (req, res) {
    let {id} = films.size+1
    let {name, year} = req.body
    if(name && year) {
        films.set(id,name,year);
        res.json({ message: 'Has añadido un registro' })
    } else {
        res.status(500).json('La pelicula no se ha actualizó')
    }
})

router.put('/:id', function (req, res) {
    let {id} = req.params
    let {name, year} = req.body
    if(name && year) {
        films.set(id,name,year);
        res.json({ message: 'Has actualizado el registro con id ' + id})

    } else {
        res.status(500).json('La pelicula no se ha actualizó')
    }
})

router.delete('/:id', function (req, res) {
    if(!films.delete(req.params.id)){
        res.json({ message: 'El resgitro con id ' + req.params.id +' no existe' })
    }else{
        res.json({ message: 'Has borrado el registro con id ' + req.params.id })

    }
    
})


module.exports = router