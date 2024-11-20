function multiplyByThree(n){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 3);
        }, 2000);
    });
}


function addFive(n) {
    return new Promise((resolve) => {
        resolve(n + 5);
    });
}

multiplyByThree(2).then(resultado => addFive(resultado))
    .then(resultado2 => console.log(resultado2))
    .catch(error => console.error(error));