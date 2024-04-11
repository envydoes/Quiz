    
let questions = [
  {
    numb: 1,
    question: "Anong HTML Tag ang ginagamit upang maglink ng Javascript file?",
    answer: "script src",
    options: [
      "js script src",
      "src js",
      "script src",
      "javascript src"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "Ano ang ibig sabihin ng HTML?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks at Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Leveler"
    ]
  },
  {
    numb: 7,
    question: "Aling HTML tag ang ginagamit upang ideklara ang isang di-ayos na listahan?",
    answer: "ul",
    options: [
      "ul",
      "ol",
      "li",
      "ulist"
    ]
  },
  {
    numb: 8,
    question: "Aling CSS property ang ginagamit upang baguhin ang kulay ng teksto ng isang elemento?",
    answer: "color",
    options: [
      "text-color",
      "color",
      "font-color",
      "text-style"
    ]
  },
  {
    numb: 9,
    question: "Aling HTML tag ang ginagamit upang lumikha ng isang hyperlink?",
    answer: "a",
    options: [
      "link",
      "hyperlink",
      "a",
      "href"
    ]
  },
  {
    numb: 10,
    question: "Ano ang ibig sabihin ng CSS?",
    answer: "Cascading Style Sheets",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ]
  },
  {
  numb: 11,
  question: "Aling CSS property ang ginagamit upang itakda ang kulay ng background ng isang elemento?",
  answer: "background-color",
  options: [
    "background-color",
    "color",
    "bg-color",
    "background"
  ]
},
{
  numb: 12,
  question: "Ano ang 'C' sa CSS?",
  answer: "Cascading",
  options: [
    "Cascade",
    "Cascading",
    "Central",
    "Continuous"
  ]
},
{
  numb: 13,
  question: "Aling HTML tag ang ginagamit upang ideklara ang isang pampasaherong hanay?",
  answer: "tr",
  options: [
    "tr",
    "table",
    "row",
    "th"
  ]
},
{
  numb: 14,
  question: "Ano ang ginagawa ng property na margin sa CSS?",
  answer: "Nagtatakda ng espasyo sa pagitan ng border ng mga elemento at ang gilid ng kanyang lalagyan",
  options: [
    "Nagtatakda ng espasyo sa pagitan ng mga border ng mga elemento",
    "Nagtatakda ng espasyo sa pagitan ng nilalaman ng mga elemento at ang kanilang border",
    "Nagtatakda ng espasyo sa pagitan ng padding ng mga elemento at ang kanilang border",
    "Nagtatakda ng espasyo sa pagitan ng border ng mga elemento at ang gilid ng kanyang lalagyan"
  ]
},
{
  numb: 15,
  question: "Aling HTML tag ang ginagamit upang lumikha ng isang paragraph?",
  answer: "p",
  options: [
    "paragraph",
    "p",
    "para",
    "par"
  ]
},
{
  numb: 16,
  question: "Sa CSS, aling property ang ginagamit upang kontrolin ang sukat ng font?",
  answer: "font-size",
  options: [
    "text-size",
    "font-size",
    "size",
    "font-style"
  ]
},
{
  numb: 17,
  question: "Aling HTML tag ang ginagamit upang lumikha ng isang imahe?",
  answer: "img",
  options: [
    "image",
    "img",
    "picture",
    "graphic"
  ]
},
{
  numb: 18,
  question: "Aling CSS property ang ginagamit upang itakda ang pamilya ng font ng isang elemento?",
  answer: "font-family",
  options: [
    "font",
    "font-family",
    "family",
    "text-font"
  ]
},
{
  numb: 19,
  question: "Aling HTML tag ang ginagamit upang lumikha ng isang line break?",
  answer: "br",
  options: [
    "break",
    "lb",
    "linebreak",
    "br"
  ]
},
{
  numb: 20,
  question: "Ano ang ginagawa ng property na padding sa CSS?",
  answer: "Nagtatakda ng espasyo sa pagitan ng nilalaman ng mga elemento at ang kanilang border",
  options: [
    "Nagtatakda ng espasyo sa pagitan ng mga border ng mga elemento",
    "Nagtatakda ng espasyo sa pagitan ng nilalaman ng mga elemento at ang kanilang border",
    "Nagtatakda ng espasyo sa pagitan ng padding ng mga elemento at ang kanilang border",
    "Nagtatakda ng espasyo sa pagitan ng border ng mga elemento at ang gilid ng kanyang lalagyan"
  ]
},
];
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}


exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}


quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
      
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice ,<p>You got '+ userScore +' out of '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px";
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  bottom_ques_counter
}
