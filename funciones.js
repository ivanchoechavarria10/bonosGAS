function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Bonos');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('1tbqG7Qhh6kYtQLCCFrn4rr--tKm9psc213ZFoImhsj4').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}