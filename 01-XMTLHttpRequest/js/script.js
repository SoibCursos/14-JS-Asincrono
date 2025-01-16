//XMLHTTPrequest
const xhr = new XMLHttpRequest();
xhr.open("GET","./pelis.json");//Configuro la peticion
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
        //insertar los datos en HTML
        console.log(this.responseText);
      

        data.forEach((peli) => {
            const li = document.createElement("li");
            li.innerHTML = `Título: ${peli.title}, año: ${peli.year}`;
            document.querySelector("#pelis").appendChild(li);

        });
        console.log(data);
    };
}

xhr.send();//solcito los datos
console.log("Páginaa cargada");