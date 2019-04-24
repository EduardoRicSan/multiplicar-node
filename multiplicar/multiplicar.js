//requireds
const fs = require('fs'); //esta librería ya existe en node
const colors = require('colors');

//const fs = require('express'); //paquete que se instala, no es nativo de node, más bien es una expansion
//const fs = require('./path'); //archivos que nosotros creamos


//funcion promesa

let listarTabla = (base, limite = 10) => {

    console.log('========================'.yellow);
    console.log(`tabla de ${base}`.yellow);
    console.log('========================'.yellow);

    for (let i = 0; i <= limite; i++) {
        //concatenando todo lo que viene despues del signo +=
        //data += (`${base} * ${i} = ${base * i}\n`);
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        //verificando si base es un numero
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }


        //declarando data para asignarle el valor de la tabla de multiplicar
        let data = '';

        for (let i = 0; i <= limite; i++) {
            //concatenando todo lo que viene despues del signo +=
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);

        });

    });
}


module.exports = {
        crearArchivo,
        listarTabla
    }
    // crearArchivo(base)
    //     .then( archivo => console.log(`Archivo creado: ${ archivo }`));

//formas para exportar un archivo
/**1ra. forma ---> más recomendada
 * module.exports = {
 *      crearArchivo
 * }
 * 2da. forma
 * module.exports.crearArchivo = (base) .....
 * 
 * 
 */