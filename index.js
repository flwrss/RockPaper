let array = ["Rock" , "Paper" , "Scissor"]
let sum = 0
let totalSum = 0
let totalLostSum = 0
let score = 0
let scoreEl = document.getElementById("score-el")
let displayEl = document.getElementById("display-el")
let wonEL = document.getElementById("won-el")
let lostEL = document.getElementById("lost-el")
function shoot(){
    let count =  Math.floor(Math.random()*3)
   displayEl.textContent = array[count]

}
function won(){
    sum ++
    totalSum += sum  
    wonEL.textContent = 1000
     wonEL.textContent = "Win Count: " + totalSum
     let totalScore = totalSum - totalLostSum
     scoreEl.textContent ="Final score:" + totalScore
     sum = 0
}

// sometimes above function wont work if it happens use this instead
// const wonBtn = document.getElementById("won")
// wonBtn.addEventListener("click" , ()=>{
//     sum ++
//         totalSum += sum  
//         wonEL.textContent = 1000
//         wonEL.textContent = "Win Count: " + totalSum
//         let totalScore = totalSum - totalLostSum
//         scoreEl.textContent ="Final score:" + totalScore
//         sum = 0
// })
function lost(){
    sum++
    totalLostSum += sum
    lostEL.textContent = "Lost Count: " + totalLostSum
    totalScore = totalSum - totalLostSum
    scoreEl.textContent = "Final score:" +  totalScore 
    sum = 0
}
function resetScore(){
    sum = 0
    totalSum = 0
    totalLostSum = 0
    wonEL.textContent = "Win Count: " + 0
    scoreEl.textContent = "Final Count: "+ 0
    lostEL.textContent = "Lost score: " +  0 
}

