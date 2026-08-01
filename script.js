const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const questionNames = [
        "question1",
        "question2",
        "question3"
    ];

    const answers = {};
    let allQuestionsAnswered = true;

    questionNames.forEach(function (questionName) {
        const selectedAnswer = document.querySelector(
            `input[name="${questionName}"]:checked`
        );

        if (!selectedAnswer) {
            allQuestionsAnswered = false;
            return;
        }

        answers[questionName] = Number(selectedAnswer.value);
    });

    if (!allQuestionsAnswered) {
        alert("Please answer every question before submitting.");
        return;
    }

    console.log("Quiz answers:", answers);

    alert("Your answers have been submitted.");
    
});