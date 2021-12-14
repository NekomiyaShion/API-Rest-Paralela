import cheerio from "cheerio";
import request from "request-promise";
import Pool from "../controllers/conexion_db";

// web scraping
export const Scrapping = async() => {

    const $ = await request({
        uri: 'https://climatologia.meteochile.gob.cl/application/diario/boletinClimatologicoDiario/actual',
        transform: body => cheerio.load(body)
    });
    
    const prueba = $(".table.table-bordered").find('tr').map((i,ele) =>({
        estacion: $(ele).find('td:nth-of-type(1)').text().trim(),
        valorTmin: $(ele).find('td:nth-of-type(2)').text().trim(),
        valorTmax: $(ele).find(`td:nth-of-type(4)`).text().trim(),
        diacompleto: $(ele).find(`td:nth-of-type(6)`).text().trim(),

    })).get();
    prueba.shift();
    prueba.shift();
    const ingresobd = await Pool.query(
        "SELECT estacion FROM estaciones ORDER BY id_estacion DESC limit 1"
    );
    if(ingresobd.rowCount !=0){
        const estacio = ingresobd.rows[0].estacion;
        for(var j = 0; j < prueba.length;j++){
            if(prueba[j].estacion === estacio){
                while(prueba.length !=j){
                    prueba.pop();
                }
            }
        }
    }
    if(prueba.lenght !=0){
        for(var indice =prueba.length -1 ; indice >=0; indice--){
            const consulta = await Pool.query(
                "INSERT INTO estaciones(nombre,precipitacion,temperatura_max,temperatura_min) VALUES ($1,$2,$3,$4)",
                [
                    prueba[indice].estacion,
                    prueba[indice].diacompleto,
                    prueba[indice].valorTmax,
                    prueba[indice].valorTmin,
                ]
            );

        };
    } else {
        prueba[0] = "mada que agregar";
    }
    return(prueba);
}
export default Scrapping;