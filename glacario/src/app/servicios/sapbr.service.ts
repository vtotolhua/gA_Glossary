import {Injectable} from '@angular/core';

@Injectable()
export class SapbrService {

    private sapbr:Sapibr[] = [

        {
            jde:"PRUEBA SAP BR ",
            saphana:"PRUEBA SAP BR",
            descripcion:"PRUEBA SAP BR",
            ejemplo: "PRUEBA SAP BR"
        },
        {
            jde:"Acceso rápido (Fast Path)",
            saphana:"Comando campo",
            descripcion: "En el campo de comando, ingrese / n seguido de un código de transacción. Esto finalizará la tarea actual. Si no desea finalizar su tarea actual, puede crear una nueva sesión.",
            ejemplo: "/NME23N -Visualizar pedidos de compra. /NMB51- Visualizar listado de documentos. /NMMBE- Visualizar stock por material."
        }
    ]

    constructor(){
        console.log("Servicio SAPBR listo para usarse");
    }

    getsapbr():Sapibr[]{
        return this.sapbr
    }

}


export interface Sapibr{
    jde: string;
    saphana: string; 
    descripcion: string;
    ejemplo: string;
};
