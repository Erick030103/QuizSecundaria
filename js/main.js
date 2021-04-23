'use strict'
$(document).on('click', '#boton1', function(){
  let primerAnio = '<h1 class="contenedor__titulo">Primer Año de Secundaria</h1>\
  <div class="quiz-container">\
    <div id="quiz"></div>\
  </div>\
  <div class="buttons__question">\
  <button id="previous">Previous Question</button>\
  <button id="next">Next Question</button>\
  <button id="submit">Submit Quiz</button>\
  <div/>\
  <div id="results"></div>';
  /**/
  $("#contenedor").html(primerAnio);
  $("body").css("background", "var(--bodyprimero)");
  $("button").css("background", "var(--bodyprimero)");

  (function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          //let letter = 0;
          for(var letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];

        const selector = `input[name=question${questionNumber}]:checked`;
        console.log(selector);

        console.log(answerContainer);
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1/8 + 8/6",
        answers: {
          a: "35/24",
          b: "24/35",
          c: "1 1/2"
        },
        correctAnswer: "a"
      },
      {
        question: "1/2 + 2/3",
        answers: {
          a: "7/6",
          b: "8/6",
          c: "8/3"
        },
        correctAnswer: "a"
      },
      {
        question: "1/4 - 1/9",
        answers: {
          a: "4/39",
          b: "1/32",
          c: "1/15",
          d: "5/36"
        },
        correctAnswer: "d"
      },
      {
        question: "7/4 - 9/4",
        answers: {
          a: "2/3",
          b: "5/8",
          c: "4/8"
        },
        correctAnswer: "b"
      },
      {
        question: "1/2 - 1/4",
        answers: {
          a: "1/4",
          b: "3/5",
          c: "8/9"
        },
        correctAnswer: "a"
      },
      {
        question: "Perímetro de un pentágono equilátero que su lado mide 8 cm",
        answers: {
          a: "32cm",
          b: "24cm",
          c: "40cm"
        },
        correctAnswer: "c"
      },
      {
        question: "Área de un rectángulo que su base mide 24 cm y su altura 12 cm",
        answers: {
          a: "132 cm^2",
          b: "288 cm^2",
          c: "298 cm^2"
        },
        correctAnswer: "b"
      },
      {
        question: "Suma de perímetros de un triángulo equilátero que su lado mide 9 cm y un rectángulo que su base mide 8 cm y su altura mide 4 cm",
        answers: {
          a: "51cm",
          b: "32cm",
          c: "12cm",
          d: "otro"
        },
        correctAnswer: "a"
      },
      {
        question: "Suma del área de 4 cuadrados iguales que sus lados miden 5 cm ",
        answers: {
          a: "100 cm^2",
          b: "96cm^2",
          c: "34cm^2"
        },
        correctAnswer: "a"
      },
      {
        question: "Perímetro de heptágono cuyo lado mide 8.5 cm",
        answers: {
          a: "1/4",
          b: "3/5",
          c: "59.5 cm"
        },
        correctAnswer: "c"
      },
      {
        question: "10^4",
        answers: {
          a: "59.8 cm",
          b: "36 cm",
          c: "10000"
        },
        correctAnswer: "c"
      },
      {
        question: "10^-8",
        answers: {
          a: "0.000000001",
          b: "0.00001",
          c: "0.0000001"
        },
        correctAnswer: "a"
      },
      {
        question: "3.29 x 10^8",
        answers: {
          a: "329 000 000",
          b: "329",
          c: "3.29"
        },
        correctAnswer: "a"
      },
      {
        question: "9.87 x 10^-4",
        answers: {
          a: "0,0000978",
          b: "0.00978",
          c: "0.987",
          d: "0.000987"
        },
        correctAnswer: "d"
      },
      {
        question: "4.5 x10^3",
        answers: {
          a: "45000",
          b: "4500",
          c: "45"
        },
        correctAnswer: "b"
      },
      {
        question: "20 x 100",
        answers: {
          a: "200",
          b: "20",
          c: "2000"
        },
        correctAnswer: "c"
      },
      {
        question: "0.02 x 100",
        answers: {
          a: "20",
          b: "2",
          c: "0.2"
        },
        correctAnswer: "a"
      },
      {
        question: "1.2 x 10",
        answers: {
          a: "120",
          b: "1200",
          c: "12"
        },
        correctAnswer: "c"
      },
      {
        question: "7 x 1000",
        answers: {
          a: "700",
          b: "7000",
          c: "70000",
          d: "70"
        },
        correctAnswer: "b"
      },
      {
        question: "0.1 x 0.1",
        answers: {
          a: "0.01",
          b: "1",
          c: "0.001"
        },
        correctAnswer: "a"
      },
      {
        question: "(-5)(-6)",
        answers: {
          a: "36",
          b: "30",
          c: "-30"
        },
        correctAnswer: "b"
      },
      {
        question: "(-8.5)(+5)",
        answers: {
          a: "-36",
          b: "42.5",
          c: "-42.5"
        },
        correctAnswer: "c"
      },
      {
        question: "(-5)(4)(-8)",
        answers: {
          a: "160",
          b: "180",
          c: "-160"
        },
        correctAnswer: "a"
      },
      {
        question: "(-6)(-6)",
        answers: {
          a: "34",
          b: "36",
          c: "30",
          d: "32"
        },
        correctAnswer: "b"
      },
      {
        question: "(-2)(+5)(+1)(-3)",
        answers: {
          a: "14",
          b: "-30",
          c: "30"
        },
        correctAnswer: "c"
      },
      {
        question: "x^2-36=0",
        answers: {
          a: "x = 36",
          b: "x = 6",
          c: "x = 12"
        },
        correctAnswer: "b"
      },
      {
        question: "x^2-9=0",
        answers: {
          a: "x = 81",
          b: "x = -3",
          c: "x = 3"
        },
        correctAnswer: "a"
      },
      {
        question: "x^2-25=0",
        answers: {
          a: "x = 20",
          b: "x = -5",
          c: "x = 5"
        },
        correctAnswer: "c"
      },
      {
        question: "x^2-81=0",
        answers: {
          a: "x = 12",
          b: "x = -9",
          c: "x = 9",
          d: "x = 81"
        },
        correctAnswer: "c"
      },
      {
        question: "x^2-64=0",
        answers: {
          a: "x = 8",
          b: "x = 64",
          c: "x = -8"
        },
        correctAnswer: "a"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
});



$(document).on('click', '#boton2', function(){
  let segundoAnio = '<h1 class="contenedor__titulo">Tercer Año de Secundaria</h1>\
  <div class="quiz-container">\
    <div id="quiz"></div>\
  </div>\
  <div class="buttons__question">\
  <button id="previous">Previous Question</button>\
  <button id="next">Next Question</button>\
  <button id="submit">Submit Quiz</button>\
  <div/>\
  <div id="results"></div>';

  $("#contenedor").html(segundoAnio);
  $("body").css("background", "var(--bodysegundo)");
  $("button").css("background", "var(--bodysegundo)");
  (function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          //let letter = 0;
          for(var letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];

        const selector = `input[name=question${questionNumber}]:checked`;
        console.log(selector);

        console.log(answerContainer);
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Un triángulo con medidas:\
        Hipotenusa= 5m\
        Base= 3m\
        Halle la medida de la altura=",
        answers: {
          a: "altura = 8m",
          b: "altura = 4m",
          c: "altura = 9m"
        },
        correctAnswer: "b"
      },
      {
        question: "Un triángulo con medidas:\
        Hipotenusa= 17m\
        altura=15m\
        Halle la medida de la base=",
        answers: {
          a: "base = 8m",
          b: "base = 64m",
          c: "base = 32m"
        },
        correctAnswer: "a"
      },
      {
        question: "Un triángulo con medidas:\
        Altura= 5m\
        Base= 12m\
        Halle la medida de la hipotenusa=",
        answers: {
          a: "Hipotenusa = 26m",
          b: "Hipotenusa = 12m",
          c: "Hipotenusa = 149m",
          d: "Hipotenusa = 13m"
        },
        correctAnswer: "d"
      },
      {
        question: "Un triángulo con medidas:\
        Hipotenusa= 200m\
        Base= 160m\
        Halle la altura=",
        answers: {
          a: "altura = 120m",
          b: "altura = 20m",
          c: "altura = 360m"
        },
        correctAnswer: "a"
      },
      {
        question: "Dos triángulos con medidas:\
        1-Triángulo\
        Hipotenusa= 5m\
        Base= 4m\
        2-Triángulo\
        Base= 6m\
        Ambos triángulos están unidos y comparten la misma altura, encuentre la altura y después encuentre la hipotenusa del triángulo número 2",
        answers: {
          a: "Hipotenusa = 6.708m",
          b: "Hipotenusa = 4.708m",
          c: "Hipotenusa = 8.708m"
        },
        correctAnswer: "a"
      },
      {
        question: "Resolver Exponentes: (2^2)^4",
        answers: {
          a: "2^6",
          b: "2^8",
          c: "2^2"
        },
        correctAnswer: "b"
      },
      {
        question: "Resolver Exponentes: (4)^3 * (4)^5",
        answers: {
          a: "4^8",
          b: "4^15",
          c: "4"
        },
        correctAnswer: "a"
      },
      {
        question: "Resolver Exponentes: 10^8 / 10^3",
        answers: {
          a: "10^2",
          b: "10^11",
          c: "10^-5",
          d: "10^5"
        },
        correctAnswer: "d"
      },
      {
        question: "Resolver Exponentes: 6^6 / 6^8 ",
        answers: {
          a: "6^2",
          b: "1/36",
          c: "6^3"
        },
        correctAnswer: "b"
      },
      {
        question: "Resolver Exponentes: 10^8 / 10^15",
        answers: {
          a: "1/10^7",
          b: "10^7",
          c: "10^23"
        },
        correctAnswer: "a"
      },
      {
        question: "Factorizar: y^2 + 4y + 4",
        answers: {
          a: "(y + 4)^2",
          b: "(y - 2)^2",
          c: "(y + 2)^2"
        },
        correctAnswer: "c"
      },
      {
        question: "Factorizar: x^2 - 16",
        answers: {
          a: "(x - 4) (x + 4)",
          b: "(x - 4) (x + 3)",
          c: "(x - 8) (x + 8)"
        },
        correctAnswer: "a"
      },
      {
        question: "Factorizar: w^2 - 100b^2",
        answers: {
          a: "(w - b) (w + 10b)",
          b: "(w - 10b) (w - 10b)",
          c: "(w - 10b) (w + 10b)",
          d: "(w - 10b) (4w + 10b)"
        },
        correctAnswer: "c"
      },
      {
        question: "Factorizar: z^2 - 9z + 20",
        answers: {
          a: "(2z - 4) (z - 5)",
          b: "(z - 4) (z - 5)",
          c: "(z - 4) (z + 5)"
        },
        correctAnswer: "b"
      },
      {
        question: "Factorizar: 16x^2 - 25w^2",
        answers: {
          a: "(4x + 5w) (4x + 5w)",
          b: "(4x - 2w) (4x + 5w)",
          c: "(4x - 5w) (4x + 5w)"
        },
        correctAnswer: "c"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
});

$(document).on('click', '#boton3', function(){
  var tercerAnio = '<h1 class="contenedor__titulo">Tercer Año de Secundaria</h1>\
  <div class="quiz-container">\
    <div id="quiz"></div>\
  </div>\
  <div class="buttons__question">\
  <button id="previous">Previous Question</button>\
  <button id="next">Next Question</button>\
  <button id="submit">Submit Quiz</button>\
  <div/>\
  <div id="results"></div>';

  $("#contenedor").html(tercerAnio);
  $("body").css("background", "var(--bodytercero)");
  $("button").css("background", "var(--bodytercero)");

  (function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          //let letter = 0;
          for(var letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];

        const selector = `input[name=question${questionNumber}]:checked`;
        console.log(selector);

        console.log(answerContainer);
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} de ${myQuestions.length}`;

    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Se desea sujetar un poste de 20 metros de altura con un cable que parte de la parte superior del mismo hasta el suelo de modo que forme un ángulo de 30º.\
        Calcular el precio del cable si cada metro cuesta 12$",
        answers: {
          a: "R= $470",
          b: "R= $620",
          c: "R= $480"
        },
        correctAnswer: "c"
      },
      {
        question: "Del siguiente triángulo rectángulo se conocen sus dos catetos: uno mide 4m y el otro mide 3m:\
        Los ángulos a y b",
        answers: {
          a: "a=35.869° y b=32.13°",
          b: "a=40° y b=50°",
          c: "a=36.869° y b=59.13°"
        },
        correctAnswer: "c"
      },
      {
        question: "Encuentra la medida de los ángulo restantes del triángulo, y halla la medida de cada lado respectivamente si su hipotenusa mide 5m y la medida de uno de sus ángulos es de 41.7°",
        answers: {
          a: "Ángulos= 30°, 48.6° B= 1.3261m C= 3.7332m",
          b: "Ángulos= 67°, 46.3° B= 3.3261m C= 5.7332m",
          c: "Ángulos= 70°, 43.3° B= 3.3261m C= 3.7332m",
          d: "Ángulos= 90°, 48.3° B= 3.3261m C= 3.7332m"
        },
        correctAnswer: "d"
      },
      {
        question: "Encuentra la medida del lado restante, y halla la medida de todos los ángulo interiores del triángulo si su hipotenusa mide 6m y su altura mide 4m",
        answers: {
          a: "C=√24   Ángulos= 90°,51.8°,48.1°",
          b: "C=√36   Ángulos= 70°,43.8°,46.1°",
          c: "C=√20   Ángulos= 90°,41.8°,48.1°"
        },
        correctAnswer: "c"
      },
      {
        question: "Un árbol de 50 metros de altura proyecta una sombra de 60 metros de longitud. Encuentra el ángulo de elevación del Sol en ese momento.",
        answers: {
          a: "Ángulo B = 19.2056°",
          b: "Ángulo B = 49.8056°",
          c: "Ángulo B = 39.8056°"
        },
        correctAnswer: "c"
      },
      {
        question: "Discriminante: 3 + 4x + x^2 = 0",
        answers: {
          a: "R = 28",
          b: "R = 12",
          c: "R = 32"
        },
        correctAnswer: "a"
      },
      {
        question: "Discriminante: 9x^2 + 2 = 0",
        answers: {
          a: "R = 72",
          b: "R = -32",
          c: "R = -72"
        },
        correctAnswer: "c"
      },
      {
        question: "Discriminante: x^2 = -5x",
        answers: {
          a: "R = 25",
          b: "R = 45",
          c: "R = -25",
          d: "R = 65"
        },
        correctAnswer: "a"
      },
      {
        question: "Discriminante: 2x^2 - 10x/3 + 4/3 = 0",
        answers: {
          a: "R = 4",
          b: "R = 8",
          c: "R = 5"
        },
        correctAnswer: "a"
      },
      {
        question: "Discriminante: 6x + x(x - 13) = 18",
        answers: {
          a: "R = 120",
          b: "R = 131",
          c: "R = 121"
        },
        correctAnswer: "c"
      },
      {
        question: "Resolver con fórmula general: 3x^2 - 5x +2 = 0",
        answers: {
          a: "x=1, x=-2/3",
          b: "x=1, x=2/3",
          c: "x=-1, x=2/3"
        },
        correctAnswer: "b"
      },
      {
        question: "Resolver con fórmula general: x^2 + 11x = -24",
        answers: {
          a: "x=3, x=8",
          b: "x=-3, x=-8",
          c: "x=-3, x=8"
        },
        correctAnswer: "b"
      },
      {
        question: "Resolver con fórmula general: 12x - 4 + 9x^2 = 0",
        answers: {
          a: "x=1 , x=-1",
          b: "x=2/3 , x=-3/6",
          c: "x=2/3 , x=-2/3",
          d: "x=2/5 , x=-2/3"
        },
        correctAnswer: "c"
      },
      {
        question: "Resolver con fórmula general: 6x^2 = x + 222",
        answers: {
          a: "x=37/6,  x=-6",
          b: "x=-37/6,  x=-6",
          c: "x=37/6,  x=4"
        },
        correctAnswer: "a"
      },
      {
        question: "Resolver con fórmula general: 12x - 7x^2 + 64 = 0",
        answers: {
          a: "x=16/7, x=-4",
          b: "x=-16/7, x=4",
          c: "x=-36/7, x=6"
        },
        correctAnswer: "b"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
});
/*
function paginaPrincipal() {
  var paginaAnios = '<h1>¿Serás bastante bueno?</h1>\
  <h3>¡Elige tu grado y a comenzar!</h3>\
  <div class="botones-anios">\
    <input id="boton1" class="boton__anio--select" type="button" value="1 año">\
    <input id="boton2" class="boton__anio--select" type="button" value="2 año">\
    <input id="boton3" class="boton__anio--select" type="button" value="3 año">\
  </div>\
  <h5>A COMENZAR</h5>';

  $("#contenedor").html(paginaAnios);
}
*/