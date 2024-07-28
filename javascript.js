let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.queryselector("#user-score");
const compscorepara= document.queryselector("#comp-score");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawgame=()=>{
    msg.innerText="Game was draw";
    msg.Style.backgroundColor="violet";
    
}
 const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
       msg.innertext="you win";
       msg.Style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innertext="you lose";
        msg.Style.backgroundColor="red";
    }
 }

const playgame=(userChoice)=>
{
   const compchoice=genCompChoice();
    if(userChoice===compchoice){
    drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
          userwin= compchoice=="scissors"?false:true;
        }else{
          userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice =choice.getAttribute("id");
        playgame(userChoice);
    });
});