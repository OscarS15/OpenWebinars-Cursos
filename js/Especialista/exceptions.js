//Podemos crear nuestras propias excepciones, ya que si queremos personalizar nuestro error,
//por tema estetico u otro motivo
//Como? 
//Creamos una clase comun y corriente, pero heredará de Error, la clase donde estan todos los errores
class OscarError extends Error{
    constructor(message, options){
        super(message, options);
        //Aqui le asignamos el nombre de error que le queremos poner, en este caso es el mismo que nuestra clase
        this.name = "OscarError"
    }
}
//Este sera el mensaje que mostraremos si el error ocurre
throw new OscarError("Es un error haberte fijado en ella");