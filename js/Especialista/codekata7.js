let inputHtml = `
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
        <p>Web de viajes</p>
        <div class="product">
        <div class="imagen">
            <img src="beach.jpg"/>
        </div>
        <div class="content">
            <p class="title">vacaciones en la playa</p>
            <p class="desc">para dos personas con pension completa</p>
            <p class="price">165&euro; por noche/persona</p>
        </div>
        </div>
        </body>
    </html>
`;

class Extractor{
    #value;
    constructor(html, pattern){
        this.#value = this.#extract(html,pattern);
    }

    get value(){
        return this.#value;
    }

    #extract(html, pattern){
        let capture =  pattern.exec(html);
        return capture[1];
    }

}

class Product{
    #title;
    #image;

    constructor(title, image){
        this.#title = title;
        this.#image = image;
    }

    get title(){
        return this.#title;
    }
    
    get image(){
        return this.#image;
    }
}
// le estamos enviando nuestro HTML y una expresion regular, esta expresion va a buscar la etiqueta imagen y nos moesrtara la imagen
let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)"\/>/));
// con esto estamos extrayendo los valores de nuestro html, tanto una imagen como el contenido de una etiqueta
let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));

console.log(image.value);

console.log(title.value);
//en principio nos aparece el Extractor, pero queremos los valores en bruto de las variables, por eso ponemos el .value
let product = new Product(title.value, image.value);

console.log(product);

console.log(product.title);