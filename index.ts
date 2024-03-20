#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

//creat a arrow function return promise
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
//create function and create vraible inside function return promise function and stop a time of animation
async function animatedText(){
    const settime:any = chalkAnimation.rainbow("Number Guessing Game Developd by Muhammad Wasif Soomro")
    await sleep()
    settime.stop()
}
await animatedText()//invoked a function

//create a function
function startGame(){
    console.log(chalk.yellow("Welcome to the Number Guess Game"))//console a message
        //declare a score varaible
    let score: number= 0;
    console.log(chalk.cyanBright(`Score ${score}`))
    //create a function inside a function
    async function playGame(){
        //declare a variable and generate a number using math.random function
        let generateNumber: number= Math.floor(Math.random()*10 +1)
    
        //getting input from user using inquirer.prompt
        let askUser= await inquirer.prompt({
            type: "input",
            name: "guessnumber",
            message: "Guess a Number from 1 to 10",
            validate: function(input){     //validating input 
                const num = parseFloat(input) //convert string into number
                if(isNaN(num)){ //if input is not a number return a message
                    return chalk.redBright("Enter a number")
                    
                }
                return true; //if input is true works properly
            }
        })
        let number = parseFloat(askUser.guessnumber) //convert string into number
        if(number == generateNumber ){
            score+= 1 //if user guess is correct add 1 in their score and print a msg
            console.log(chalk.green(`Congratulation your Guess is correct, \n your new score is ${score}`))
            playGame() //call play game mean games is continue if user guess is correct everytime
        }else if(number < generateNumber ){
            score
            console.log(chalk.blueBright("you guess is lower than correct number"))
            console.log(chalk.green(`your total score ${score}`))
            console.log(chalk.red("Game Over"))
            const  response = await inquirer.prompt({ //get input from user if he want to play again
                type: "input",
                name: "playAgain",
                message: "Do you want to play Again",
            }) //create acondition if user answer is yes then start again otherwise close it
            if(response.playAgain === "yes" || response.playAgain === "YES" || response.playAgain === "Yes" ){
                startGame() //restart game
            }
            
        }else if(number > generateNumber){
            score
            console.log(chalk.blueBright("Your guess is greater than correct number"))
            console.log(chalk.green(`your total score ${score}`))
            console.log(chalk.red("Game Over"))
            const  response2 = await inquirer.prompt({ //get input from user if he want to play again
                type: "input",
                name: "playAgain2",
                message: "Do you want to play Again",
            }) //create acondition if user answer is yes then start again otherwise close it
            if(response2.playAgain2 === "yes" || response2.playAgain2 === "YES" || response2.playAgain2 === "Yes" ){
                startGame() //restart game
            }
            
        }
    }   
    playGame()  //invoked function

}

startGame()  //invoked function
