const XLSX = require('xlsx');


function leerExcel(ruta){
    const workbook = XLSX.readFile(ruta);
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    console.log(dataExcel);

}



leerExcel('Excels/Arica_RR_1950_2005 (1).xls');