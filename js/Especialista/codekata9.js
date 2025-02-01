document.querySelector(".request").addEventListener("click", event => {
  //llamamos a la funcion requestActivity cuando le damos click al boton
  requestActivity();
});


function requestActivity() {
  //url de la API
  const url = "https://jsonplaceholder.typicode.com/posts/15";
  //creamos un objeto de la clase XMLHttpRequest
  const http = new XMLHttpRequest();
  //abrimos una peticion con el metodo GET y la url
  http.open("GET", url);

  //enviamos la peticion
  http.onreadystatechange = function() {
    //si la peticion se completo y la respuesta es correcta
    if (http.readyState === 4 && http.status === 200) {
        insertOutputResponse(this.response);
    }
  };
  //recibimos la respuesta de la peticion
  http.send();
}

//funcion que inserta la respuesta en el DOM
function insertOutputResponse(response) {
  //parseamos la respuesta o la decodificamos
  let decodeResponse = JSON.parse(response);
  //creamos un contenedor
  let container = document.querySelector(".activity");
  //vaciamos el contenedor y le insertamos la respuesta
  container.innerHTML = "";

  //creamos un h4 para mostrar la actividad
  let activity = document.createElement("h4");
  //append() -> inserta la respuesta en el contenedor
  //decodeResponse.activity -> es la respuesta de la API
  activity.append(decodeResponse.activity);
  //insertamos la actividad en el contenedor
  container.append(activity);

  //creamos un boton para compartir la actividad
  let link = document.createElement("a");
  //insertamos el link en el contenedor
  link.href = decodeResponse.link;
  link.text = decodeResponse.link;
  link.target = "_blank";
  container.append(link);

  let type = document.createElement("p");
  type.append(decodeResponse.type);

  container.append(type);
}