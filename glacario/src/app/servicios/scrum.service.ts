import { Injectable } from '@angular/core';

@Injectable()

export class scrumService {

    private scriumte: scrumte_ [] = 
    [
        {
            termino:"Acceptance Criteria", 
            descripcion:"The product characteristics, specified by the Product Owner, that need to be satisfied before they are accepted by the user, customer, or other authorized entity. These are used as standards to measure and compare the characteristics of the final product with specified characteristics."
        },
        {
            termino:"Acceptance Test", 
            descripcion:"These tests are run from a business and customer point of view. These tests check the requested and implemented feature and determine whether these features match the business and the customer requirements."
        },
        {
            termino:"Acceptance-Test-Driven Development (ATTD)", 
            descripcion:"A system or product development method in which the acceptance criteria are discussed extensively by the participants, through the use of examples and well-designed acceptance tests on the basis of the these criteria before development begins."
        },
        {
            termino:"Accuracy", 
                    descripcion:"The degree by which the measured value is very close to the true value (PMI)."
            },
    
        {
            termino:"Acquire Project Team", 
                    descripcion:"It is the process of confirming and securing the team necessary to complete the a project. Skill, experience and availability of resources are important parameters considered while acquiring project team."
            },
    
        {
            termino:"Adaptability", 
                    descripcion:"Desirable characteristic in a person, team, process or system measured in the ability/capability to adapt or being adapted. In organizational context, it refers to the ability to change something or oneself to fit to occurring changes."
            },
        
        {
            termino:"Adaptation", 
                    descripcion:"Modification in the product being developed or in the process of product development. Variations in the actual value and true value trigger the need for control and modification of the product or process."
            },
    
        {
            termino:"Adaptive planning", 
                    descripcion:"Agile methodologies reduce waste by cutting back on work that does not add value. Planning a project does not directly add business value. Therefore, planning at any stage of a Scrum project should be as efficient as possible. Planning ahead for the whole project is considered waste, because Agile projects are prone to a high rate of change. Therefore, planning is done Just in Time (JIT)."
            },
    
        {
            termino:"Adaptive Project Management", 
                    descripcion:"Adaptive Project Management is a structured, iterative process of management which focuses on less up-front planning, unlike Waterfall methods. This creates a fairly adaptable environment for teams where they focus on only the immediate tasks at hand, complete them, and then move to the next tasks. If there are any changes in requirements, then they are incorporated into the next Sprint. This ensures you to be on track with the quick changing market and technology scenario, enabling you to deliver the greatest value in the shortest time to your customers."
            },
    
        {
            termino:"Additional Risk Response Planning", 
                    descripcion:"This is done to take care of risks that were not initially identified or when the impact of a risk on objectives is greater than expected. The existing risk response planning may not be enough to control the risk."
            },
    
        {
            termino:"Agile", 
                    descripcion:"Agile is a group of iterative and incremental software development methods. It encourages flexibility and speed in responding to change. It requires collaboration between self-organized, cross-functional teams to generate requirements and solutions."
            },
    
        {
            termino:"Agile Unified Process", 
                    descripcion:"Agile Unified Process (AUP) is a refinement of the 'IBM Rational Unified Process (RUP)' first described by Craig Larman in 2001. Agile concepts and techniques are used to select elements from RUP. Iterations are classified into two types: Development and Release."
            },
    
        {
            termino:"All-Before-Any", 
                    descripcion:"A sequential development process in which the output from the previous step is used as input for the next step in the process using a batch size of 100%."
            },
    
        {
            termino:"Approach", 
                    descripcion:"The method used, or steps taken in, setting about a task or problem by the Scrum team. The approach differs from team to team."
            },
    
        {
            termino:"Artifact", 
                    descripcion:"Any concrete by-product formed during the development cycle. Example of artifacts includes the Product Backlog and the Sprint Backlog."
            },
    
        {
            termino:"Assumptions", 
                    descripcion:"Factors which, for planning purposes, are considered to be true, real or certain."
            },
    
        {
            termino:"Assumptions Analysis", 
                    descripcion:"A project management exercise that explores the validity of assumptions that were made at the beginning of the project to identify any potential project risk conceived and developed because of the inaccuracy of any assumption. It also identifies risks because of any instability, inconsistency, or incompleteness of assumptions."
            },
    
        {
            termino:"Basic Unified Process (BUP)", 
                    descripcion:"BUP is a simpler variation of Rational Unified Process (RUP) developed in 2005. It was optimized for small projects by IBM."
            },
    
        {
            termino:"Behavior Driven Development", 
                    descripcion:"Behavior driven development (or BDD) is a software development process which involves collaboration between non-technical or business participants and people with technical insight like developers, QA etc."
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
            termino:"Chrysler Comprehensive Compensation System Project (C3)", 
                    descripcion:"C3 was a project to have a single payroll system for everyone in Chrysler. This project ran from 1993 until DaimlerChrysler (after Chrysler was bought out) stopped the C3 project on February 1, 2000. Many Agile software development techniques were developed during this project; chief among them was Extreme Programming (XP)."
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
            termino:"Definition of Ready", 
                    descripcion:"Conditions that need to be satisfied by the product backlog item before it is considered ready to pull into a sprint during sprint planning."
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
            termino:"Event Timeline", 
                    descripcion:"A technique used during sprint retrospective, which involves chronological depiction of events that occurred over a period of time."
            },
    
        {
            termino:"Expert Judgment", 
                    descripcion:"Judgment provided by expert (s) in specific area on matters or activities being performed in that area. Expert could be a person or group with specialized training or education, knowledge and skill. The expertise could also be acquired with time and experience."
            },
        
        {
            termino:"Forecasting", 
                    descripcion:"Estimating or predicting future project status and progress based on knowledge and information available at the time of forecasting."
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
                termino:"Known Technical Debt", 
                descripcion:"A status category for technical debt that represents the debt that is known to the development team and has been made visible for future consideration."
            },
    
            {
                termino:"Lean", 
                descripcion:"Lean Manufacturing or simply Lean focuses on the removal of waste from the production. It is a practice for delivering more or same value with less resource by eliminating waste across organizations and business processes."
            },
            {
                termino:"Lifecycle Profits", 
                descripcion:"1. The total profit potential for a product over its lifetime. 2. The total profit potential of the entire portfolio rather than a single product."
            },
            {
                termino:"Means Uncertainty", 
                descripcion:"Means uncertainty is the uncertainty surrounding the means through which a deliverable will be created."
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
                termino:"Must-have Features", 
                descripcion:"The set of features that must be present in the upcoming release for the release to be viable."
            },
            {
                termino:"Nice-to-have Features", 
                descripcion:"These are the features that are targeted as 'would be nice to have' in an upcoming release but can be left out if there is a shortage of funds to complete the project."
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
            }
    ]

    constructor (){
        console.log("Servicios de Scrum activados");
    }

    getScrumte(): scrumte_[]{
        return this.scriumte;
    }
}


export interface scrumte_ {
    termino:string; 
    descripcion:string;
}