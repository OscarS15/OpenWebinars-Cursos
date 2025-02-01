//Expresiones regulares
/*
Anclas
- /^Open/ -> que comiencen por esta palabra
- /Webinars$/ -> que termine por esta
- /^OpenWebinars$/ -> que encuentre esta palabra, sin que haya nada antes ni despues
- /OpenWebinars/ -> que encuentre esta palabra 
*/

let html = "<html><body><h1 class=\"h1 font text\">Formacionh tecnica</h1></body></html>";

let expression = new RegExp(/<h1.*class="(.*)">.*<\/h1>/);

let result =  expression.exec(html);

console.log(result[1]);


let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})\s?/);   

let isValid = phone.exec("+34 642 687 220 ")

console.log(isValid !== null);