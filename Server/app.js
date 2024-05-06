import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import authRoute from "./src/routes/authRoutes.js";
import crypticRoute from "./src/routes/crypticRoute.js";
import leaderBoardRoute from "./src/routes/leaderBoardRoute.js";
import nameRoute from "./src/routes/nameRoute.js";
import connectDB from "./src/db/mongoose.js";
import { authenticateToken } from './src/middleware/authMiddleware.js';
import rateLimiter from './src/middleware/rateLimiterMiddleware.js';
import logoutRoute from "./src/routes/logoutroute.js";

const app = express();
app.set('trust proxy' , 20);
app.use(rateLimiter);

const START_PORT = 8000;

app.use(logoutRoute);

//static files folders
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const __public = dirname(__dirname) + "/public";

// Serve static files from the 'public/scripts' directory
app.use('/public', express.static(join(__dirname, '..', 'public')));
app.use('/scripts', express.static(join(__dirname, '..', 'public', 'scripts')));
app.use(express.static(__public));

app.use(helmet.noSniff());
app.use(helmet.referrerPolicy({ policy: "no-referrer" }));

app.get("/",(req,res)=>{
    res.sendFile(__public + "/views/index.html");
    console.log(req.ip);
});

app.get("/signup",(req,res)=>{
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
        jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                res.sendFile(__public + "/views/sign_up.html");
            }
            else{
                req.user = user;
                if(req.user.role === "team_leader"){
                    res.redirect("/home");
                }
                else if(req.user.role === "team_member"){
                    res.redirect("/");
                }
            }

        });
    }else{
        res.sendFile(__public + "/views/sign_up.html");

    }
});

app.get("/register", authenticateToken,(req,res)=>{
    if(req.user.role === "team_leader"){
        res.sendFile(__public + "/views/register.html");
    }else{
        res.sendStatus(403);
    }
});


app.get("/login",(req,res)=>{
    const accessToken = req.cookies.accessToken;
    console.log(req.ip, accessToken);
    if (accessToken) {
        console.log("hai");
        jwt.verify(accessToken, process.env.SECRET_KEY_STRING, (err, user) => {
            if (err) {
                console.log("Error aaya")
                console.log(err)
                res.sendFile(__public + "/views/login.html");
            }
            else{
                req.user = user;
                const username = user._id;
                console.log(req.ip + " " + username);
                res.redirect("/home");
            }

        });
    }else{
        res.sendFile(__public + "/views/login.html");
    }});

app.get("/leaderBoard", authenticateToken, (req,res)=>{
    console.log(req.ip +" leaderBoard");
    res.sendFile(__public + "/views/leaderBoard.html");
});

app.get("/members", (req,res)=>{
    res.sendFile(__public + "/views/members.html");
});

app.get("/contact", (req,res)=>{
    res.sendFile(__public + "/views/contact.html");
});

app.get("/home",authenticateToken, (req,res)=>{
    if(req.user.role === "team_leader"){
        res.sendFile(__public + "/views/home.html");
        const username = req.user._id;
        console.log(req.ip + " " + username+" home");
    }else{
	    if(req.user.role==="team_member"){
            res.sendFile(__public + "/views/home.html");
            const username = req.user._id;
            console.log(req.ip + " " + username+" home");
	    }
	    else{
		    res.sendStatus(200);
	    }
    }
});

app.get("/crypt",authenticateToken, (req,res)=>{
    const username = req.user._id;
    console.log(req.ip + " " + username+" crypt");
    res.sendFile(__public + "/views/cryptic.html");
});

app.get("/cryptictime", (req, res) => {
    res.sendFile(__public + "/views/cryptictime.html")
})

app.get("/logout",(req,res)=>{
    console.log(req.ip);
    res.redirect("/");
});

app.all('*', (req, res) => { 
    res.status(404).sendFile(__public + "/404.html"); 
  }); 

app.use(authRoute);
app.use(nameRoute);
app.use(crypticRoute);
app.use(leaderBoardRoute);

function startServers() {
    // for (let i = 0; i < NUM_INSTANCES; i++) {
         const port = START_PORT;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
     }
//  if (process.env.NODE_APP_INSTANCE !== undefined) {
     startServers();
//  } else {
//      const instances = NUM_INSTANCES || 3;
//     const { fork } = await import('pm2');
//      fork(import.meta.url, {
//          instances,
//          exec_mode: 'cluster'
//      }, (err) => {
//          if (err) {
//              console.error('Error starting application:', err);
//              process.exit(1);
//          }
//      });
//  }
