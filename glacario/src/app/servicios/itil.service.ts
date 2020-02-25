import { Injectable } from '@angular/core';

@Injectable()
export class ItilService {
    private itil:Itil[]=[
        {
            termino:"ITIL Information Technologies Infrastructure Library.",
            descripcion: "It’s a framework designed to standardize the selection, planning, delivery and maintenance of IT services within a business."
        },
        {
            termino:"APMI Project Manager Institute.",
            descripcion: "It is the largest project management membership group in the World."
        },
        {
            termino:"SLA Service Level Agreement.",
            descripcion: "A service-level agreement (SLA) is a contract that specifies what the service provider is responsible for."
        },
        {
            termino:"GxP Good Practice.",
            descripcion: "A set of guidelines for manufacturers and other automation users follow to maintain operational efficiency and reliability."
        },
        {
            termino:"PMI Project Management Institute.",
            descripcion: "It is the largest project management membership group in the World."
        },  

        {
            termino:"Service",
            descripcion: "The way to deliver value to the customers, facilitating the results they want to achieve, without owning their associated costs and risks."
        },   
        

        {
            termino:"Functions",
            descripcion: "Group of people and tools that they use to carry out one or more processes or activities. They are self-contained units within the organization, with their own capabilities and resources."
        },   


        {
            termino:"Roles",
            descripcion: "Set of responsibilities, activities and authorities defined in a process and assigned to a person or team."
        },   


        {
            termino:"Process",
            descripcion: "It is a structured group of activities designed to achieve a specific objective."
        },   


        {
            termino:"Process owner role",
            descripcion: "Is the one Focused in the process’ quality, overviewing the process fulfillment, must ensure a smooth transition in all the activities within the process and is the one responsible of the process change management."
        },   


        {
            termino:"Process Manager Role",
            descripcion: "Is the one of planning and coordinate the execution of the process' activities. Is the Process’ operation management"
        },   


        {
            termino:"Service Owner",
            descripcion: "Responsible of the service delivery, accompasing the technological components, process, and profesional capabilities. Interacts with the process owner during the service management lifecycle."
        },


        {
            termino:"Event",
            descripcion: "State change that is significant for managing an IQ or Service."
        },


        {
            termino:"Incident",
            descripcion: "Any unplanned event that causes or may cause an outage or reduction in service levels."
        },


        {
            termino:"Problem",
            descripcion: "Unidentified cause of a Recurring and/or Significant Incident and/or Event exhibiting common symptoms."
        },

        {
            termino:"Workaround",
            descripcion: "Method which aims to reduce or minimize the impact of Incidents and Problems."
        },


        {
            termino:"Known error",
            descripcion: "A problem becomes a known error when its root cause has been determined."
        },


        {
            termino:"Service Compliance",
            descripcion: "A Request for Information, Notification, A Standard Change, or Access to IT Services."
        },
    ];
    constructor(){
        console.log("servicio listo para usarse");
    }

    getItil():Itil[]{
        return this.itil;
    }
}  
export interface Itil {
    termino: string;
    descripcion: string; 
}