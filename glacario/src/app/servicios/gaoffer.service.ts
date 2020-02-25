import { Injectable } from '@angular/core';

@Injectable()

export class gaOfferService {

    private gaofferservte:gaofferterm_ [] = 

    [
	
        {
            termino:"Navigate",
            descripcion: "plataform for customers solve specific business problems."
        },
        {
            termino:"OCP: Omnichannel Customer Platform",
            descripcion: "gather information about the behavior of customers of a physical store."
        },
        {
            termino:"Blue bags",
            descripcion: "Portal processes configured and defined."
        },
        {
            termino:"PII",
            descripcion: "Process innovation incubador."
        },
        {
            termino:"RPA",
            descripcion: "Robotic Process Automation."
        },
        {
            termino:"TTB",
            descripcion: "Transform The Business."
        },
        {
            termino:"KPI",
            descripcion: "Key Performance Indicator."
        }, 
        {
            termino:"Kyduk",
                    descripcion: "Kyduk is our Innovation Platform approach. We work closely with large companies to build innovation platforms with a framework to catalyze and execute transformation."
            },
            
        {
            termino:"Product",
                    descripcion: "In information technology, a product is something (for example, a software application) that is created and then made available to customers, usually with a distinct name or order number."
            },   
    
        {
            termino:"Framework",
                    descripcion: "Use the Search and Browse Catalog to search for learning events. Only those events you have access to are displayed in the search results."
            },
    
        {
            termino:"Digital products",
                    descripcion: "A data product is digital information that can be purchased. "
            },
    
        {
            termino:"Digital Disruption ",
                    descripcion: "Digital disruption is the change that occurs when new digital technologies and business models affect the value proposition of existing goods and services."
            },
    
        {
            termino:"Busssiness Unit",
                    descripcion: "A logical element or segment of a company (such as accounting, production, marketing) representing a specific business function."
            },
    
        {
            termino:"Incubation",
                    descripcion: "In the business world, an incubator is an enterprise that is set up to provide office space, equipment, and sometimes mentoring assistance and capital to new businesses that are just getting started."
            },
    
        {
            termino:"Asset Creation ",
                    descripcion: "The IT asset lifecycle is the stages that an organization’s information technology asset goes through during the time span of its ownership. An IT asset is any company-owned information, software or hardware."
           },
    
        {
            termino:"Change Management",
                    descripcion: "Change management is a systematic approach to dealing with the transition or transformation of an organization's goals, processes or technologies."
            },
    
    
        {
            termino:"Speculative Execution ",
                    descripcion: "Speculative execution is an optimization technique in which a processor (CPU) performs a series of tasks before it is prompted to, in order to have the information ready if it is required at any point."
            },
        {
            termino:"Smart Process Application",
                    descripcion: "A smart process application is software that is designed to support an organization's business process management (BPM) efforts in a collaborative manner."
            },
            
        {
            termino:"Parallel Processing",
                    descripcion: "In computers, parallel processing is the processing of program instructions by dividing them among multiple processors with the objective of running a program in less time."
            },   
    
        {
            termino:"Business Process Governance",
                    descripcion: "Also called process governance or business process management  governance, is the use of rules to manage BPM programs and initiatives."
            },
    
        {
            termino:"Business Process Mapping",
                    descripcion: "Business process mapping is the visual display of the steps involved in a business process from start to finish. Process mapping draws a concise picture of the sequences of tasks needed to bring a product or service from genesis to completion. It is often depicted as a flowchart and usually moves from left to right, or sometimes top down."
            },
    
        {
            termino:"Lean Startup",
                    descripcion: "Lean startup is an approach to building new businesses based on the belief that entrepreneurs must investigate, experiment, test and iterate as they develop products."
            },
    
        {
            termino:"Lean Software Development",
                    descripcion: "Lean software development is a concept that emphasizes optimizing efficiency and minimizing waste in the development of software."
            }
    ];
    
    constructor (){

        console.log("Los servicios de GA Offer están listos");
    }

    getGaofferterm(){
        return this.gaofferservte;
    }
}

export interface gaofferterm_{
    termino:string;
    descripcion:string;
}