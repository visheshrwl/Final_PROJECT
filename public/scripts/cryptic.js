const meme = document.getElementById("meme");
const audioElement = document.getElementById("audio");
const memeArr = [`


⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠁⠸⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⠀⢸⠸⠀⡠⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠃⠀⠀⢠⣞⣀⡿⠀⠀⣧⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡖⠁⠀⠀⠀⢸⠈⢈⡇⠀⢀⡏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠩⢠⡴⠀⠀⠀⠀⠀⠈⡶⠉⠀⠀⡸⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⠎⢠⣇⠏⠀⠀⠀⠀⠀⠀⠀⠁⠀⢀⠄⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠏⠀⢸⣿⣴⠀⠀⠀⠀⠀⠀⣆⣀⢾⢟⠴⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣿⠀⠠⣄⠸⢹⣦⠀⠀⡄⠀⠀⢋⡟⠀⠀⠁⣇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡾⠁⢠⠀⣿⠃⠘⢹⣦⢠⣼⠀⠀⠉⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀
⠀⠀⢀⣴⠫⠤⣶⣿⢀⡏⠀⠀⠘⢸⡟⠋⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀
⠐⠿⢿⣿⣤⣴⣿⣣⢾⡄⠀⠀⠀⠀⠳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀
⠀⠀⠀⣨⣟⡍⠉⠚⠹⣇⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⠀⠀⢀⡀⣾⡇⠀⠀
⠀⠀⢠⠟⣹⣧⠃⠀⠀⢿⢻⡀⢄⠀⠀⠀⠀⠐⣦⡀⣸⣆⠀⣾⣧⣯⢻⠀⠀
⠀⠀⠘⣰⣿⣿⡄⡆⠀⠀⠀⠳⣼⢦⡘⣄⠀⠀⡟⡷⠃⠘⢶⣿⡎⠻⣆⠀⠀
⠀⠀⠀⡟⡿⢿⡿⠀⠀⠀⠀⠀⠙⠀⠻⢯⢷⣼⠁⠁⠀⠀⠀⠙⢿⡄⡈⢆⠀
⠀⠀⠀⠀⡇⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⠀⠀⠀⠀⠀⠀⡇⢹⢿⡀
⠀⠀⠀⠀⠁⠛⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠼⠇⠁
`,`






⠀⠀⢀⣠⠤⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⠎⠀⠀⠀⠘⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣾⡖⢦⣰⣿⢲⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢨⠻⢷⣟⠙⠿⠞⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠦⠤⠷⠶⠶⠂⠀⢸⠀⠀⠀⠀⠀⠀⢀⢀⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⠀⠀⡆⡄⢸⠀⠀⠀⠀⠀⢠⠃⢸⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⠀⠀⡇⡇⢸⣇⡀⠀⠀⡠⠁⢠⠃⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⠀⣸⠃⢻⠈⠈⠉⢙⣳⣥⣄⣀⠔⠀⠀⠀⠀⠀⠀⠀
⠸⡆⠀⠀⠰⣧⣶⠌⠂⠀⠀⠉⠁⠀⠀⠉⠳⡄⠀⠀⠀⠀⠀⠀
⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀
⠀⠹⢦⣀⣀⣀⡀⠀⢀⣀⣀⡀⠀⢀⣀⡠⠚⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⠉⡹⠉⠉⠉⠉⢉⠇⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠰⡉⠑⠁⢠⠃⠀⠀⣟⠓⠋⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠛⠒⠁⠀⠀⠀⠈⠓⠒⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`, `







⣿⣿⣿⣿⣿⣿⡿⣟⠻⠯⠭⠉⠛⠋⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡽⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠈⠙⢿⣿⣿⣿
⣿⣿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣷⣦⡀⠶⣿⣿⣿
⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡆⢻⣿⣿
⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣤⣻⣿⣯⣤⣹⣿
⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⡇⠀⣿⢟⣿⡀⠟⢹⣿
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣷⣤⣤⣼⣿⣿⡄⢹⣿
⣷⠀⠀⠀⠶⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⠛⠉⠈⢻
⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠋⠛⠛⠛⠀⠀⣤⣾
⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠛⠁⣰⣿⣿
⣿⣿⣿⣿⣿⣷⣦⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⣠⣤⣤⣤⣾⣿⣿⣿
`,
`







⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣴⣶⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣤⣄⠀⣠⣴⡿⠋⢉⢙⠟⠛⠉⢿⣀⣠⡀⠀⠀⠀⠀⠀
⠀⠀⠀⣸⠃⠀⠊⢿⣿⡏⢠⣖⣉⢹⠀⣞⢀⡾⠋⡉⠋⠀⠀⠀⠀
⠀⠀⠐⢿⠀⠨⠀⢸⣿⣧⣌⢙⣛⠛⠚⡟⣓⠄⠠⣡⠗⠀⠀⠀⠀⠀
⠀⠀⠀⠹⢷⣤⣠⣼⣿⣿⣿⡾⢟⡉⠀⠋⠛⣦⠞⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⠃⠀⠀⠀⠄⠀⢃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⡿⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣿⣇⠀⠀⠀⠀⠀⠀⣤⠀⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣷⣦⡤⠤⣤⣬⣙⠖⠂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⡧⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡀⢀⠙⠛⢿⣿⣿⣿⣿⣴⠑⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡠⣤⠈⠀⠳⡄⠀⡀⢙⣙⣿⣿⣨⣼⠾⢐⡆⠀⠀⠀⠀⠀⠀⠀⠀
⠠⡀⡀⡀⠈⠠⢧⡀⠘⢁⠀⢿⣿⡟⡍⠀⢸⢣⠀⠀⠀⠀⠀⠀⠀⠀
⠆⠆⠀⠀⣸⠁⠀⠙⠀⠈⠲⡆⠸⠌⠟⠘⠚⠒⠀⠀⠀⠀⠀⠀⠀
`,
`






⠀⠀⠀⠀⠀⠀⢀⣠⣤⠤⠤⠤⢤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡴⠛⣉⣠⡤⠤⠀⠀⠀⠀⠀⠸⠿⠿⣶⣶⣦⣄⠀⠀
⠀⢀⡜⣣⣴⠟⣫⠴⠒⠒⠶⣄⠀⠀⠀⢀⡤⠞⠉⣩⣿⢯⠁⠀
⠀⡾⠀⠁⠀⢰⠃⣠⣄⠀⠀⢹⠀⠀⠀⢸⠁⠀⠀⠈⠁⣼⡀⠀
⢰⠇⠀⠀⠀⠻⢧⣛⡋⢀⣀⡞⠀⠀⠀⠈⠓⢶⡶⠒⠾⢿⣇⠀
⢸⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠠⠤⠤⠤⠴⣾⢋⣴⣛⡳⣆⠙⡆
⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⢸⡇⣼⠽⠭⠿⢿⠀⡇
⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⣿⠀⠀⠀⣸⢸⠃
⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⡿⠀⠀⢰⡇⣿⠀
⠀⠘⡆⠀⢢⠀⠀⠀⠀⠀⠀⠐⠢⠀⠀⢸⠃⣧⣀⡀⠘⡇⢸⡀
⠀⠀⠹⡄⠈⠃⠀⠀⠀⠀⠠⢤⣀⠀⠀⡾⢰⣇⣀⣈⣣⣿⢸⡇
⠀⠀⠀⠹⣆⠀⠂⠀⠀⠀⠀⠀⠈⠑⢤⣇⠘⣿⠷⠯⣷⠇⣸⠀
⠀⠀⠀⠀⠈⠳⣤⡀⠀⠐⠤⣀⡀⠀⠀⢻⣄⠉⠛⠛⢁⣴⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠓⠶⣤⣀⡀⠀⠀⠀⣈⣙⡿⠛⠉⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠒⠛⠉⠀⠀⠀⠀⠀⠀⠀
`,
`






⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀
⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀⠀⡏⠀⠀⠀⠀⠀⢷
⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇
⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀⠀OK⠀ ⡇
⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇
⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼
⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀
⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀
⣿⣿⣧⣀⣿.........⣀⣰⣏⣘⣆⣀⠀⠀
`
]

