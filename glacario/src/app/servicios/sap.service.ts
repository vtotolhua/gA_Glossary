import {Injectable} from '@angular/core';

@Injectable()
export class SapService {


    private sap:Sapi[] = [ 
        {
            jde:"Concepto en JDE",
            saphana:"Concepto en SAP-S/4 HANA",
            descripcion: "Technology intended to respond to and learn from stimulation in a similar way to human responses with a level of understanding and judgement that's normally only found in human expertise.",
            ejemplo: "Esto es un ejemplo del concept de SAP y JDE"
        },

        {
            jde:"Precepto en JDE",
            saphana:"Concepto en SAP-S/4 HANA",
            descripcion: "Technology intended to respond to and learn from stimulation in a similar way to human responses with a level of understanding and judgement that's normally only found in human expertise.",
            ejemplo: "Esto es un ejemplo del concept de SAP y JDE"
        }
    ];

    constructor(){
        console.log("Servicio SAP listo para usarse");
    }

    getSap():Sapi[]{
        return this.sap;
    }
}

    export interface Sapi{
        jde: string;
        saphana: string; 
        descripcion: string;
        ejemplo: string;
    };