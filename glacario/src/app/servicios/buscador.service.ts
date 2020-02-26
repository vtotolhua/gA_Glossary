import { Injectable } from '@angular/core';

@Injectable()

export class buscadorService{
    
    private buscaTerm: buscarTerm[] = [
        /************************************************************/
        /*********           AMS            *************************/
        /************************************************************/
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



        /************************************************************/
        /********       ERP         *********************************/
        /************************************************************/
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
        },
        /************************************************************/
        /*********      NAVIGATE        *****************************/
        /************************************************************/
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
                    descripcion: "The IT asset lifecycle is the stages that an organization’s information technology asset goes through during the time span of its ownership. An IT asset is any company-owned information, software or hardware."       },
    
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
            },
        /************************************************************/
        /*********      GENERAL LEDGER          *********************/
        /************************************************************/
        {
            termino:"GL General Ledger",
            descripcion: "Represents the record-keeping system for a company's financial data with debit and credit account records validated by a trial balance. "
        },
        {
            termino:"AIA Application Integration Architecture",
            descripcion: "Is an IT process that ensures data or a function moves from one application to another."
        },   
        {
            termino:"BI Bussines Intelligent",
            descripcion: "Is an umbrella term that includes the applications, infrastructure and tools, and best practices that enable access to and analysis of information to improve and optimize decisions and performance."
        },  
        {
            termino:"IV  Interactive Version ",
            descripcion: "Allowing a two-way flow of information between a computer version and a computer-user"
        },    
        {
            termino:"MXN  Mexican Peso",
            descripcion: "Is the unit of money used in Mexico"
        },   
        {
            termino:"USD US Dollar",
            descripcion: "Is the unit of money used in the USA."
        }, 
        {
            termino:"AP Account Payable",
            descripcion: "Is a liability due to a particular creditor when it order goods or services without paying in cash up front, which means that you bought goods on credit"
        }, 
        {
            termino:"AR Account Receivable",
            descripcion: "Money owed to a company by its debtors."
        }, 
        {
            termino:"BU Business Unit",
            descripcion: "A logical element or segment of a company (such as accounting, production, marketing) representing a specific business function, and a definite place on the organizational chart, under the domain of a manager."
        },   
        {      
            termino:"Apllication Suite ",
            descripcion: "A suite is a set of usually related programs sold together in a single package."
        }, 
        {
            termino:"HCM Human Capital Management",
            descripcion: "Human capital management (HCM) is the comprehensive set of practices for recruiting, managing, developing and optimizing the human resources of an organization."
        }, 
        {
            termino:"CX Consumer experience",
            descripcion: "Consumer experience (CX) is the approach of emulating, in the business world, how individuals interact with technology in their personal lives."
        }, 
        {
            termino:"LOB Line of Business",
            descripcion: "An LOB (line-of-business) application is one of the set of critical computer applications that are vital to running an enterprise, such as accounting, supply chain management, and resource planning applications."
        },    
        {
            termino:"SFA Sales Force Automation",
            descripcion: "Sales automation tools can be used to create contacts, aggregate data, mine data, prioritize leads and create reports."
        }, 
        /************************************************************/
        /*********       MARKETING          *************************/
        /************************************************************/
        {
            termino:"Demographic Segmentation",
            descripcion: "This tool is primarily used for consumer markets. It involves segmenting the market along one or more demographic variables."
        },
        {
            termino:"Distribution Channels",
            descripcion: "Distribution channel is defined as a medium through which a company’s product or service is delivered to end customer.."
        },
        {
            termino:"Industry Reports",
            descripcion: "These reports are specific to a company’s industry and may contain current industry trends, present difficulties, legal and regulatory norms, and promising future developments. Industry reports are typically published by consulting firms or by industry associations and are available to any company, generally at a price."
        },
        {
            termino:"Market Analysis",
            descripcion: "Market analysis involves analyzing market data to identify patterns and predict future events. The purpose of performing a market analysis is to understand the attractiveness of a market."
        },
        {
            termino:"Market Definition",
            descripcion: "A market is defined as the set of potential customers who have a demand for the product category that includes the company’s product. It sets the boundaries within which segmentation is carried out. The definition should be broad enough so that the company can reasonably hope to acquire a share of the market within a timeframe that generates revenues commensurate with its corporate objectives. The market definition should also take into account the most likely future market scenarios so that the definition continues to stay valid in the long term."
        },    
        {
            termino:"Market Segments",
            descripcion: "The output of using any of the segmentation tools is a description of the various market segments a company wants to consider. The descriptions should contain the characteristics of each segment that differentiate one segment from another."
        },
        {
            termino:"Market Size",
            descripcion: "This dimension defines the size and potential of the markets under consideration. Market size is calculated on the basis of current sales volume for the market."
        },  
    
        {
            termino:"Market Trends",
            descripcion: "Market Trends show the overall growth or decline of a market, competitor activities, and customer behavior over time. Current market trends can also help in predicting future market trends"
        },  
        {
            termino:"Organizational capabilities",
            descripcion: "Organizational capabilities are those that allow a company to achieve its organizational goals and gain a competitive advantage. Capabilities can originate from any function or may already be fundamental to a company."
        }, 
        /************************************************************/
        /***************     CLOUD JOURNEY        *******************/
        /************************************************************/
        {
            termino:"Cloud computing",
                    descripcion: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet. Large clouds, predominant today, often have functions distributed over multiple locations from central servers. If the connection to the user is relatively close, it may be designated an edge server."
            },
            
        {
            termino:"IaaS Infrastructure as a service",
                    descripcion: "Online services that provide high-level APIs used to dereference various low-level details of underlying network infrastructure like physical computing resources, location, data partitioning, scaling, security, backup etc."
            }, 
    
            {
            termino:"PaaS Platform as a service",
                    descripcion: "he capability provided to the consumer is to deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools supported by the provider. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment."
            },      
    
            {
            termino:"SaaS Software as a service",
                    descripcion: "The capability provided to the consumer is to use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (e.g., web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings."
            },
    
            {
            termino:"Gartner",
                    descripcion: "officially known as Gartner, Inc. is a global research and advisory firm providing information, advice, and tools for businesses in IT, finance, HR, customer service and support, legal and compliance, marketing, sales, and supply chain functions. It is a member of the S&P 500. Its headquarters are in Stamford, Connecticut, United States. The firm changed its name from Gartner Group, Inc to Gartner in 2000."
            },    
    
            {
            termino:"O/S Operating System",
                    descripcion: "A cloud operating system is a type of operating system designed to operate within cloud computing and virtualization environments. A cloud operating system manages the operation, execution and processes of virtual machines, virtual servers and virtual infrastructure, as well as the back-end hardware and software resources."
            },  
    
            {
            termino:"DevOps",
                    descripcion: "Is a set of software development practices that combine software development (Dev) and information-technology operations (Ops) to shorten the systems-development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives."
            },  
    
            {
            termino:"M&A Mergers and acquisitions",
                    descripcion: "are transactions in which the ownership of companies, other business organizations, or their operating units are transferred or consolidated with other entities. As an aspect of strategic management, M&A can allow enterprises to grow or downsize, and change the nature of their business or competitive position"
            },  
    
        {
            termino:"Server",
                    descripcion: "A server is a type of computer or device on a network that manages network resources. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks."
            },
              
        {
            termino:"Database",
                    descripcion: "It is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques.."
            },
        {
            termino:"Rack space",
                    descripcion: "Rackspace Inc. is an American managed cloud computing company based in Windcrest, Texas, a suburb of San Antonio."
            },
              
        {
            termino:"Ntt data Corporation: (Kabushiki-kaisha Enu-ti-ti Deta)",
                    descripcion: "It is a Japanese system integration company and a partially-owned subsidiary of Nippon Telegraph and Telephone (NTT).."
            },
    
        {
            termino:"Software on demand",
                    descripcion: "A software that is available 1.- At any time that someone wants or needs something. 2. available when a customer wants or asks for something."
            },
              
        {
            termino:"HEC Core services: HANA Enterprise Cloud",
                    descripcion: "SAP HEC is a managed, private cloud hosting service for SAP HANA and its related applications."
            },
        {
            termino:"Virtualization",
                    descripcion: "In computing, virtualization refers to the act of creating a virtual (rather than actual) version of something, including virtual computer hardware platforms, storage devices, and computer network resources."
            },
              
        {
            termino:"Heroku",
                    descripcion: "Heroku is a cloud-based development platform as a service (PaaS) provider. The Heroku platform supports development in Ruby on Rails, Java, Node.js, Python, Scala and Clojure."
            },
    
        {
            termino:"Wave Maker",
                    descripcion: "It is a leading Rapid Application Development software platform to quickly build enterprise-grade multi-device apps. It allows developers and business users to work with standard enterprise-grade technologies to immediately create apps that can be easily extended or customized."
            },
              
        {
            termino:"GAE: Google App Engine",
                    descripcion: "It is a development environment that enables developers to build Web applications on the same scalable systems that power Google's own applications."
            },
        {
            termino:"Middleware",
                    descripcion: "It is software that lies between an operating system and the applications running on it. Middleware can also be used for distributed processing with actions occurring in real time rather than sending data back and forth.."
            },
              
        {
            termino:"Salesforce",
                    descripcion: "It is a customer relationship management solution that brings companies and customers together. It's one integrated CRM platform that gives all your departments — including marketing, sales, commerce, and service — a single, shared view of every customer."
            },
        {
            termino:"SDK: A software development kit.",
                    descripcion: "SDK or devkit is typically a set of software development tools that allows the creation of applications for a certain software package, software framework, hardware platform, computer system, video game console, operating system, or similar development platform."
            },
        {
            termino:"Bearingpoint",
                    descripcion: "It is a multinational management and technology consulting firm headquartered in Amsterdam, Netherlands. It has operations in 22 countries with around 4,500 employees[4] and is one of the largest management consultancies in Europe."
            },
        {
            termino:"VPN: Virtual private network",
                    descripcion: "Virtual private network extends a private network across a public network, and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network."
            },
        {
            termino:"SAP Ariba",
                    descripcion: "It is an American software and information technology services company located in Palo Alto, California. It was acquired by German software maker SAP SE for $4.3 billion in 2012."
            },
        /************************************************************/
        /*********      COMMON FOUNDATION       *********************/
        /************************************************************/
        {	termino:"ERP Enterprise Resource Planning", 
            	descripcion:"refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations."
        },
	    {	termino:"CRP, Capacity Resource Planning", 
            descripcion:"Planifying in resources as machine as man, needed for realize in time asigned in a productive center."
       	},
	    {	    termino:"MRP Material Requirement Planning", 
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
	    },
        /************************************************************/
        /*******        DIGITAL BUSINESS TRANSFORMATION     *********/
        /************************************************************/
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
        },
        /************************************************************/
        /********           DATA SCIENCE                *************/
        /************************************************************/
        {
            termino:"Algorithm",
            descripcion: "A series of repeatable steps for carrying out a certain type of task with data. As with data structures, people studying computer science learn about different algorithms and their suitability for various tasks. Specific data structures often play a role in how certain algorithms get implemented."
        },
            
        {
            termino:"AngularJS", 
           descripcion:"An open-source JavaScript library maintained by Google and the AngularJS community that lets developers create what are known as Single [web] Page Applications. AngularJS is popular with data scientists as a way to show the results of their analysis."
        },
    
        {
            termino:"Artificial intelligence", 
            descripcion:"Also, AI. The ability to have machines act with apparent intelligence, although varying definitions of “intelligence” lead to a range of meanings for the artificial variety. In AI’s early days in the 1960s, researchers sought general principles of intelligence to implement, often using symbolic logic to automate reasoning. As the cost of computing resources dropped, the focus moved more toward statistical analysis of large amounts of data to drive decision making that gives the appearance of intelligence."
        },
    
        {
            termino:"Backpropagation", 
           descripcion:"Also, backprop. An algorithm for iteratively adjusting the weights used in a neural network system. Backpropagation is often used to implement gradient descent."
        },
    
        {
            termino:"Big Data", 
            descripcion:"As this has become a popular marketing buzz phrase, definitions have proliferated, but in general, it refers to the ability to work with collections of data that had been impractical before because of their volume, velocity, and variety (“the three Vs”). A key driver of this new ability has been easier distribution of storage and processing across networks of inexpensive commodity hardware using technology such as Hadoop instead of requiring larger, more powerful individual computers. The work done with these large amounts of data often draws on data science skills."
        },
        
        {
            termino:"Classification", 
            descripcion:"The identification of which of two or more categories an item falls under; a classic machine learning task. Deciding whether an email message is spam or not classifies it among two categories, and analysis of data about movies might lead to classification of them among several genres."
        },
    
        {
            termino:"Data engineer", 
            descripcion:"A specialist in data wrangling. “Data engineers are the ones that take the messy data... and build the infrastructure for real, tangible analysis. "
        },
        
        {
            termino:"Data mining", 
            descripcion:"Generally, the use of computers to analyze large data sets to look for patterns that let people make business decisions. While this sounds like much of what data science is about, popular use of the term is much older, dating back at least to the 1990s"
        },
         
        {
            termino:"Data structure", 
            descripcion:"A particular arrangement of units of data such as an array or a tree. People studying computer science learn about different data structures and their suitability for various tasks. "
        },
         
        {
            termino:"Decision trees", 
            descripcion:"A decision tree uses a tree structure to represent a number of possible decision paths and an outcome for each path. If you have ever played the game Twenty Questions, then it turns out you are familiar with decision trees."
        },
     
        {
            termino:"Histogram", 
            descripcion:"A graphical representation of the distribution of a set of numeric data, usually a vertical bar graph."
        },
     
        {
            termino:"Machine learning", 
            descripcion:"The use of data-driven algorithms that perform better as they have more data to work with, from this additional data. This often involves cross-validation with training and test data sets."
        },
     
        {
            termino:"Neural network", 
            descripcion:"A robust function that takes an arbitrary set of inputs and fits it to an arbitrary set of outputs that are binary. "
        },
        /************************************************************/
        /***************        GA OFFERING         *****************/
        /************************************************************/
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
        },
        /************************************************************/
        /*************          ITIL             *******************/
        /***********************************************************/
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
        /************************************************************/
        /***************        ORACLE UNIVERSITY       *************/
        /************************************************************/
        {
            termino:"Adobe Acrobat Reader",
            descripcion: "One of the plugins that is required to download course materials by some online course offerings."
        }, 
        {
            termino:"Calendar",
            descripcion: "Use the Calendar to help you plan and keep track of your scheduled learning events and personal appointments by day, week, month or year. Click the Month tab to view your scheduled events for a specific month."
        },   
        {
            termino:"Catalog",
            descripcion: "Use the Search and Browse Catalog to search for learning events. Only those events you have access to are displayed in the search results."
        },
        {
            termino:"Certificate of Completion",
            descripcion: "After you have completed the offering, go to Profile > Transcripts and under Completed Offerings, click the Certificate icon to view and print your certificate of completion."
        },
        {
            termino:"Content Details",
            descripcion: "The Content Details page contains information about the course offering, such as description, objectives, learner reviews, and so on. In the Content Details page, you can enroll in the course or add it to your wish list"
        },
        {
            termino:"iLearning",
            descripcion: "A learning community management product, available as a fully hosted platform that offers a corporate-wide learning solution to deliver personalized education on the Web. The Oracle University Knowledge Center is one of many sites hosted in the Oracle iLearning product."
        },
        {
            termino:"Oracle University Knowledge Center ",
            descripcion: "Oracle University Knowledge Center offers in-depth courses for advanced Oracle professionals. Oracle University Knowledge Center Passport is offered as a membership service."
        },
        {
            termino:"Profile",
            descripcion: "This section of Profile contains the order key activation field. If you purchased an knowledge center passport, then you received a confirmation email with an order key number."
        },
        {
            termino:"Reports",
            descripcion: "Offers several options to help you update, organize and track information related to your learning. The options are: User Information, Transcripts, Reports, Wish List, and Orders."
        },
        {
            termino:"Transcripts",
            descripcion: "Maintains a record of all your completed, expired, and unenrolled offerings. Information contained in the transcripts include the enrollment date, the date you last accessed the offering, the total time spent on your learning, status of completion and your certificates. This is found in the Profile tabbed page."
        },
        /************************************************************/
        /**************           RPA                    ************/
        /************************************************************/
        
        {
            termino:"Artificial intelligence (AI)",
                    descripcion: " technology intended to respond to and learn from stimulation in a similar way to human responses with a level of understanding and judgement that's normally only found in human expertise."
            },
    
    {
            termino:"Attended RPA",
                    descripcion: "attended RPA includes scenarios where decision making and/or user input is required, such as desktop automation. These software robots work at an employee's workstation and are triggered by two situations: a user's command and instances were Robots need input from the user to continue a task. Access is often limited to the employees within a specific department or workstation."
            },
    
    {
            termino:"Automation design",
                    descripcion: "a plan for how RPA will be rolled out in an organization. As part of this plan, companies identify a list of processes that are the best candidates for automation. The design can be a short- or long-term plan."
            },
    
    {
            termino:"Automation first' era",
                    descripcion: "an era of technology where people think to apply RPA to as many processes as possible for enhanced productivity and embraces the vision having one Robot for each employee."
            },
    
    {
            termino:"Business intelligence",
                    descripcion: "a system of technologies, practices, and applications that help companies collect, analyze, and present information related to business operations."
            },
    
    {
            termino:"Business process management (BPM)",
                    descripcion: "the practice of using modeling, automation, data insights to optimize business activities, enterprise goals, and employee operations."
            },
    
    {
            termino:"RPA Center of Excellence (CoE)",
                    descripcion: "a department within a company created early on in the RPA rollout to support the implementation and ongoing deployment of RPA. This team uses RPA tools and technical experience to identify and manage ongoing RPA implementation. This team should include members from multiple departments across an organization."
            },
    
    {
            termino:"Cognitive automation",
                    descripcion: "automation that's a step up from regular RPA that can work on semi-structured and structured data alike."
            },
    
    {
            termino:"Command-line interface (CLI)",
                    descripcion: " a way of interacting with a computer program by triggering actions with lines of text (command lines) directly to a program. "
            },
    
    {
            termino:"Computer vision",
                    descripcion: "the technology that allows automation software to recognize and interact with information from images or multi-dimensional sources that can be used for artificial intelligence, machine learning, and pattern recognition. "
            },
    
    {
            termino:"Deep learning",
                    descripcion: "a pattern-based processing method that is a type of machine learning. Deep learning allows automation robots to mimic human tasks like identifying images on a screen, recognizing language, or predicting outcomes. "
            },
    
    
    
    {
            termino:"Enterprise resource planning (ERP)",
                    descripcion: "a system that allows companies to manage operations such as accounting, project management, and procurement through software packages that enables companies to gain insight through a single database of shared information."
            },
    
    {
            termino:"Enterprise RPA",
                    descripcion: "an RPA scenario where a company aims to automate and optimize the execution and rollout of RPA robots, not just the creation of them. This includes a strategy for how the robots are deployed in relation to human teams throughout the organization, supported by a flexible process flow."
            },
    
    {
            termino:"Full-time equivalent (FTE)",
                    descripcion: " the amount of work a full-time employee does in a department, or on a certain project."
            },
    
    {
            termino:"Graphical user interface",
                    descripcion: "a method of computer interaction that allows users to trigger program actions with windows, icons, and menus."
            },
    
    {
            termino:"Hot-seating scenario",
                    descripcion: "Working places where employees do not have fixed machines and they are free to use any machine in the working space. This situation applies in contact centers or other offices where people work in shifts. UiPath provides floating automation solution for such scenarios."
            },
    
    {
            termino:"Industry-specific processes",
                    descripcion: "processes that are unique to a specific industry, such as fraud claims discovery in banking, claims processing in insurance, and bills of material (BOM) generation in manufacturing. "
            },
    
    
    {
            termino:"Machine learning",
                    descripcion: " the process that allows software robots and AI to learn new processes through pattern recognition rather than needing to be individually and precisely programmed for each new situation. "
            },
    
    {
            termino:"Natural language processing (NLP)",
                    descripcion: "part of artificial intelligence, NLP allows computers to understand, interpret, and mimic human languages. "
            },
    
    {
            termino:"Optical character recognition (OCR)",
                    descripcion: " software that singles out letters and symbols in PDFs files, images, and paper documents that enables users to edit the content of the documents digitally."
            },
    
    {
            termino:"Pilot program",
                    descripcion: "a test of the automation that follows the initial proof-of-concept phase to see if the robot will perform as expected in more advanced, complicated conditions."
            },
    
    {
            termino:"Proof of concept (POC)",
                    descripcion: "a test run of the automation to discover its limitations and help ensure that the robot will work as intended"
            },
    
    {
            termino:"Robotic Operations Center (ROC)",
                    descripcion: " a robotics department which specializes in rapid automation and high-quality, low-cost change management. Where a CoE supports early RPA implementation and roll-out, the ROC supports existing robots, automates new processes, manages RPA-related security, and performs compliance functions for more mature RPA models. It is a structured department with a defined budget and operational service-level agreements (SLAs)"
            },
    
    {
            termino:"Robotic process automation (RPA)",
                    descripcion: "software robots that mimic and integrate human actions within digital systems to optimize business processes. RPA automation captures data, run applications, trigger responses, and communicate with other systems to perform a variety of tasks."
            },
    
    {
            termino:"RPA roadmap",
                    descripcion: "a plan that comes after the automation design phase and provides companies with guidelines to meet their RPA goals. This includes a cost-benefit analysis of the processes selected for automation."
            },
    
    {
            termino:"Role-based access control (RBAC)",
                    descripcion: "security parameters that restrict employees to only have access to information that is required to do their unique jobs, preventing them from reading documents or sensitive materials that are not relevant to their day-to-day work."
            },
    
    {
            termino:"RPA environment",
                    descripcion: "the combined processes that have been automated in a company, usually within a singular department. "
            },
    
    {
            termino:"UiPath Orchestrator",
                    descripcion: "allows a company to schedule, manage, and monitor all robots in one secure place. The UiPath Orchestrator lets companies deploy and scale their RPA solutions as well as audit and monitor both robots' and users' activities."
            },
    
    {
            termino:"RPA operating model",
                    descripcion: "a plan for how RPA will be designed and rolled out. This model often involves process architects, technology experts/advisors, and ongoing maintenance and support staff. The model changes slightly based on company and industry to best suit their automation goals."
            },
    
    {
            termino:"UiPath Studio",
                    descripcion: "an automation designing tool that allows businesses to model required business processes across different levels of complexity and scale. Studio is a versatile tool with various attractive features and is widely accepted by users varying from business to programming enthusiasts"
            },
    
    {
            termino:"UiPath RPA platform",
                    descripcion: "UiPath Enterprise RPA Platform is a powerful, efficient and flexible automation software which helps in automating important repetitive tasks for enterprises. The platform consists of Studio, the development tool, Orchestrator, the web based central remote system, and Robots, which actually automate the processes."
            },
    
    {
            termino:"Screen scraping",
                    descripcion: "copying data from one application to another using a computer program."
            },
    
    {
            termino:"Software robots",
                    descripcion: " software robots—instead of physical robots that fill manufacturing plants—that free human employees from repetitive, manual work and data entry. These robots interact with applications and systems through a graphical user interface or command-line interface to carry out routine tasks."
            },
    
    {
            termino:"RPA Multi-tenancy",
                    descripcion: "an architecture where single instance of software application can be used by multiple teams/departments. The UiPath Platform offers multi-tenancy so that a tenant can be formed for each department within an organization. Multi-tenancy facilitates convenient scaling and collaboration while maintaining privacy."
            },
    
    {
            termino:"Unattended RPA",
                    descripcion: "software robots that need little—or no—human intervention to carry out actions on a 24/7/365 basis when triggered. These robots complete work continuously in a batch-mode model that allows for around the clock automation. These robots can be accessed remotely by different interfaces and platforms, and administrators can view, analyze, and deploy scheduling, reporting, auditing, monitoring, and modification functions in real-time from a centralized hub."
            },
    
    {
            termino:"Unstructured data",
                    descripcion: "information that isn’t organized in a defined way and is often filled with text, dates, and numbers in an unorganized system."
            },
    
    {
            termino:"Workflow automation",
                    descripcion: " using RPA technology to automate steps in manual or routine business tasks to improve day-to-day practices, make employees more efficient, and allow humans to focus on higher return work."
            },
    
    {
            termino:"Virtual environment",
                    descripcion: "the system created by automation software and programs that manage an organization’s processes from within a company’s existing IT setup. This environment is controlled by the company and creates a central software hub for administrators and users."
            },


        /************************************************************/
        /**************         SCRUM            ********************/
        /************************************************************/
        {
            termino:"Acceptance criteria",
                    descripcion: "Are the characteristics of the product that were specified by the Product Owner 'PO' when we start a new development that were accepted by the user, customer, or other authorized entity which used standards to measure and compare the characteristics of the final product with specified characteristics."
            },
            
        {
            termino:"Acceptance Test",
                    descripcion: "Test that check the requested and implemented features, which determines if these features match with the business and the customer requirements."
            },        
    
        {
            termino:"Acceptance Test Driven Development (ATTD)",
                    descripcion: "System or product development method in which the acceptance criteria are discussed extensively by the participants, through the use of examples and well-designed acceptance tests on the basis of this creteria before development begins."
            },
            
        {
            termino:"Accuracy",
                    descripcion: "Degree which measured value is very close to the true value (PMI)."
            },      
          
        {
            termino:"Acquire Project Team",
                    descripcion: "Process of confirming and securing the team necessary to complete the project. Skill, experiences and availability of resources which are important parameters considered while acquiring project team."
            },      
    
        {
            termino:"Adaptability",
                    descripcion: "Characteristic in a person, team, process or system measured in the ability/capability to adapt or being adapted. In organization context, it refers to the ability of change something to face changes."
            },
            
        {
            termino:"Adaptation",
                    descripcion: "Modification of the product developed. Variations in the actual value and true value trigger the need for control and modification of the product or process."
            },      
    
        {
            termino:"Adaptative planning",
                    descripcion: "Agile methodologies which reduce waste by removing process that don't add value. Planning is done Just in Time 'JIT'."
            },
        {
            termino:"Adaptative Project Management",
                    descripcion: "Structured and iterative process of management which focuses on less up-front planning, unlike waterfall methods. This creates a fairly adaptable environment for teams where they focus only in the immediate tasks at hand, complete them, and then move to the next tasks. If there are any changes in requirements, they will be incorporated into the next Sprint. This ensures you to be on track with the quick changing market and technology scenario, enabling you to deliver the greatest value in the shortest time to your customers."
            },      
    
        {
            termino:"Additional Risk Response Planning",
                    descripcion: "Take care of risks that where not initially identified or when impact on objectives is greater than expected. The existing risk response planning may not be enough to control the risk."
            },
    
        {
            termino:"Agile", 
                    descripcion:"Agile is a group of iterative and incremental software development methods. It encourages flexibility and speed in responding to change. It requires collaboration between self-organized, cross-functional teams to generate requirements and solutions."
            },
    
            {
                termino:"Agile Unified Process",
                        descripcion: "Agile Unified Process (AUP)  is a refinement of the 'IBM Rational Unified Process (RUP)' described by Craig Larman in 2001. Agile concepts and techniques are used to select elements from RUP. Iterations are classified into two types: Development and Release."
                },      
        
            {
                termino:"All Before Any",
                        descripcion: "Sequential development process in which the output from previous step is used as input for the next step in the process using a batch size of 100%."
            },      
        
            {
                termino:"Approach",
                        descripcion: "Method used or steps taken in, setting about a task or problem by the scrum team. The approach differs from team to team."
            },        
        
            {
                termino:"Artifact",
                        descripcion: "Concrete by product formed during the development cycle. As an example we have Product Backlog and the Sprint Backlog"
            },        
        
            {
                termino:"Assumptions",
                        descripcion: "Factors that considered to be true, real or certain."
            },        
        
            {
                termino:"Assumptions Analysis",
                        descripcion: "Project management exercise that explores the validity of assumptions that were made at the beginning of the project to identify any potential project risk conceived and developed because of the inaccuracy of any assumption. It also identifies risks because of any instability, inconsistency, or incompleteness of assumptions."
            },        
        
            {
                termino:"Basic Unified Process (BUP)",
                        descripcion: "Simpler Variation of Rational Unified Process (RUP) developed in 2005. It was optimized for small projects by IBM."
            },        
        
            {
                termino:"Behavior Driven Development 'BDD'",
                        descripcion: "Software development which involves collaboration between non-technical or business participants and people with technical insight like developers, QA, etc."
            },       
        
        {
            termino:"Brainstorming", 
                    descripcion:"A group activity or creativity technique that can be used to generate and analyze ideas or to identify issues, risks, or even to determine solutions to problems."
            },
    
        {
            termino:"Burn down Chart", 
                    descripcion:"A graphical representation of the amount of work completed/done versus the elapsed time period. It is used to estimate the time needed to complete the project. The vertical axis represents the planned work, and the horizontal work axis represents the time. The general trend in the graph is to 'burn down' to a point where no work remains."
            },
    
        {
            termino:"Burn up Chart", 
                    descripcion:"A graphical representation of the amount of work completed against planned over a period of time. The graphical trend line moves upward toward the goal line, hence called 'burn up' in contrast to 'burn down.' It is used to estimate the time needed to complete the project."
            },
    
        {
            termino:"Buyer-Seller relationship", 
                    descripcion:"In a commercial project environment, a seller could be any entity (subcontractor, vendor, or supplier) who manages the work of the project or delivers the product of the project and the buyer is the customer who outsources the work to the seller."
            },
    
        {
            termino:"Cadence", 
                    descripcion:"Cadence is the approach to achieving commitment and reliability with a system. It is a measure of balance and the rhythmic flow of the process. Sprints of regular time interval or duration establish a cadence for a development effort."
            },
    
        {
            termino:"Capability Maturity Model Integration (CMMI)", 
                    descripcion:"CMMI is a process improvement product suite. It was developed by the CMMI project as a collaborative industry, government, and academic effort, which combined best practices for software development. It is very effective for projects involving defined processes."
            },
    
        {
            termino:"Capacity", 
                    descripcion:"Capacity is defined by the amount of work that can be accomplished within the available resources."
            },
    
        {
            termino:"Ceremony", 
                    descripcion:"A formal act or set of acts performed as prescribed by ritual or custom. Core Scrum activities like spring planning, daily scrum, sprint review, and sprint retrospective are referred to as ceremony by the Scrum team."
            },
    
        {
            termino:"Chaotic Domain", 
                    descripcion:"The state of crisis that needs to be immediately addressed to prevent further harm or loss and re-establish the order. It calls for quick response."
            },
    
        {
            termino:"Chickens and Pigs", 
                    descripcion:"A fable used in the Agile Project Management to define the type of role an attendee can play in Scrum. It derives from the fable of a chicken and a pig that planned to open a restaurant together. Both of them are involved but only the pigs are committed. Pigs have to get the project completed according to the requirements."
            },
    
        {
            termino:"Chief Product Owner", 
                    descripcion:"The person responsible for the overall Product Backlog in product development with multiple Scrum Teams."
            },
        {
            termino:"Code Refactoring", 
                    descripcion:"A technique used in software development for restructuring/redesigning an existing body of code without changing its behavior. The purpose of re-factoring is to improve non-functional attributes of the software, e.g., managing technical debt or making coding faster."
            },
        
        {
            termino:"Collect Requirements", 
                    descripcion:"Process of defining and documenting stakeholder's needs to meet the project objectives."
            },
    
        {
            termino:"Collective accountability", 
                    descripcion:"In a Scrum Project environment, the whole team is collectively responsible for ensuring that the work agreed on for a Sprint is completed in a timely manner."
            },
    
        {
            termino:"Commitment", 
                    descripcion:"Commitment means a conscious choice to do something. To bind or obligate oneself to a cause, person, or action, as by pledge or assurance."
            },
    
        {
            termino:"Communications Technology", 
                    descripcion:"Technologies or methods to transfer information among project stakeholders."
            },
    
        {
            termino:"Complex Adaptive System", 
                    descripcion:"Numerous entities governed by common simple localized rules, which interact with each other in various ways and receive constant feedback."
            },
    
        {
            termino:"Complex Domain", 
                    descripcion:"A domain in the Cynefin framework wherein the situation is unpredictable and the correctness of the answer is only known in hindsight."
            },
    
        {
            termino:"Component Team", 
                    descripcion:"Component teams are specialized teams organized around the architecture of the product under development. A team that focuses on the creation of one or more components of a larger product that a customer would purchase. Component teams create assets or components that are then reused by other teams to assemble customer-valuable solutions."
            },
    
        {
            termino:"Conditions of Satisfaction", 
                    descripcion:"Conditions of satisfaction are the acceptance criteria specified by the product owner, which determine the desired behavior of the product that to be accepted. These are the conditions under which the product owner is satisfied with the outcome of each product backlog item."
            },
    
        {
            termino:"Continuous Delivery", 
                    descripcion:"Delivering the product or each product feature to its users immediately after it is integrated and tested by the developer."
            },
    
        {
            termino:"Continuous Deployment", 
                    descripcion:"Delivering the product or each product feature to its users immediately after it is integrated and tested by the developer."
            },
    
        {
            termino:"Continuous Improvement", 
                    descripcion:"On most traditional projects, lessons learned are compiled at the end of the project so they can be applied to future projects. However, applying lessons to future projects does not add value to the current project. Future projects may not be similar to past projects. Therefore, Agile aims to continuously learn during each project and apply lessons learned within the current project. Several tools, techniques, knowledge sets, and skills can continuously improve Agile projects - e.g. retrospective meetings, knowledge sharing etc."
            },
    
        {
            termino:"Cost of Delay", 
                    descripcion:"Monetary loss incurred due to delay in work, process, or achieving production targets. This concept emphasizes that the time associated with project has a financial cost."
            },
    
        {
            termino:"Cross Functional Team", 
                    descripcion:"A project team that has expertise from the different fields, like designers, developers, and testers who have skills required to complete the work effectively and efficiently."
            },
    
        {
            termino:"Crystal", 
                    descripcion:"The Crystal family of methodologies was developed by Alistair Cockburn in the mid-1990s. The methodologies are named after colors and/or gemstones to indicate the 'weight' of methodology needed (as per the team attributes or strategic needs). The most famous is also the lightest, called 'Crystal Clear,' used for small teams with co-located members working on noncritical tasks. The family focuses on efficiency and habitability as constituents of project safety."
            },
    
        {
            termino:"Daily Stand-Up", 
                    descripcion:"The daily standup meeting, or Scrum meeting, is a daily team meeting in the Scrum Framework. The name comes from the practice of the attendees standing up. This encourages the members to keep the meeting short. It gives the team a regular opportunity to monitor progress along the sprint plan."
            },
    
        {
            termino:"Defined Process", 
                    descripcion:"A well-defined process that produces the same output for the same input every time (minus the minor variations within the range). The inputs, outputs and the steps involved are clearly stated in such process."
            },
        {
            termino:"Defined Process Control", 
                    descripcion:"A process control approach used for defined processes. This model primarily involves creating and maintaining processes that produce expected output."
            },    
        {
            termino:"Delphi Method", 
                    descripcion:"The Delphi Method is an estimation/surveying method in which estimates and opinions are collected anonymously from a panel. This reduces the bias that may arise due to the power/influence of certain panel members."
            },
    
        {
            termino:"Development Team", 
                    descripcion:"A development team is formed with members from different areas of functional expertise. It has to be self-organized, and it must drive toward a single goal. This team is collectively responsible developing of an acceptable product."
            },
    
        {
            termino:"Disorder Domain", 
                    descripcion:"This is one of the domains in the Cynefin framework. This is a dangerous stage, and the priority should be to come out of this domain because we either don't understand or can't make sense of the situation we are in."
            },
    
        {
            termino:"Dot Voting", 
                    descripcion:"This technique is used for identifying items with higher priority. Participants have to cast their vote by placing a colored dot against one item among the listed, and the item with most dots is considered an item of higher priority. This technique is frequently used during the sprint retrospective."
            },
    
        {
            termino:"Economic Filter", 
                    descripcion:"Economic filter is used as a decision-making criterion by the organization to evaluate the economic benefits of the project under consideration and whether to fund it or not."
            },
        {
            termino:"Empirical Process Control", 
                    descripcion:"A process control approach used when processes are incompletely defined and the output is unique. This model leverages frequent inspection, adaptation and transparency. Scrum enables empirical process control for project management."
            },
        {
            termino:"End Uncertainty", 
                    descripcion:"End uncertainty is the uncertainty surrounding the properties of the final deliverable of a project or process."
            },
        {
            termino:"Epic", 
                    descripcion:"An epic is a large user story, typically one that is too big to fit in a single sprint. Epics need to be broken down into smaller user stories at some point before implementation as part of a sprint."
            },
        {
            termino:"Essential Unified Process", 
                    descripcion:"An Agile Method sourced from Rational Unified Process (RUP), Capability Maturity Model Integration (CMMI) and Agile processes. Used primarily for software development, it was developed by Ivar Jacobson, one of the original contributors to RUP, as an improvement on the Rational Unified Process. It is practice centric rather than focused on processes/roles. It relies on Separation of Concerns, a principle of separating the product into separate sections, each addressing a separate concern."
            },
        {
            termino:"Estimation", 
                    descripcion:"A rough calculation of the number, quantity, or size of product backlog items, portfolio backlog item, and sprint backlog task."
            },
        {
            termino:"Functional Test", 
                    descripcion:"Functional Testing usually describes what the system does. Here functions are tested by feeding input and examining the output. It is type of 'Black Box Testing' where we do not consider the internal program structure and mostly compare the actual and expected outputs."
            },
        {
            termino:"Genchi Genbutsu", 
                    descripcion:"In Japanese, this means 'go and see for yourself.' It is the conviction that real time experience is more useful than theory. One must see the problem to understand the problem rather than hear about a problem from someone else. This will help in making an informed decision about the solution."
            },
        {
            termino:"Group Decision Making Techniques", 
                    descripcion:"Used to generate, classify, and prioritize product requirements. Some methods used to reach group decisions are: unanimity, majority, plurality, and dictatorship."
            },
        {
            termino:"Impediment", 
                    descripcion:"A factor that's causing a hindrance or blockage from performing scrum in an effective manner in a team or organization."
            },
        {
            termino:"Impediment Log", 
                    descripcion:"Impediment log captures or records impediments, description of the impediments, impacts of the impediments, the solution, if any and status of the impediments. The format may vary. It is recommended that the Scrum Master update the log after each Daily Stand-up."
            },
        {
            termino:"Incremental Funding", 
                    descripcion:"Funding a part of the product development without committing to funding all of it. With incremental funding, only a small part of the development effort is funded, after which the funding decision is critically valued to see what is being paid to get from this small part."
            },
        {
            termino:"Information Radiator", 
                    descripcion:"A visual display that presents sufficiently detailed, up-to-date, and important information to passersby in an easy self-interpretative format."
            },
        {
            termino:"Innovation Accounting", 
                    descripcion:"A mathematically intense process of defining, measuring, and communicating improvements in innovation. This framework tries to identify the reasons for differences in innovative output between teams are different time periods. Commonly used as a metric to measure progress of startups."
            },
        {
            termino:"Innovation Waste", 
                    descripcion:"The opportunity lost to create an innovative solution. Usually occurs when a prescribed solution is provided with a product backlog item."
            },
        {
            termino:"Integration", 
                    descripcion:"The combination of various components of a product to form a coherent, larger-scope work product that can be validated to function correctly as a whole."
            },
        {
            termino:"Internal Stakeholders", 
                    descripcion:"The stakeholders who are internal to the organization, i.e., those who are involved in product development. For example, senior executives, managers and internal users."
            },
        {
            termino:"Interviews", 
                    descripcion:"A formal or informal approach to obtain information from stakeholders by talking to them directly"
            },
        
            {
                termino:"Iterative Product Development", 
                descripcion:"In iterative product development, the final product is developed over a few iterations and delivered to the customer."
            },
            {
                termino:"Kanban", 
                descripcion:"This term means 'signboard' in Japanese. Taiichi Ohno adapted the word used for shop signboards to depict the following philosophy: A down steam process must go and fetch what it needs--similar to how we go and fetch what we need from a shop/store."
            },
            {
                termino:"Kano Model", 
                descripcion:"Named after Noriaki Kano, a Japanese professor Kano Model is used to map what is valued by the customer by classifying the product attributes into basic, performance, and excitement categories. It can be used to determine the minimally viable product that a customer will feel satisfies his or her basic requirements."
            },
            {
                termino:"Lean", 
                descripcion:"Lean Manufacturing or simply Lean focuses on the removal of waste from the production. It is a practice for delivering more or same value with less resource by eliminating waste across organizations and business processes."
            },
            {
                termino:"Minimum Marketable Features (MMFs)", 
                descripcion:"The smallest or minimum set of functionality related to a feature that must be delivered for the customer to perceive value (for it to be marketable)."
            },
            {
                termino:"Minimum Viable Product (MVP)", 
                descripcion:"A product with just those minimal features that allow it to be deployed, and no more. Usually, MVP is the result of the first sprint."
            },
            {
                termino:"Prioritization", 
                descripcion:"The process of ordering a list according to a given attribute."
            },
            {
                termino:"Prioritized Delivery", 
                descripcion:"Scrum believes in delivering the greatest amount of value in the least amount of time. This requires prioritized delivery in which 'what will be done' has to be chosen from 'what has to be done' according to business value."
            },
            {
                termino:"Product Backlog", 
                descripcion:"A prioritized list of work to be performed in a project. In the Scrum framework, this evolves with the business need and the environment ."
            },
            {
                termino:"Product Backlog Grooming", 
                descripcion:"The filtering of tasks on the product backlog based on their importance as per criteria set by the product owner."
            },
            {
                termino:"Product Description", 
                descripcion:"Documents the characteristics of the product, or deliverable which the project is undertaken to create."
            },
            {
                termino:"Product Owner", 
                descripcion:"The leader of the product development team. The voice of the stakeholder community to the scrum team. The product owner defines what to do and in what order to do it"
            },
            {
                termino:"Product Scope", 
                descripcion:"Features or services that characterize a product, result, or service"
            },
            {
                termino:"Product Vision", 
                descripcion:"A statement describing the desired future state that would be achieved by developing and deploying a product. A good product vision is simple, easy to understand statement and provides a coherent direction to the people who are asked to realize it."
            },
            {
                termino:"Queue", 
                descripcion:"A term adapted from Lean Manufacturing. An inventory of items that wait for the next action in the work stream."
            },
            {
                termino:"Release Planning", 
                descripcion:"A term borrowed from Lean Manufacturing. The function of release planning is to synchronize projected range of potential delivery dates in the future with tasks to be done today."
            },
            {
                termino:"Role", 
                descripcion:"A well-defined set of responsibilities that may be fulfilled by one or more people and for which they are accountable. The three Scrum roles are product owner, Scrum Master, and development team."
            },
            {
                termino:"Scrum", 
                descripcion:"A methodology originally refined in 1995 by Ken Schwaber and Jeff Sutherland from work done by Hirotaka Takeuchi and Ikujiro Nonaka. Named after the SCRUM in Rugby, this is the most recognized Agile framework. It is an iterative methodology that treats major portions of development as a controlled black box. Iterations called sprints are used to evolve the product which is ready to ship after each sprint."
            },
            {
                termino:"Scrum Framework", 
                descripcion:"A set of principles, values, practices and rules that form the base for Scrum-based development."
            },
            {
                termino:"Scrum Master", 
                descripcion:"The Scrum Master is one of the three Core/Pig roles on a Scrum team. Scrum Master facilitates Scrum and is responsible for removing obstacles; thus enabling the team to deliver the sprint goal/deliverable."
            },
            {
                termino:"Scrum of Scrum", 
                descripcion:"Scrum of Scrums is analogous to the Daily Scrum. This meeting is facilitated by the Chief Scrum Master and usually conducted in large projects where multiple Scrum teams to work in sync to ensure project progress."
            },
            {
                termino:"Scrum Roles", 
                descripcion:"There are three core roles in Scrum: The Product Owner, The Scrum Master, and the Scrum team (also called the development team). These are the people responsible for completing the project objectives."
            },
            {      
                termino:"Scrum Team", 
                descripcion:"	A Scrum team is composed of a product owner, Scrum Master, and development team, responsible for the high-quality and timely delivery of sprint commitments."
            },
            {
                termino:"Self-Organized", 
                descripcion:"A team or a group of people that manage themselves, their time and resources is said to be self-organized."
            },
            {
                termino:"Sprint Demo", 
                descripcion:"A sprint review activity where the product backlog items that are completed will be demonstrated. The intention is to encourage an information-rich discussion between the Scrum team and other sprint review participants."
            },
            {
                termino:"Stakeholder", 
                descripcion:"Any person or entity who can affect an endeavor / project, or be affected by it, or be perceived itself to be affected is a stakeholder."
            },
            {
                termino:"Time Box", 
                descripcion:"A fixed duration of time during which an activity is performed. In Scrum, sprints are time boxed iterations."
            },
            {
                termino:"Transparency", 
                descripcion:"One of the key principles of Scrum is transparency, wherein the customer is constantly aware of the product progress, and the team members are aware of their roles and responsibilities."
            },
            {
                termino:"User Stories", 
                descripcion:"A User Story is a statement (or a group of statements) that expresses the desired end user functionality. User Stories are generally simple, short, and easy to implement. Longer User Stories are further broken down into multiple User Stories."
            },
            {
                termino:"Work In Progress", 
                descripcion:"Refers to work that has been undertaken but not yet completed. If large segments of the project are WIP, it can pose several problems. Identifying bottlenecks in the project becomes difficult when several tasks are WIP at the same time. Each WIP requires capital and does not contribute to ROI until it becomes a completed, usable product. Kanban boards are effective in placing limits on WIP."
            },
        /************************************************************/
        /**************         SIX SIGMA        ********************/
        /************************************************************/
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
        console.log('servicios buscador listos para usarse');
    }
    buscarTerminos( termino:string ): buscarTerm [] {

        let terminosArr:buscarTerm [] = [];
        termino = termino.toLowerCase();

        for (let bsctesm_ of this.buscaTerm ){

            let acronimo = bsctesm_.termino.toLowerCase();

            if ( acronimo.indexOf ( termino ) >= 0 )
            {
                terminosArr.push( bsctesm_ )
            }
        }
        return terminosArr;
    }
}

export interface buscarTerm {
    termino:string; 
    descripcion:string;
};