meme.textContent = memeArr[2];

meme.addEventListener("mouseover", () => {
    meme.textContent = memeArr[Math.floor(Math.random()*memeArr.length)]
})

document.onmousemove = function(cursor){
    let x = cursor.pageX;
    let y = cursor.pageY;
    document.getElementById("X").innerHTML = `X-Coordinate: 36.143.${x}`;
    document.getElementById("Y").innerHTML = `Y-Coordinate: 16.243.${y}`;
};


const eyes = document.querySelectorAll(".eye");
const anchor = document.querySelector("#anchor");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
const d1 = document.querySelector(".hidden");

const home = document.querySelector("#home");
const cryptic = document.querySelector("#cryptic");

//process.env kar ports-------------------------------------->

document.addEventListener("mousemove",(e)=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);


    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90+angleDeg}deg)`;
        // anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    });
})

function angle(cx,cy,ex,ey){
    const dy = ey-cy;
    const dx = ex-cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad*180/Math.PI;
    return deg;
}




const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
// const submitButton = document.getElementById("submit");
const messageElement = document.getElementById("message");
const imageElement = document.querySelector(".image");
// Function to get the current question from the server

function getQuestion() {
    fetch('/question')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      questionElement.textContent = data.question;
      if(data.imgUrl !== undefined){
        imageElement.style.background = `url(${data.imgUrl})`;
        imageElement.style.backgroundSize = "contain";
        imageElement.style.backgroundColor = "white";

        imageElement.style.backgroundPosition = "center";
        imageElement.style.backgroundRepeat = "no-repeat";
      }else{
        imageElement.style.background = "";
      }
      if(data.audio !== undefined){
        audioElement.src = data.audio;
      }else{
        audioElement.src ="https://www.dropbox.com/scl/fi/85gv81p7pztfwx0thak9e/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3?rlkey=g0n6xp5v8twr53srx85ae1ugc&raw=1";
      }
    })
    .catch(error => {
      console.error(error);
      questionElement.textContent = 'Failed to retrieve question.';

    });
}

    // Function to submit the user's answer to the server
    function submitAnswer() {
  const userAnswer = answerElement.value;
  fetch('/answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer: userAnswer }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

      // 3 seconds ke liye error message display
      messageElement.textContent = data.message;
      setTimeout(()=>{
        messageElement.textContent="";
      },3000)
      // Clear the answer textarea
      answerElement.value = "";
      // Get the next question
      getQuestion();
    })
    .catch(error => {
      console.error(error);
      messageElement.textContent = 'Error submitting answer.';
          setTimeout(()=>{
            messageElement.textContent="";
          },3000)
    });
    }
    //socket daal

    // Event listener for the Submit button
    // submitButton.addEventListener('click', submitAnswer);
    answerElement.addEventListener('keypress', (e) => {
      if(e.key === "Enter"){
        submitAnswer();
      }
    });


    // Initialize the game by getting the first question
    getQuestion();

    // Obfuscated version of the above js


