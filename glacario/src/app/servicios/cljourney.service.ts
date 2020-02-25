import {Injectable} from '@angular/core';


@Injectable()
export class cljourneyService {

    private cljourney:Cljourney_[] = [
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
    ]; 

    constructor(){
        console.log("Servicio Cloud Journey listo para usarse")
    }

    getcljourney():Cljourney_[]{
        return this.cljourney;
    }
}

export interface Cljourney_ {
    termino:string;
    descripcion:string;
}