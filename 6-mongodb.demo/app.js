const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));

const cursoSchema = new mongoose.Schema({
    nombre    : String,
    autor     : String,
    etiquetas : [String],
    fecha     : {type: Date, default:Date.now},
    publicado : Boolean
});

const Curso = mongoose.model('Curso', cursoSchema);

async function crearCurso(){
    const curso =  new Curso({
        nombre: 'Angular',
        autor: 'Pedro Lopez',
        etiquetas: ['desarrollo web', 'front end'],
        publicado: true
    });
    const resultado =  await curso.save();
    console.log(resultado);
}

//crearCurso();

async function listarCuros(){
    // eq (equal, igual)
    // ne (not equal, no igual)
    // gt (greater than, mayor que)
    // gte (greater than or equal to, mayor o igual que)
    // lt (less than, menor que)
    // lte (less than or equal to, menor o iagual que)
    // in
    // min (not in)
    // or
    // and
    const numeroPage = 2;
    const sizePage =10;
    // api/cursos?numeroPage=4&sizePage=10
    const cursos = await Curso
        //.find({publicado : true})
        //.find({ precio : {$gte:10, $lte:30}})
        //.find({precio: {$in: [10, 15, 25]}})
        //.find()
        //.and([{autor:'Caro'}, {publicado: false}])
        // Empiece con la palabra Car
        //.find({ autor: /^Car/ })
        // Cuando termina en una palabra o expresion
        //.find({autor: /aro$/ })
        // Cuando un campo tiene un contenido especial
        .find({autor: /.*ro.*/ })
        .skip((numeroPage - 1) * sizePage)
        .limit(sizePage)
        .sort({autor : -1})
        .select({autor:1, nombre:1, etiquetas:1});
    console.log(cursos);
}
//listarCuros();

async function actulizarCurso(id){
    // const curso = await Curso.findById(id);
    // if(!curso){
    //     console.log('El curso no existe');
    //     return;
    // }
    // curso.publicado = false;
    // curso.autor = 'Caro Caro';

    // curso.set({
    //     publicado: false,
    //     autor: 'Caro Caro'
    // })
    // const resultado = await curso.save();
    // console.log(resultado);
    const resultado = await Curso.findByIdAndUpdate(id, {
        $set: {
            autor:'Isa',
            publicado: true 
        }
    }, {new: true});
    console.log(resultado);
}
//actulizarCurso('61b7896b999a1382a6721e59');
async function eliminarDocumento(id){
    const result = await Curso.deleteOne({ _id:id});
    //const resultado = await Curso.findByIdAndDelete(id);
    console.log(result);
}
eliminarDocumento('61b7896b999a1382a6721e59');

