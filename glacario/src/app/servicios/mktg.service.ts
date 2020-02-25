import { Injectable } from '@angular/core';

@Injectable()

export class mktgService {

    private mktServte : mktgterm_ [] = 
    [
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
        }              
    ];

    constructor () {
        console.log("Los servicios de mktg están arriba");
    }

    getMktgte():mktgterm_[]{
        return this.mktServte;
    }

    buscarTerminos( termino:string ): mktgterm_ [] {

        let terminosArr:mktgterm_ [] = [];
        termino = termino.toLowerCase();

        for (let mktgterm of this.mktServte ){

            let acronimo = mktgterm.termino.toLowerCase();

            if ( acronimo.indexOf ( termino ) >= 0 )
            {
                terminosArr.push( mktgterm )
            }
        }
        return terminosArr;
    }
}

export interface mktgterm_ {
    termino:string;
    descripcion:string;
}