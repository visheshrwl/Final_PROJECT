import express from 'express';
import bodyParser from "body-parser";
import { authenticateToken } from '../middleware/authMiddleware.js';
import path from "path";
import { User } from '../models/user.model.js';
import { Team } from '../models/team.model.js';
import Performance from '../models/Performance.model.js';


const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(express.json()); // Enable JSON request body parsing


class QuestionNode {
    constructor(question, correctAnswer,imgUrl,audio) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.imgUrl = imgUrl;
        this.audio = audio
        this.next = null;
    }
};


// Create a linked list of questions
const question1 = new QuestionNode("", "Eugenie de Montijo","https://res.cloudinary.com/dnciaoigz/image/upload/v1708030695/oxnfhtlhvqlldtxp6utb.png",undefined);
const question2 = new QuestionNode("https://youtu.be/AUXIuYHFgBE?si=lUrYHfDVDQk35BaT/   eethray Octoberyay inetay inetyay", "german unity day",undefined,undefined);
const question3 = new QuestionNode("Words can cut deeper than knives sometimes","Gautam Thareja","https://res.cloudinary.com/dnciaoigz/image/upload/v1707989686/PROVENANCE_zwalmq.png",undefined);
const question4 = new QuestionNode("", "Michael Dwyer","https://res.cloudinary.com/dnciaoigz/image/upload/v1708032360/demo.png","https://www.dropbox.com/scl/fi/tdpycpls78c7mt072fyli/GoldLink-Crew-ft.-Brent-Faiyaz-Shy-Glizzy-TubeRipper.com.mp3?rlkey=uduqc450wbnpaj8mt1illsu81&raw=1");
const question5 = new QuestionNode("","Margaret Hamilton","https://res.cloudinary.com/dnciaoigz/image/upload/v1708038151/Your_paragraph_text_4_qwpkec.png",undefined);
const question6 = new QuestionNode("Kruti Dev", "chandra grahan", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707982933/ESTABLISHED_six693.png",undefined);
const question7 = new QuestionNode("Sometimes, you have to think inside the box and not just outside", "248013", "https://res.cloudinary.com/dnciaoigz/image/upload/v1708026933/Untitled_design_3_g5reaw.jpg",undefined);
const question8 = new QuestionNode("Time is they key that leads you to your biggest success","Aesthetic Letters","https://res.cloudinary.com/dnciaoigz/image/upload/v1708039731/wzfhdg.png",undefined);
const question9 = new QuestionNode("Brauselimonade mit Fruchtgeschmack", "Berk", "https://res.cloudinary.com/dnciaoigz/image/upload/v1708042209/9_________256_ijecwd.gif",undefined);
const question10 = new QuestionNode("", "Camelus dromedarius", "https://res.cloudinary.com/dnciaoigz/image/upload/v1708037777/w2uc01.png",undefined);
const question11 = new QuestionNode("Same Same but Different", "playfair", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707981954/Untitled_design_4_ud8tv9.png",undefined);
const question12 = new QuestionNode("People throw stones at you and you convert them into milestones", "Thunderbolt", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707977276/1000_F_605206669_Pqol3Se8Viogjz3iEkIWpixyVH603FXr_ncf2pe.jpg","https://www.dropbox.com/scl/fi/ws0vsn9xqgdt2arajcq1d/Rattle-Snake-Hissing-A1-www.fesliyanstudios.com.mp3?rlkey=2cbdyspjhtvtwsltcge3qlso8&raw=1");
const question13 = new QuestionNode("If only I had invested time in this instead of movies, I'd not have to deal as many data breaches  -  Mark Zuckerberg     https://drive.google.com/drive/folders/1AReGeo-LovuSd5SJqFKX2zkx-tle4St9?usp=sharing", "Huey P Newton ", undefined,undefined);
const question14 = new QuestionNode("", "Imperial Mines", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707846660/Your_paragraph_text_2_w11w7t.png",undefined);
const question15 = new QuestionNode("Good read, can't steal that kind of project", "Compatible Time Sharing System", "https://res.cloudinary.com/dnciaoigz/image/upload/v1708044692/Untitled_design_7_sxtqq5.png",undefined);
const question16 = new QuestionNode("password:humpetohaihi9", "[#]", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707763797/download_2_f9x3aj.png",undefined);
const question17 = new QuestionNode("", "Isao Takahata", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707673398/robo.png",undefined);
const question18 = new QuestionNode("aeiou", "Dallah Al Baraka", "https://res.cloudinary.com/dnciaoigz/image/upload/v1708034079/nx47xx.jpg",undefined);
const question19 = new QuestionNode(".---- ---... ..... --... ---... ..--- -....", "Ian Nepomniachtchi", "https://res.cloudinary.com/dnciaoigz/image/upload/v1708024007/fknkyd.png",undefined);
const question20 = new QuestionNode("Repitition of concepts is what makes one remember them.", "hermann goring", "https://res.cloudinary.com/dnciaoigz/image/upload/v1707762859/Untitled_design_uvsonl.png",undefined);

question1.next = question2;
question2.next = question3;
question3.next = question4;
question4.next = question5;
question5.next = question6;
question6.next = question7;
question7.next = question8;
question8.next = question9;
question9.next = question10;
question10.next = question11;
question11.next = question12;
question12.next = question13;
question13.next = question14;
question14.next = question15;
question15.next = question16;
question16.next = question17;
question17.next = question18;
question18.next = question19;
question19.next = question20;


const questionArr = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20]

// let currentQuestion = question1; // Track the current question
const questionQue = [];
var questionIsLocked = false;

router.get('/question',authenticateToken, async(req, res) => {
    const req_user = req.user;
    if (questionIsLocked) {
        questionQue.push(req_user);
        console.log("request qued:",req.user._id);
    }
    else{
        questionIsLocked = true;
        console.log("request:",req_user._id);

        const result = await question(req_user);
        res.json(result);
    }

    while (que.length > 0) {
        const next_data = questionQue.shift();
        const result_qued = await question(next_data);
        res.json(result_qued);
    }

    questionIsLocked = false;

    
  });

  async function question(req_user){
    // Return the current question
    const team = await Team.findOne({name:req_user.team});
    const teamPerformance =  await Performance.findOne({team:team._id});

    // Time at which a team fetches a question for the first time
    const time = new Date();

    const answersLen = teamPerformance.answers.length;

    // Check if Cryptic has started for that team
    if(teamPerformance.answers[answersLen-1].crypticStarted === false){
        const updatedAnswer = await Performance.updateOne({_id:teamPerformance._id},{
            $push:{
            answers: {
                question: questionArr[0].question,
                answer: "Not answered yet",
                isCorrect: false,
                crypticStarted:true,
                submitTime:time,
                timeTaken:time
            }
        }});
    }
    const score = teamPerformance.score;
    return{
      question: questionArr[score].question,
      imgUrl:questionArr[score].imgUrl,
      audio:questionArr[score].audio
    };
  }
  

// refresh based on whether a memeber of that team has answered the right answer

const que = [];
let isLocked = false;

router.post('/answer',authenticateToken, async(req, res) => {
    if (isLocked) {
        que.push({
            req_user:req.user,
            req_body:req.body
        });
        console.log("request qued:",req.user._id);
    }
    else{
        isLocked = true;
        console.log("request:",req.user._id);

        const result = await checkAndResolve({
            req_user:req.user,
            req_body:req.body
        });
        res.json(result);
    }

    while (que.length > 0) {
        const next_data = que.shift();
        const result_qued = await checkAndResolve(next_data);
        res.json(result_qued);
    }

    isLocked = false;
});



router.post('/reset',authenticateToken ,(req, res) => {
async function run2(){
    try{
    // Add a new field reset in Performance Schema whose value would be set to default True
    const resetAll = await Performance.updateMany(
        { reset: true },
        { $set: { 'products.$[].question': 'reset', 'products.$[].answer': 'reset', 'products.$[].isCorrect': false } });
    }catch(err){
    console.log(err);
    }
};run2()
res.json({ message: 'Game reset. Start from the beginning.' });
});


// Check answer strategy function ----------------------------------------------------------------------------------------------->
async function checkAndResolve(data){
const userAnswer = data.req_body.answer.trim(); // Get the user's answer from the request body
// User that answered
const userAnswered = await User.findOne({username:data.req_user._id});
// Team that answered
const teamAnswered = await Team.findOne({name:userAnswered.team});
// Performance of the team that answered
const performance = await Performance.findOne({team:teamAnswered._id});
// Current question
const currentQuestion = questionArr[performance.score];
// Correct answer of that question
const correctAnswer = currentQuestion.correctAnswer;



// Check if the user's answer is correct
if (userAnswer === correctAnswer || userAnswer.toLowerCase() === correctAnswer.toLowerCase() || userAnswer.toUpperCase === correctAnswer.toUpperCase()) {

    // Updating teams Score in Performance collection
    try{

        // Setting new Score of that team
        const newScore = performance.score+1;

        // Time at which answered
        const time = new Date();

        // Time at which previous answer is submitted
        const arrLength = performance.answers.length;
        const timePrevData = performance.answers[arrLength-1].submitTime;

        // Time taken
        const timeTaken = time-timePrevData;

        const seconds = Math.floor(timeTaken / 1000);
        const minutes = Math.floor(seconds / 60);


        // Updating New Score in database
        const updatedScore = await Performance.updateOne({_id:performance._id},{score: newScore});
        const updatedAnswer = await Performance.updateOne({_id:performance._id , score: newScore},{
        $push:{
        answers: {
            question: currentQuestion.question,
            answer: userAnswer,
            isCorrect: true,
            crypticStarted:true,
            submitTime:time,
            timeTaken:minutes
        }
        }});
        // Advance to the next question
        if (currentQuestion.next) {
            // currentQuestion = currentQuestion.next;
            // res.json({ message: 'Correct! Next question:' });
            return { message: 'Correct! Next question:' };

            } else {
            return { message: 'You\'ve completed the game!' };
        };

    }catch(err){ 
        return { message: 'Incorrect Answer' };
    }
    
    
} else {
    // res.json({ message: 'Incorrect answer. Try again.' });
    return{
    message: currentQuestion.hint
    }
}
}





export default router;