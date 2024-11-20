function delay(tiempo) {
    return new Promise ((resolve) =>{
        setTimeout(resolve, tiempo); 
    } )
  }

  delay(6000).then(() => console.log("espera completada")),
  Promise.all([
    delay(2000).then(() => console.log("primera espera completada")),
    delay(4000).then(() => console.log("segunda espera completada")),
    delay(6000).then(() => console.log("tercera espera completada"))
  ]);