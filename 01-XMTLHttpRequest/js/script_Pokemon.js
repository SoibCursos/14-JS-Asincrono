//Pedir los 10 pokemos y listar sus nombres
//https://pokeapi.co/api/v2/pokemon?limit=10
//Parte del ejemplo de las pelis con XMLHTTPRequest
//Poner en Google Pokemon API rest vanilla
//Mirar javascrip.info el tema 11 -https://es.javascript.info/callbacks-
// https://es.javascript.info/async

//XMLHTTPrequest
const xhr = new XMLHttpRequest();
xhr.open("GET","https://pokeapi.co/api/v2/pokemon?limit=10");//Configuro la peticion
xhr.onreadystatechange = function(){
    //Estados de la petición
    /*
    0: petición no iniciada
    1: se ha establecuido la conexión con el servidor-server
    2: petición recibida por el server
    3: Se está procesando la petición. Procesando la petición
    4: Petición lista para leer los datos
    */

    console.log("Cambio de estaado de la funcion");
    console.log("Código de Estado", this.readyState);
    if(this.readyState === 4 && this.status === 200){
        //Convertimo a array para trabajar con los dastos
        const data =JSON.parse(this.responseText);
        console.dir(data);
       
        //insertar los datos en HTML
        //console.log(this.responseText);
      
        //Iteramos sobre el array de resultados de Pokemon, iterar es recorrer un bucle, recorrer algo
        data.results.forEach((bichoCriatura) => {
            
            const li = document.createElement("li");
            li.innerHTML = `Name: ${bichoCriatura.name}`; // Colocamos el nombre del Pokémon;
            document.querySelector("#bichos").appendChild(li);

        });
        console.log(data.results);
    };
}

xhr.send();//solcito los datos
console.log("Páginaa cargada");