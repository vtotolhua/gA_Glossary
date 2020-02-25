import { Injectable } from '@angular/core';

@Injectable()

export class CncService {

    private cncterm : cncterm_ [] = [
            {
                termino:"CNC Configurable Network Computing",
                descripcion: "Is JD Edwards's (JDE) client–server proprietary architecture and methodology that implements its highly-scalable enterprise-wide business solutions software that can run on a wide variety of hardware, operating systems (OS) and hardware platforms. Now a division of the Oracle Corporation, Oracle continues to sponsor ongoing development of the JD Edwards Enterprise Resource Planning (ERP) system. While highly flexible, the CNC architecture is proprietary and, as such, it cannot be exported to any other systems."
            },
            {
                   termino:"SLA Service Level Agreement",
                    descripcion: "Online services that provide high-level APIs used to dereference various low-level details of underlying network infrastructure like physical computing resources, location, data partitioning, scaling, security, backup etc."
            }, 
            {
                termino:"End user",
                descripcion: "In product development, an end user (sometimes end-user)[a] is a person who ultimately uses or is intended to ultimately use a product. The end user stands in contrast to users who support or maintain the product, such as sysops, system administrators, database administrators, information technology experts, software professionals and computer technicians."
            },      
            {
                termino:"Oracle Database",
                descripcion: "Oracle Database (commonly referred to as Oracle RDBMS or simply as Oracle) is a proprietary multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads. The latest generation, Oracle Database 19c, is available on-prem, on-Cloud, or in a hybrid-Cloud environment. 19c may also be deployed on Oracle Engineered Systems (e.g. Exadata) on-prem, on Oracle (public) Cloud or (private) Cloud at Customer."
            },
            {
                termino:"CNC Architecture",
                descripcion: "CNC is the technical architecture for JD Edwards OneWorld and EnterpriseOne software. CNC enables highly configurable, distributed applications to run on a variety of platforms without users or analysts needing to know which platforms or which databases are involved in any given task. CNC insulates the business solution from the underlying technology. Enterprises can grow and adopt new technologies without rewriting applications....(it is) an application architecture that enables interactive and batch applications, composed of a single code base, to run across a TCP/IP network of multiple server platforms and SQL databases. The applications consist of reusable business functions and associated data that can be configured across the network dynamically. The overall objective for businesses to provide a future-proof environment that enables them to change organizational structures, business processes and technologies independently of each other."
            },    
            {
                termino:"Multi-foundation architecture",
                descripcion: "This means that one can create separate instances of JDE on different Tools Releases and isolate these release from each other. This is done by creating a separate set of system folders for the other foundation."
            },  
            {
                termino:"JDENET",
                descripcion: "JDENET is the message-oriented middleware that connects the generated presentation layer of JDE applications with business function components through a standard JDE applications programing interface, or API called “jdeCallObject.” The JDENET middleware, running within the CNC architecture, supports the configuration of business function components for execution in the heterogeneous distributed computing environment that the CNC architecture support."
            },  
            {
                termino:"JDEBASE",
                descripcion: "JDEBASE is the database middleware that provides platform-independent application program interfaces APIs for multi-vendor database access. These APIs are used in two ways. The first way is by JDE applications that dynamically generate platform-specific Structured Query Language (SQL), depending on the data source request. The second way is as open APIs for advanced C language business function writing."
            },  
            {
                termino:"CNC tasks per level",
                descripcion: "CNC has a 3 levels, the bsaic task for Level 1 is Monitoring, Password Reset and Escalations; Level 2 is Scheduling and Level 3 is Projects"
            },  
            {
                termino:"Help desk software",
                descripcion: "Help desk software refers to a computer program that enables customer-care operators to keep track of user requests and deal with other customer-care-related issues. It is what makes customer-care service efficient and enterprising. Generally, help desk software is part of an umbrella category called service desk, which includes asset management and IT service management. Oftentimes, the two terms are used interchangeably. Nevertheless, help desk software specifically refers to the system that addresses customer queries."
            },
            {
                termino:"JDE World",
                descripcion: "The software ultimately sold was named JD Edwards WorldSoftware, popularly called World. Development began using System/34 and /36 minicomputers, changing course in the mid-1980s to the System/38, later switching to the AS/400 platform when it became available. The company's initial focus was developing the accounting software needed for their clients. World was server-centric as well as multi-user; the users would access the system using one of several IBM computer terminals or 'green-screens'. (Later on, users would run terminal emulator software on their personal computers). As an ERP system, JD Edwards World comprised the three basic areas of expertise: functional/business analyst, programmer/software developer, and CNC/system administration."
            },
            {
                termino:"JDE OneWorld",
                descripcion: "an entirely new product with a graphical user interface and a distributed computing model replacing the old server-centric model. The architecture JD Edwards had developed for this newer technology, called Configurable Network Computing or CNC, transparently shielded business applications from the servers that ran those same applications, the databases in which the data were stored, and the underlying operating system and hardware."
            }
    ]

    constructor(){
        console.log("CNC Servicio listo para ser configurado.")
    }

    getCncTerm(): cncterm_ []{
        return this.cncterm;
    }
}

export interface cncterm_ {
    termino:string; 
    descripcion:string;
}