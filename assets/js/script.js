const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const correctElement = document.getElementById('correct-line')
const wrongElement = document.getElementById('wrong')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn') 
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
    })
}

function resetState () {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        setNextQuestion() }
        else {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
        }
    }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        correctElement.classlist.remove('hide')
    } else {
        wrongElement.classList.remove('hide')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question:'String values must be enclosed within ________ when being assigned to variables.',
        answers: [
            {text: 'parenthesis', correct: true},
            {text: 'curly brackets', correct: false},
            {text: 'commas', correct: false},
            {text: 'quotes', correct: false},
        ]
    },
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true},
        ]
    },
    {
        question:'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<javascript>', correct: false},
            {text: '<scripting>', correct: false},
            {text: '<script>', correct: true},
            {text: '<js>', correct: false},
        ]
    },
    {
        question:'Where is the correct place to insert a JavaScript?',
        answers: [
            {text: 'Both the <head> section and the <body> section are correct', correct: false},
            {text: 'The <head> section', correct: false},
            {text: 'The <body> section', correct: true},
            {text: 'The <div> section', correct: false},
        ]
    },
    {
        question:'What is the correct syntax for reffering to an external script called "xx.js"?',
        ansers: [
            {text: '<script href="xxx.js">', correct: false},
            {text: '<script name="xxx.js">', correct: false},
            {text: '<script path="xxx.js>', correct: false},
            {text: '<script src="xxx.js">', correct: true},
        ]
    }

]