let NameEL = document.getElementById("NameEL")
let QuizContentEL = document.getElementById("QuizContentEL")

const Questions = [
   { question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Lisbon"], correctAnswer: 2 },
   { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correctAnswer: 1 },
   { question: "What is 2 + 3?", answers: ["3", "4", "5", "6"], correctAnswer: 2 },
   { question: "What is 2 + 4?", answers: ["3", "4", "5", "6"], correctAnswer: 3 },
   { question: "What is 2 + 5?", answers: ["7", "4", "5", "6"], correctAnswer: 0 },
   { question: "What is 2 + 6?", answers: ["3", "4", "8", "6"], correctAnswer: 2 },
   { question: "What is 2 + 7?", answers: ["9", "4", "5", "6"], correctAnswer: 0 },
   { question: "What is 2 + 8?", answers: ["3", "4", "10", "6"], correctAnswer: 2 },
   { question: "What is 2 + 9?", answers: ["3", "4", "5", "11"], correctAnswer: 3 },
   { question: "What is 2 + 10?", answers: ["3", "4", "5", "12"], correctAnswer: 3 }
];

let Score = 0
let currentQuestionIndex = 0; // Track the current question index

function StartQuiz() {
   console.log("you clicked start quiz")
   console.log(`Your name is ${NameEL.value}`)
   let UserName = NameEL.value.toUpperCase();
   console.log(UserName)

   RenderContent()
}

function RenderContent() {
   let UserName = NameEL.value.toUpperCase();
   let CurrentQuestion = Questions[currentQuestionIndex];
   let TotalQuestion = Questions.length
   if (!CurrentQuestion) {
      QuizContentEL.innerHTML = ` <section class="container-sm mt-5" style="text-align: center">       
      <p>You Current Score is: ${Score}/${TotalQuestion}</p>
        <button onclick="RestartQuiz()" class="btn btn-info">Restart Quiz</button></section>`
      return
      }


   console.log(CurrentQuestion)
   console.log(QuizContentEL)
   let x = `<section style="text-align: center;">
        <p class="h3 mb-5 mt-5">${CurrentQuestion.question}</p>
        <div class="row row-cols-1 row-cols-md-1 g-2">

          ${CurrentQuestion.answers.map((Item, index) => `
            <div class="col">
                <button onclick="HandleAnswer(${index})" class="btn btn-light">${Item}</button>
            </div>
        `).join("")}
            <div class="col">
                <p class="mt-4">${UserName}'s Score: <span id="ScoreEL">${Score}</span></p>
            </div>
        </div>

    </section>`

   QuizContentEL.innerHTML = x
}

function HandleAnswer(SelectedAnswerIndex) {
   console.log(`You chose answer: ${SelectedAnswerIndex}`)
   let CurrentQuestion = Questions[currentQuestionIndex];
   console.log(`Correct Answer is: ${CurrentQuestion.correctAnswer}`)

   if (SelectedAnswerIndex === CurrentQuestion.correctAnswer) {
      console.log(`You answer it correctly`)
      Score++
      console.log(`Currect score is: ${Score}`)

      currentQuestionIndex++
      RenderContent()
   }

   else {
      console.log(`You answer it wrongly`)
      console.log(`Currect score is: ${Score}`)  
      currentQuestionIndex++  
      RenderContent()  
   }
}

function RestartQuiz() {
   Score = 0
   // QuizContentEL.innerHTML = `<section class="container-sm mt-5" style="text-align: center">
   //    <div style="display: inline-block; text-align: left">
   //      <p class="h3" style="width: 200px; text-align: center;">Quiz</p>
   //      <input
   //        id="NameEL"
   //        type="email"
   //        class="form-control mb-2"
   //        style="width: 200px"
   //        placeholder="Enter Your Name"
   //      />
   //      <button onclick="StartQuiz()" class="btn btn-info" style="width: 200px">Start Quiz</button>
   //    </div>
   //  </section>`
    currentQuestionIndex = 0
    StartQuiz()
}