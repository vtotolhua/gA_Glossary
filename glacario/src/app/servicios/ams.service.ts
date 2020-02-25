import { Injectable } from '@angular/core';

@Injectable()
export class AmsService 
{
    private amsglos:amsglste []= 
    [
      {
        termino:"AMS Application Management Service",
                  descripcion: "It is a form of managing enterprise IT software applications and software-based service."
            },
            
      {
        termino:"dBT Digital Business Transformation", 
                  descripcion:"Digital transformation is the profound transformation of business and organizational activities, processes, competencies and models to fully leverage the changes and opportunities of a mix of digital technologies and their accelerating impact across society in a strategic and prioritized way."
            },
            
      {
        termino:"PMBOK Project Management Body of Knowledge",
                  descripcion: "PMBOK stands for Project Management Body of Knowledge and it is the entire collection of processes, best practices, terminologies and guidelines that are accepted as standards within the project management industry."
            },
            
      {
        termino:"BPT Business Process Transformation", 
                  descripcion:"Business process transformation involves an examination of the steps required to achieve a specific goal in an effort to remove duplicate or unnecessary steps and automate."
            },
    
      {
        termino:"BPM Business Process Transformation Model",
                  descripcion: "Business process management (BPM) is the discipline of improving a business process from end to end by analyzing it, modelling how it works in different scenarios, executing improvements, monitoring the improved process and continually optimizing it."
            },
            
      {
        termino:"VMO Value Management Office", 
                  descripcion:"Is an internal unit within an enterprise that is charged with evaluating third-party providers of goods services, supervising day to day interactions."
            },
            
      {
        termino:"PMO Proyect Manager Office",
                  descripcion: "Group or department within a business, agency or enterprise that defines and maintains standards for project management within the organization."
            },
            
      {
        termino:"Chatbot", 
                  descripcion:"Artificial intelligence is changing the world as we know it: simplifies, speeds up, solves and learns. At gA, we understand that integrating this technology with existing systems is essential."
            },
    
      {
        termino:"Social Network",
                  descripcion: "A dedicated website or other application which enables users to communicate with each other by posting information, comments, messages, images, etc."
            },
            
      {
        termino:"KPIs", 
                  descripcion:"A performance indicator or key performance indicator (KPI) is a type of performance measurement. KPIs evaluate the success of an organization or of a particular activity (such as projects, programs, products and other initiatives) in which it engages."
            },
    
      {
        termino:"Multi Ticketing Systems", 
                  descripcion:"A helpdesk ticketing software lets you support your customers on multiple channels such as email, phone, chat, social media etc. It combines incoming requests from all these channels into a single repository."
            },
    
      {
        termino:"Machine Learning", 
                  descripcion:"Is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention."
            },
    
      {
        termino:"Process Mining", 
                  descripcion:"Is a process analysis method that aims to discover, monitor and improve real processes (processes not assumed) by extracting knowledge easily from available event logs in the systems of current information of an organization."
            },
    
      {
        termino:"Smart Search", 
                  descripcion:"The representative's open incidents are displayed and are linked to similar resolved incidents, as well as related documents that help the analyst solve the problem."
            },
    
      {
        termino:"Automatic Learning", 
                  descripcion:"Is based on learning algorithms and natural language processing tools that seek the description of the incident and the metadata to provide the most accurate results. The algorithm is fed back with the recommendations and ratings provided by the analyst on the usefulness of the results."
            },
    
      {
        termino:"Control Panel", 
                  descripcion:"Service metrics by means of the identification of KPI by process, SLA, equipment and geographic zones. Machine learning models are available to forecast KPI trends and anticipate ticket expiration and critical issues."
            },
    
      {
        termino:"Discovery process", 
                  descripcion:"Intelligently monitoring critical processes allows identifying anomalies, bottlenecks and detours early, reducing the number and priority of tickets."
            },
    
      {
        termino:"Attended HUMAN WORK FORCE", 
                  descripcion:"Automate repetitive tasks allowing the specialist to focus on tasks of greater added value for the business / service."
            },
    
      {
        termino:"Hybrid END-TO-END SOUTION", 
                  descripcion:"Combination between humans and robots that work coordinated and efficiently to automate end-to-end processes"
            },
      
    
      {
        termino:"Unattended VIRTUAL WORK FORCE", 
                  descripcion:"Automation of repetitive processes, 24*7, with excellent accuracy. Productivity and direct result for the business.."
            },
    ];

    constructor(){
        console.log("servicio AMS listo para usarse");
    }

    getAmsglos(): amsglste[]{
        return this.amsglos;
    }
}

export interface amsglste{
  termino:string; 
  descripcion:string;

}