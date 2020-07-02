import {Injectable} from '@angular/core';

@Injectable()
export class RpaService {

    private rpa:Rpa_ [] =  
    [
    
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
                    descripcion: "an RPA scenario where a company aims to automate and optimize the execution and rollout of RPA robots, not just the creation of them. This includes a strategy for how the robots are deployed in relation to human teams throughout the organization, supported by a flexible process flow. "
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
            }
    ];

    constructor(){
        console.log("Servicio RPA listo para usarse")
    }

    getRpa():Rpa_[]{
        return this.rpa;
    }
}


export interface Rpa_ {
        termino: string;
        descripcion: string;
};