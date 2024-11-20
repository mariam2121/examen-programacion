function MayorCinco(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 5) {
            resolve("numero valido: " + numero);
        } else {
            reject("numero invalido: " + numero);
        }
    });
}

MayorCinco(3).then((respuesta) => { console.log(respuesta  ); }).catch((error) => { console.log(error ); });