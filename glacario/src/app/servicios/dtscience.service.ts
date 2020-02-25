import { Injectable } from '@angular/core';

@Injectable ()

export class dtScienceService {


    private dtscience:dtscience_ [] =

    [
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
        }
    ];

    constructor(){
        console.log("Servicio Data Science listo para usarse")
    }

    getdtScience(): dtscience_ []{
        return this.dtscience;
    }
}


export interface dtscience_{
    termino: string;
    descripcion:string; 
}