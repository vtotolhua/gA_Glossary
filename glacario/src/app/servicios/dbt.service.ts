import { Injectable } from '@angular/core';

@Injectable ()

    export class dbtService {

        private dbt:dbt_ [] = 
        [
            {
                termino:"DBT: Digital Business Transformation",
                descripcion: "DBT is seen as the way that digital technologies are leveraged to make a significant strategic impact to a business, allowing it to accelerate business process, models and innovative practices – all focused on customer outcome."
            },
                
            {
                termino:"CoE: Center of excellence",
                descripcion: "It Understands deeply the whole business value chain, customer expectations, and technology of the company, and acts as an advisor on how to execute on the technology, market and mechanism — the drivers for digital transformation."
            },   
        
            {
                termino:"TOGAF: The Open Group Architecture Framework",
                descripcion: "It is a framework for enterprise architecture that provides an approach for designing, planning, implementing, and governing an enterprise information technology architecture. ... It is typically modeled at four levels: Business, Application, Data, and Technology."
            },
            {
                termino:"Value management",
                descripcion: "Is a combination of planning tools and methods to find the optimum balance of project benefits in relation to project costs and risks. It is the process of planning, assessing and developing the project in order to make the right decisions about the optimized balance of the benefits, risks and costs."
            },
            {
                termino:"Business case",
                descripcion: "A justification for a proposed project or undertaking on the basis of its expected commercial benefit."
            },
            {
                termino:"Strategic imperative",
                descripcion: "It is a business objective, objective or goal that has the highest priority. Companies often engage in strategic planning that evaluates the entire business and establishes an action plan."
            },
            {
                termino:"Value Driver",
                descripcion: "Value drivers are anything that can be added to a product or service that will increase its value to consumers. These differentiate a product or service from those of a competitor and make them more appealing to consumers."
            },
            {
                termino:"VPI: Value Performance Indicator",
                descripcion: "Evaluate the success of an organization or of a particular activity (such as projects, programs, products and other initiatives) in which it engages, in this case is the Value."
            },
            {
                termino:"Process indicator",
                descripcion: "These are indicators which directly measure the performance of key processes that affect customer expectations. Specific actions can be taken to improve the performance of these indicators, which in turn should improve the performance of the result measurables."
            },
            {
                termino:"VMO: Value Management Office",
                descripcion: "It Monitors the overall health of an organization, it also ensures that current project activities stay in alignment with its mission, vision, and strategic initiatives."
            }
        ];

        constructor(){
            console.log("Servicio Digital Business Transformation listo para usarse")
        }

        getDbt():dbt_[]{
            return this.dbt;
        }
    }

    export interface dbt_ {
        termino:string;
        descripcion:string;
    }