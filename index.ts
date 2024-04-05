#! /usr/bin/env node

const mypin = 1234; // ITs MY ATM PIN CODE
let myBalance = 20000; // MY ACCOUNT BALANCE

import inquirer from "inquirer";       
 let pinanswer = await inquirer.prompt([  
    {
        name: "pin",
        message: "Enter Your Pin Number ",
        type: "number",
    },
 ])
 if(pinanswer.pin===mypin) // CHECKING PIN CODE 
 {
    let process = await inquirer.prompt([
        {
            name:"p",
            message: "Correct Pin Code ",
            type: "list",
            choices:["Withdraw","Fast Cash","Check Balance"], // OPTION FOR USING ATM

        },
    ]) 
    if(process.p === "Withdraw") //IF SELECT WITHDRAW OPTION
    {
        let moneyanswer = await inquirer.prompt([
            {
                name: "money",
                type: "number",
                message: "Enter Amount",
            },
        ])
        myBalance -= moneyanswer.money
        if(moneyanswer.money>myBalance) // CHECKING AMOUNT INPUT
        {
            console.log("Insufficient balance.");
            
        }     
        else{
            console.log(`Your remaining balance is  ${myBalance}`); 
        }
    }
    else if(process.p === "Fast Cash") // IF SELECT FAST CHASH OPTION
    {
       
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message:"Select of them",
                choices: ["500","1000","5000","10000"]
            },
        ]) 
        myBalance -=amountans.amount
        console.log(`Your remaining balance is ${myBalance}`)
    }
    else if(process.p === "Check Balance")  //IF SELECT CHECK BALANCE OPTION
    {
        console.log("Your Balance is "+myBalance);
        
    }
    
 }
 else{
    console.log("Access Denied"); // IF YOU PUT INCORRECT PIN CODE 

 }