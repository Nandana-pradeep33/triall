let currentQuestion = 1;
const totalQuestions = 20;
        function getQuestionText(questionNumber) {
            switch (questionNumber) {
                case 1:
                    return "When faced with a challenge, I prefer to:";
                case 2:
                    return "This is the 2nd main question";
                // Add other cases as needed
                default:
                    return "Default Question Text";
            }
        }
        function updateQuestion() {
            const questionContainer = document.getElementById('questionContainer');
            questionContainer.innerHTML = `
                <h3 class="pb-2 pt-2 text-center "
                    style="font-family: 'Lora', serif;font-weight:500; color: rgb(13, 13, 13); font-size: 2rem; border-bottom:2px solid #ddd;border-top:2px solid #ddd ; border-bottom-width: 50%;">
                    Question ${currentQuestion} of ${totalQuestions}</h3>
                <p class="pb-4 pt-5 text-center" style="font-size: 20px;">${getQuestionText(currentQuestion)}</p>
                <form action="#" method="post" id="ratingForm${currentQuestion}">
                    <table>
                        <tr>
                            <td>${getSubQuestionText(1)}</td>
                            <td>
                                <div class="rating-container">
                                    <div class="rating-boxes" data-question="${currentQuestion}">
                                        <span class="box" data-rating="1">1</span>
                                        <span class="box" data-rating="2">2</span>
                                        <span class="box" data-rating="3">3</span>
                                        <span class="box" data-rating="4">4</span>
                                    </div>
                                </div>
                                <input type="hidden" name="rating${currentQuestion}" value="0">
                            </td>
                        </tr>
                        <tr>
                            <td>${getSubQuestionText(2)}</td>
                            <td>
                                <div class="rating-container">
                                    <div class="rating-boxes" data-question="${currentQuestion}">
                                        <span class="box" data-rating="1">1</span>
                                        <span class="box" data-rating="2">2</span>
                                        <span class="box" data-rating="3">3</span>
                                        <span class="box" data-rating="4">4</span>
                                    </div>
                                </div>
                                <input type="hidden" name="rating${currentQuestion}" value="0">
                            </td>
                        </tr>
                        <tr>
                            <td>${getSubQuestionText(3)}</td>
                            <td>
                                <div class="rating-container">
                                    <div class="rating-boxes" data-question="${currentQuestion}">
                                        <span class="box" data-rating="1">1</span>
                                        <span class="box" data-rating="2">2</span>
                                        <span class="box" data-rating="3">3</span>
                                        <span class="box" data-rating="4">4</span>
                                    </div>
                                </div>
                                <input type="hidden" name="rating${currentQuestion}" value="0">
                            </td>
                        </tr>
                        <tr>
                            <td>${getSubQuestionText(4)}</td>
                            <td>
                                <div class="rating-container">
                                    <div class="rating-boxes" data-question="${currentQuestion}">
                                        <span class="box" data-rating="1">1</span>
                                        <span class="box" data-rating="2">2</span>
                                        <span class="box" data-rating="3">3</span>
                                        <span class="box" data-rating="4">4</span>
                                    </div>
                                </div>
                                <input type="hidden" name="rating${currentQuestion}" value="0">
                            </td>
                        </tr>
                    </table>
                </form>
                <div class="text-center">
                    <button type="button" onclick="nextQuestion()"
                        class="mx-auto align-items-center text-center"
                        style="width: 8rem; font-weight:620; border-radius: 7px;">Next</button>
                </div>
            `;
            const ratingBoxes = document.querySelectorAll('.box');

ratingBoxes.forEach(box => {
    box.addEventListener('click', function () {
        const rating = this.getAttribute('data-rating');
        const question = this.closest('.rating-boxes').getAttribute('data-question');
        resetBoxes(question);
        highlightBox(question, rating);
        updateInput(question, rating);
    });
});
           
        }
        

        function getSubQuestionText(subQuestionNumber) {
            return `This is ${currentQuestion === 1 ? '1st' : '2nd'} main question ${subQuestionNumber} sub question`;
        }
        document.addEventListener('DOMContentLoaded', function () {
        const ratingBoxes = document.querySelectorAll('.box');

        ratingBoxes.forEach(box => {
            box.addEventListener('click', function () {
                const rating = this.getAttribute('data-rating');
                const question = this.closest('.rating-boxes').getAttribute('data-question');
                resetBoxes(question);
                highlightBox(question, rating);
                updateInput(question, rating);
            });
        }); }); 

        function resetBoxes(question) {
            const boxes = document.querySelectorAll(`.rating-boxes[data-question="${question}"] .box`);
            boxes.forEach(box => {
                box.classList.remove('active');
            });
        }

        function highlightBox(question, rating) {
            const box = document.querySelector(`.rating-boxes[data-question="${question}"] .box[data-rating="${rating}"]`);
            box.classList.add('active');
        }

        function updateInput(question, rating) {
            const input = document.querySelector(`input[name="rating${question}"]`);
            input.value = rating;
        }
    
        function nextQuestion() {
            if (currentQuestion < totalQuestions) {
                currentQuestion++;
                updateQuestion();
            } else {
                document.getElementById('surveyForm').submit();
            }
          

       
        }