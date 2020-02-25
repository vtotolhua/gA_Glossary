import { Injectable } from '@angular/core';

@Injectable()

export class genLedgerService {
    private genledgerterm:genLedgercol[] = 
    [
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
        }      
    ];
    
    constructor(){
        console.log("Servicios General Ledger listos para usar.")
    }

    getGenledgterm():genLedgercol[]{
        return this.genledgerterm;
    }
}

export interface genLedgercol {
	termino:string;
    descripcion:string;
}