import { Injectable } from '@angular/core';

@Injectable()

export class navgtService {

    navgterm: navgterm [] = 
    [
        {
            termino:"Big Data IT Concept",
            descripcion: "Big data is an evolving term that describes a large volume of structured, semi-structured and unstructured data that has the potential to be mined for information and used in machine learning projects and other advanced analytics applications.Digital Twin Representation of a product/systemIt can be used in product design, simulation, monitoring, optimization and servicing and is an important concept in the industrial Internet of Things."
        },      
        {
            termino:"IoT Internet of things ",
            descripcion: "The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers ( UIDs ) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction."
        },      
        {
            termino:"VR Virtual reality",
            descripcion: "Artificial environment that is created with software and presented to the user in such a way that the user suspends belief and accepts it as a real environment."
        },      
        {
            termino:"Data Science",
            descripcion: "Is the study of where information comes from, what it represents and how it can be turned into a valuable resource in the creation of business and IT strategies."
        },      
        {
            termino:"Data Mining",
            descripcion: "Data mining is the process of sorting through large data sets to identify patterns and establish relationships to solve problems through data analysis. Data mining tools allow enterprises to predict future trends."
        },      
        {
            termino:"Business KPI",
            descripcion: "Is a measurable value that demonstrates how effectively a company is achieving key business objectives. "
        },      
        {
            termino:"BM Business Model",
            descripcion: "A business model is the conceptual structure supporting the viability of a business, including its purpose, its goals and its ongoing plans for achieving them."
        },      
        {
            termino:"Data Lake Data Storage",
            descripcion: "A data lake is a storage repository that holds a vast amount of raw data in its native format until it is needed."
        },      
        {
            termino:"Knowledge Warehouse Data Repositoy",
            descripcion: "A knowledge warehouse is the component of an enterprise's knowledge management system where knowledge is developed, stored, organized, processed, and disseminated. (A knowledge warehouse can also be called a data repository.)"
        },      
        {
            termino:"Opex: Operational expenditures",
            descripcion: "Is the money a company spends on an ongoing, day-to-day basis in order to run a business or system."
        },      
        {
            termino:"Capex: Capital Expenditure",
            descripcion: "Is money invested by a company to acquire or upgrade fixed, physical, non-consumable assets, such as a building, a computer or a new business. Generally, there are two types of capital expenses: purchases made to maintain existing levels of operation within a company and purchases intended to foster future growth."
        },      
        {
            termino:"DSO: Data Source Object",
            descripcion: "A data source object (DSO) is a Microsoft ActiveX object embedded within a Web page. It employs a process called data binding, in which an ActiveX control communicates directly with another Web page, or with an external XML data source."
        },        
        {
            termino:"Cloud Services IT Category",
            descripcion: "Used to describe professional services that support the selection, deployment and ongoing management of various cloud-based resources."
        },
        {
            termino:"Private Cloud Internal Cloud or Corporate Cloud",
            descripcion: "Private cloud is a type of cloud computing that delivers similar advantages to public cloud, including scalability and self-service, but through a proprietary architecture. Unlike public clouds, which deliver services to multiple organizations, a private cloud is dedicated to the needs and goals of a single organization."
        },
        {
            termino:"Bottleneck IT - Business Term",
            descripcion: "Is a point in the enterprise where the flow of data is impaired or stopped entirely. Effectively, there isn't enough data handling capacity to handle the current volume of traffic."
        },
        {
            termino:"Supply Chains",
            descripcion: "Is the part of the supply chain dedicated to providing service on products. It addresses the supply of parts, materials, personnel and services needed to provide timely and Effective product service, such as repair and maintenance."
        },
        {
            termino:"Forecasting Models",
            descripcion: "Process that uses data mining and probability to forecast outcomes. Each model is made up of a number of predictors, which are variables that are likely to influence future results."
        },
        {
            termino:"Predictive Analytics",
            descripcion: "Uses both new and historical data to forecast activity, behavior and trends. It involves applying statistical analysis techniques, analytical queries and automated machine learning algorithms to data sets to create predictive models that place a numerical value -- or score -- on the likelihood of a particular event happening."
        },
        {
            termino:"DCED platform",
            descripcion: "Software that is used to create and manage structured content. The goal of a DCED platform is to support omnichannel marketing efforts and provide marketers with the ability to view marketing, sales and service metrics from a single pane of glass."
        },    
        {
            termino:"Performance",
            descripcion: "Framework to measure how we are performing along the way"
        },   
        {
            termino:"Value",
            descripcion: "The decision-making process ends up creating incremental value to the shareholders."
        }
    ];

    constructor(){
        console.log("Los servicios de Navigate están activados")
    }    

    getNavgterm():navgterm[]{
        return this.navgterm;
    }
}

export interface navgterm {
    termino:string;
    descripcion:string;
}