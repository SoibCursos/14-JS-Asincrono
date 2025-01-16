//XMLHTTPrequest
const xhr = new XMLHttpRequest();
xhr.open("GET","./pelis.json");//Configuro la peticion
xhr.onreadystatechange = function(){
    //Estados de la petición
    console.log("Cambio de estaado de la funcion");
    console.log("Código de Estado", this.readyState);
};

xhr.send();//solcito los datos
console.log("Páginaa cargada");