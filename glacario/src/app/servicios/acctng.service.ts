import { Injectable } from '@angular/core';

@Injectable()

export class acctngService {

    private acctngterm:acctngte [] = 
    [
        {
            termino:"Accounting.",
            descripcion: "Registration of all our movements, transactions to make decisions in a given period."
        },
        {
            termino:"Administrative Accounting.",
            descripcion: "How to organize the company, internal reports."
        },
        {
            termino:"Financial Accounting.",
            descripcion: "International standards by which the Company is governed."
        },
        {
            termino:"Tax Accounting.",
            descripcion: "Is a structure of accounting methods focused on taxes rather than the appearance of public financial statements."
        },
        {
            termino:"Account Catalog.",
            descripcion: "List of accounts used to register, classify and apply the operations to the corresponding activities."
        },
        {
            termino:"Double Match.",
            descripcion: "Each operation is recorded twice, once in it must and once in the credit, in order to establish a connection between the various assets."
        },
        {
            termino:"Policy.",
            descripcion: "Each operation is recorded twice, once in it must and once in the credit, in order to establish a connection between the various assets."
        },
        {   
            termino:"Income Policy.",
            descripcion: "In economics are economy-wide wage and price controls, most commonly instituted as a response to inflation, and usually seeking to establish wages and prices below free market level."
        }, 
        {
            termino:"Assets",
                    descripcion: "Everything a company owns, including cash, accounts receivable, property and goods."
            },
    
        {
            termino:"Debit",
                    descripcion: "An entry that shows what a company spends. Debits are recorded on the left side of an account."
            },
    
        {
            termino:"Credit",
                    descripcion: "An entry that shows how much money a company receives. Credits are recorded on the right side of accounts."
            },
    
        {
            termino:"Gross",
                    descripcion: "An amount of money before taxes are deducted."
            },
    
        {
            termino:"Capital",
                    descripcion: "Cash and funds, but also machinery and tangible assets that can contribute to earning more money, like computers, company vehicles, etc. Intangible assets like expertise or reputation are not considered to be capital."
            },
            
        {
            termino:"Cash Flow",
                    descripcion: "Money coming in (inflows) and going out (outflows) of a company."
            },
    
    
    
        {
            termino:"Payroll",
                    descripcion: "Refers to the total amount of money paid by a company to its employees."
            },  
    
        {
            termino:"Accounts Payable",
                    descripcion: "Money that a company owes to other parties—companies or people—called creditors. Accounts payable are considered liabilities."
            },  
    
        {
            termino:"Accounts Receivable",
                    descripcion: "Money that a company has to receive for products or services bought by customers or clients."
            }, 
    
        {
            termino:"Posting",
                    descripcion: "Posting is the act of moving debit and credit account balances from individual journals to their corresponding ledgers."
            }
    ];
    constructor (){
        console.log ("Los servicios de Accounting están activados.");
    }

    getAcctngterm (){
        return this.acctngterm;
    }
}
export interface acctngte{
    termino:string; 
    descripcion:string;
}