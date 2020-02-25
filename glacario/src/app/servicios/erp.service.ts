import { Injectable } from '@angular/core';

@Injectable()
    export class ErpglosService {
        private Erpglos:any [] =  [
            {
                termino:"ERP",
                descripcion: "Modular software system designed to integrate the main functional areas of an organization's business processes into a unified system."
                },
                
            {
                termino:"Oracle US Tech Company",
                descripcion: "Oracle is one of the largest vendors in the enterprise IT market and the shorthand name of its flagship product, a relational database management system (RDBMS) that's formally called Oracle Database. The database software sits at the center of many corporate IT environments, supporting a mix of transaction processing, business intelligence and analytics applications."
                },   
        
            {
                termino:"Customers",
                descripcion: "The customer of an  IT service provider is the person or group who defines and agrees  the service level targets."
                },  
        
            {
                termino:"Suppliers",
                descripcion: "Person or organization that provides something needed such as a product or service"
            },    
        
            {
                termino:"TCO Total Cost Ownership",
                descripcion: "It is a calculation that reveals the cost of owning a product or service for a given period"
            },   
        
            {
                termino:"SAC  Service Acceptance Criteria",
                descripcion: "A set of criteria used to ensure that an IT service meets its functionality and quality requirements and that the IT service provider is ready to operate the new IT service when it has been deployed"
            }, 
            {
                termino:"SKMS Service Knowledge Management System",
                descripcion: "Is the central repository of the data, information, and knowledge that the IT organization requires, to manage the lifecycle of its services."
            }, 
            {
                termino:"CMS Configuration Management System",
                descripcion: "Is a system engineering process for establishing and maintaining consistency of a product's performance, functional, and physical attributes with its requirements, design, and operational information throughout its life"
            }, 
            {
                termino:"CMIS Capacity management information system",
                descripcion: "Is a collection of IT infrastructure usage, capacity and performance information that has been gathered in a consistent manner and stored in one or more databases"
            },   
            {
                termino:"SCMIS Supplier and contract management information system",
               descripcion: "People in charge to ensure that all contracts with suppliers support the needs of the business"
            }, 
            {
                termino:"AMIS Availability management information system",
                descripcion: "It is responsible for ensuring that all IT infrastructure, processes, tools, roles etc are appropriate for the agreed availability targets."
            }, 
            {
                termino:"SMIS Security management information system",
                descripcion: "It is a set of policies and procedures for systematically managing an organization's sensitive data."
            },
            {
                termino:"RACI Responsible, Accountable, Consulted, Informed",
                descripcion: "Responsibility Assignment Matrix"
            },  
            {
                termino:"SCM Service Catalog Management",
                descripcion: "Service Catalogue Management provides a single source of consistent infomation on all agreed services, and ensures that is widely available to those who are authorized to access it"
            },
            {
                termino:"SLM Service Level Management ",
                descripcion: "Deals with negotiating, agreeing and documenting existing services with some level of policies. It has two levels of agreement, the SLA and the OLA."
            },
            {
                termino:"OLA Operational Level Agreement",
                descripcion: "Unlike SLA it is agreement within the organization"
            }, 
            {
                termino:"UC Underpinning Contract",
                descripcion: "Contract with an external provider that helps service provision"
            }, 
            {
                termino:"ITSCM Information Technology Continuity Management",
                descripcion: "The purpose of the IT service continuity management (ITSCM)  process is to support the overall Business Continuity Management  (BCM) process by ensuring that the required IT technical and service  facilities can provide, can be resumed within required and  agreed business time scales."
            },
            {
                termino:"BPO  Business Process Outsourcing",
                descripcion: "BPO is the contracting of non-primary business activities and functions to a third-party provider. BPO services include payroll, human resources (HR), accounting and customer/call center relations. BPO is also known as information technology enabled services (ITES)."
            },
            {
                termino:"SPM  Service Portfolio Management",
                descripcion: "The portfolio management service is to provide strategic  direction and management of IT investments to continuously maintain optimal  portfolio of services"
            },
            {
                termino:"Java",
                descripcion: "Java is a high-level programming language developed by Sun Microsystems."
            },
            {
                termino:"JMX Java Management Extension",
                descripcion: "JXM is a Java technology that supplies tools for managing and monitoring applications, system objects, devices (such as printers) and service-oriented networks."
            },
            {
                termino:"JAXWS Java API for XML Web Services",
                descripcion: "Is  standard application program interface that is used to develop Web services and is a part of the Sun Java development kit (JDK)"
            },
            {
                termino:"PDA Personal Digital Assistant",
                descripcion: "Is a term for a small, mobile, handheld device that provides computing and information storage and retrieval capabilities for personal or business use, often for keeping schedules, calendars and address book information handy"
            },
            {
                termino:"SSB'S Single Strand Braks",
                descripcion: "Integrates data from different sources, transforms and consolidates the data, does data cleansing, and storing of data as well. ... A SAP Business Intelligence system can work as a target system for data transfer or source system for distribution of data"
            },
            {
                termino:"DSBS Double-Strand breaks ",
                descripcion: "A tool that allows the integrated management system: made, control budgets, planning and financial consolidation and the creation of reports"
            },
            {
                termino:"BW Business Warehouse",
                descripcion: "Reporting and analysis simple for business users so they can create reports and perform processes like predictive analytics without needing the input of data analysts"
            },
            {
                termino:"BPC Business Planning and Consolidation",
                descripcion: "Technologies, applications and practices for the collection, integration, analysis, and presentation of business information"
            },
            {
                termino:"Business Savvy Business Skill",
                descripcion: "Work-ready, Nimble/Agile, Flexible"
            },
            {
                termino:"BPA Business Process Automation",
                descripcion: "Automatization that combines consumer-like usability with enterprise-class reliability and security that empowers your workforce to automate on their own in real time"
            },
            {
                termino:"Roadmap IT Terminology",
                descripcion: "Where all the components of business vision, current-state and future-state efforts come together to form an actionable and meaningful plan to achieve effective outcomes"
            },
            {
                termino:"BPMN Business Process Model and Notation",
                descripcion: "Is a graphical notation for representing business process through business process diagrams"
            },
            {
                termino:"BPD Business Process Diagram",
                descripcion: "Is a diagram that depicts a directed flow of activities that are specified by using a subset of Business Process Modeling Notation"
            }    
        ];

        constructor (){
            console.log("Servicio ERP listo para usarse");
        }

        getErpglos(){
            return this.Erpglos;  
        }



    }