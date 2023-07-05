function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Bonos');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}