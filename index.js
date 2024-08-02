#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    JYP: 113,
    CAD: 1.3,
    AUD: 1.65,
    PKR: 280,
};
let user_name = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "enter from currency",
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "enter to currency",
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter your amount"
    }
]);
let fromAmount = currency[user_name.from];
let toAmount = currency[user_name.to];
let amount = user_name.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`converted Amount: ${convertedAmount.toFixed(2)}`);
