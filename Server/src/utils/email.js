import nodemailer from "nodemailer";

async function sendMail(username,mail){
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth :{
            // user : process.env.EMAIL || "vp2005rawal@gmail,com",
            // pass: process.env.PASSWORD || "vp2005rawal"
            user : "vp2005rawal@gmail.com", 
            pass: "iqwd aenc yznf fmjl"
        }
    }
    );

    //email content
    const mailOptions = {
        // from:process.env.EMAIL || "vp2005rawal@gmail.com",
        from:"vp2005rawal@gmail.com",
        to:mail,
        subject : "Get Ready Comarade!",
        text:`Major ${username}, Your account is successfully created, now prepare yourself to embark on an adventure into a world of Virtual Riot and Warfare. -`
    }

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("email sent successfully");
    }catch(err){
        console.log("Email Failed to be sent");
        console.log(err);
    }
}

export default sendMail;