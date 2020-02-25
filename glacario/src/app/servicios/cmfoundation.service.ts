import { Injectable } from '@angular/core';


@Injectable()

export class cmFoundationService {

    private cmfundterm : oracl_ [] = 

    [
        {	termino:"ERP Enterprise Resource Planning", 
            descripcion:"Refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations."
        },
	    {	termino:"CRP, Capacity Resource Planning", 
            descripcion:"Planifying in resources as machine as man, needed for realize in time asigned in a productive center."
       	},
	    {	termino:"MRP Material Requirement Planning", 
            descripcion:"Enable you to specify the branch that a system uses for the CRP/RCCP Regeneration program (R3382) and the percentages for underrated and overrated capacity. Additionally, you determine whether you want work centers to be rolled up by dispatch group in the planning."
       	},
    	{	
            termino:"Forecast", 
            descripcion:"Processing options enable you to specify the forecast type that the system processes when it runs the Resource Requirement Planning Regeneration program. You can enter up to five forecast types in the system."
       	},
	    {	termino:"Process in options", 
            descripcion:"Function to set default values and specify version. You can enter defaults as capacity mode, UDC, UoM, version of dispatch list program"
       	},
	    {	termino:"Versión", 
            descripcion:"User-defined set of specifications that help to control how interactive applications run."
       	},
	    {	
            termino:"Interactive Versions", 
            descripcion:"Is a version that is not based on an existing version, you should add security to the new version.Is associated with applications (usually as a menu selection) and always run on a workstation."
       	},
	    {	termino:"Batch Versión", 
            descripcion:"Is a tool that you use to create and process versions of report templates."
       	},
	    {	termino:"EOQ (economic order quantity)", 
            descripcion:"IS a paper-based manufacturing system for production scheduling"
	    },
	    {	termino:"MRP (Material Requirements Planning)", 
            descripcion:"IS the manufacturing standard where we can manufacturing resource planning Solution that combined EOQ concepts with a mainframe computer."
	    },
	    {	termino:"Saas (software as a Service)", 
            descripcion:"Software as a service (SaaS) allows users to subscribe and use application software in the cloud. A modern cloud suite provides complete software for your entire business so that you can subscribe to certain SaaS applications as needed, such as accounting, HR, marketing, procurement, project management, sales management, service, supply chain, and transportation management."
	    },
	    {	termino:"Scheduling Workbench", 
            descripcion:"Specify a specific set of data selection and sequencing settings for the application. Versions may be named using any combination of alpha and numeric characters."
	    },
	    {	termino:"MRP/MPS Message Revision", 
            descripcion:"Specify a specific set of data selection and sequencing settings for the application. Versions may be named using any combination of alpha and numeric characters."
	    },
	    {	termino:"Forecast Revision", 
            descripcion:"Specify a specific set of data selection and sequencing settings for the application. Versions may be named using any combination of alpha and numeric characters."
	    }
    ];

constructor (){
    console.log("Los servicios de Common Foundation han sido activados")
}
    getOracUnite(): oracl_[] {

        return this.cmfundterm;
    }
}

export interface oracl_ {
    termino:string; 
    descripcion:string;
}