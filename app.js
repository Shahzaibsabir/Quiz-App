const quizQuestions = [

    {
        Ques2 : "What is the Abbrevation of CPU.",
        ans: "Centeral Processor unit",
        option1: "Centeral Public Units",
        option2: "Centeral procedure Unity",
        option3: "Circle Process Units",
       
    },

    {
        Ques2 : "largest Ciry of pakistan",
        ans: "Centeral Processor unit",
        option1: "hdjah",
        option2: "C45467",
        option3: "C90klskdhkj",
    
    },
    {
        Ques2 : "Pakikstan national Language.",
        ans: "Circuit Processing Unity",
        option1: "SMIYt",
        option2: "Hindutan",
        option3: "CPkistan",
       
    },
    {
        Ques2 : "balochistan.",
        ans: "Circuit Processing Unity",
        option1: "Cen0080988877its",
        option2: "C444444444y",
        option3: "C77777777777s",
       
    },
    {
        Ques2 : "Karachi.",
        ans: "Circuit Processing Unity",
        option1: "999999",
        option2: "1111111",
        option3: "C010101010",
       
    },
    {
        Ques2 : "Karachi.",
        ans: "Circuit Processing Unity",
        option1: "Centeral Public Units",
        option2: "Centeral procedure Unity",
        option3: "Circle Process Units",
       
    },
   
]
  
var num = 0;
function Questin(){
    num++;

    let getQuestiontag = document.querySelector(".Question")
    console.log(num)
    getQuestiontag.textContent = quizQuestions[num].Ques2;
 
    document.querySelector('.quizQues').textContent = `Question No. ${num} / ${quizQuestions.length -1}`;

    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")

    btn1.textContent = quizQuestions[num].ans
    btn2.textContent = quizQuestions[num].option1
    btn3.textContent = quizQuestions[num].option2
    btn4.textContent = quizQuestions[num].option3
    

if (Ques2 == ans) {

    console.log("right")
}

else{
    console.log ("wrong")
}




}
    

