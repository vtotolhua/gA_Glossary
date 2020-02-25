import { Injectable } from '@angular/core'

@Injectable()

export class oracUnivService {

        private oracUnivterm:oracUnt_ [] = 

        [
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
            }
            
        ];
    constructor () {

        console.log("Servicios de Oracle University iniciados");
    }
 
    getoracUniv():oracUnt_[]{
        return this.oracUnivterm;
    }
}
export interface oracUnt_ {
    termino:string;
    descripcion: string;


}