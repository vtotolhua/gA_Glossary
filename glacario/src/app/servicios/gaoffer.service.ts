import { Injectable } from '@angular/core';

@Injectable()

export class gaOfferService {

    private gaofferservte:gaofferterm_ [] = 

    [ 	
        {
            termino:"Navigate",
                    descripcion: "Plataform based in Artificial Intelligence and Data Science to solve specific business problems."
            },
        {
            termino:"OCP: Omnichannel Customer Platform",
                    descripcion: "Platorm in charge of gather information about the behavior of customers of a physical store."
            },     
        {
            termino:"PII: Process innovation incubador",
                    descripcion: "Develop by providing services such as management training or office space for help companies startup."
            },   
        {
            termino:"RPA: Robotic Process Automation",
                    descripcion: "Automation of tasks based in software robots or artificial intelligence."
            },   
        {
            termino:"TTB: Transform The Business",
                    descripcion: "Process where you manage, organize and implement new strategies or developments in a company."
        },
       
        {
            termino:"KPI: Key Performance Indicator",
                    descripcion: "Indicators that helps to qualify specific areas in a business."
        },   
        {
            termino:"Kyduk",
                    descripcion: "Innovation Platform of gA. Building innovation in companies with a framework that helps catalyze and transformate the enterprise."
        },   
        {
            termino:"Product",
                    descripcion: "In information technology, a product is created and be available to customers as example: a software application or a new development."
        },   
        {
            termino:"Digital Product",
                    descripcion: "Digital information that can be purchased"
        },   
        {
            termino:"Digital Disruption",
                    descripcion: "Change that occurs when new digital technologies and business models affect the value proposition of existing goods and services."
        },   
        {
            termino:"BU: Business Unit",
                    descripcion: "Logical element or segment of a company whose represent a specific business function."
        },   
        {
            termino:"Incubation",
                    descripcion: "Enterprise that set up to provide office space, equipment, mentoring, assistance and capital to new businesses that are just getting started."
        },   
        {
            termino:"Asset Creation",
                    descripcion: "IT asset is any company - owned information, software or hardware."
        },   
        {
            termino:"Change Management",
                    descripcion: "Systematic approach to dealing with the transition or transformaation of an organization goals, process or technologies."
        },   
        {
            termino:"Speculative Execution",
                    descripcion: "Optimization technique in which a processor (CPU) performs a series of tasks before it is prompted to, in order to have the information ready if it's requires at any point."
        },   
        {
            termino:"Smart Process Application",
                    descripcion: "Software that is designed to support an organization's business process management (BPM) efforts in a collaborative manner."
        },   
        {
            termino:"Parallel Processing",
                    descripcion: "Processing of program instructions by dividing them amoung multiple processors with the objective of running a program in less time."
        },   
        {
            termino:"Business Process Governance",
                    descripcion: "USse of rules to manage BPM programs and initiatives."
        },   
        {
            termino:"Business Process Mapping",
                    descripcion: "Display of steps involved in a business process from start to finish. Draws the sequence of tasks needed to bring a product or service from genesis to completion. It's usually depicted as a flowchart."
        },   
        {
            termino:"Lean Startup",
                    descripcion: "Approach to building new business based on the belief that entrepreneurs must investigate, experiment, test and iterate as they develop products."
        },   
        {
            termino:"Lean Software Development",
                    descripcion: "Concept that emphasizes optimizing efficiency and minimizing waste in development of the software."
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