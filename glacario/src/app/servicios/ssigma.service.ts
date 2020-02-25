import { Injectable } from '@angular/core';

@Injectable ()

export class ssigmaService {
    
    private ssigmate: ssigmat_ [] = 

    [
        {
            termino:"Goal statement",
            descripcion: "Description of the intended target or desired results of Process Improvement or Design/Redesign activities; usually included in a team charter and supported with actual numbers and details once data has been obtained."
        },
            
        {
            termino:"Force field analysis",
            descripcion: "Identifies forces/factors supporting or working against an idea; 'restraining' factors listed on one side of the page, driving forces' listed on the other; used to reinforce the strengths (positive ideas) and overcome the weaknesses or obstacles."
        },   
    
        {
            termino:"External failure",
            descripcion: "When defective units pass all the way through a process and are received by the customer."
        },
        {
            termino:"Efficiency",
            descripcion: "Measures related to the quantity of resources used in producing the output of a process (e.g., costs of the process, total cycle time, resources consumed, cost of defects, scrap, and/or waste); links primarily to company profitability."
        },
        {
            termino:"Effectiveness",
            descripcion: "Measures related to how well the process output(s) meets the needs of the customer (e.g., on-time delivery, adherence to specifications, service experience, accuracy, value-added features, customer satisfaction level); links primarily to customer satisfaction"
        },
        {
            termino:"DPO, or Defects per Opportunity",
            descripcion: "Calculation used in Process Improvements to determine the amount of defects per opportunity; number of defects divided by (the number of units times the number of opportunities) = DPO.See also Defect; Defect Opportunity."
        },
        {
            termino:"DPMO, or Defects per Million Opportunities",
            descripcion: "Calculation used in Six Sigma Process Improvement initiatives indicating the amount of defects in a process per one million opportunities; number of defects divided by (the number of units times the number of opportunities) = DPO, times 1 million = DPMO. See also DPO; Six Sigma; Defect Opportunity)."
        },
        {
            termino:"DMAIC",
            descripcion: "Acronym for a Process Improvement/Management System which stands for Define, Measure, Analyze, Improve, and Control; lends structure to Process Improvement, Design or Redesign applications."
        },
        {
            termino:"DFSS",
            descripcion: "Acronym for “Design for Six Sigma.” Describes the application of Six Sigma tools to product development and Process Design efforts with the goal of “designing in” Six Sigma performance capability."
        },
        {
            termino:"Defect",
            descripcion: "Any instance or occurrence where the product or service fails to meet customer requirements."
        },
        {
            termino:"Downstream",
            descripcion: "Processes (activities) occurring after the task or activity in question."
        },
        {
            termino:"Discrete data",
            descripcion: "Any data not quantified on an infinitely divisible scale. Includes a count, proportion, or percentage of a characteristic or category (e.g., gender, loan type, department, location, etc); also referred to as “attribute data.”"
        },   
        {
            termino:"Define",
            descripcion: "First DMAIC phase defines the problem/opportunity, process, and customer requirements; because the DMAIC cycle is iterative, the process problem, flow, and requirements should be verified and updated for clarity, throughout the other phases. See alsoCharter, Customer Requirements, Process Map, VOC."
        },
        {
            termino:"Defective",
            descripcion: "Any unit with one or more defects. See also Defects"
        },
        {
            termino:"Defect opportunity",
            descripcion: "A type of potential defect on a unit of throughput (output) which is important to the customer; example: specific fields on a form which creates an opportunity for error that would be important to the customer."
        }    
    ];
    
    constructor(){
        console.log("Servicios de Scrum activados");
    }

    getSsgimate():ssigmat_[]{
        return this.ssigmate;
    }

}

export interface ssigmat_ {
    termino:string;
    descripcion: string;
}