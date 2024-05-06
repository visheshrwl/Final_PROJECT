import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();


const __dirname = dirname(fileURLToPath(import.meta.url));

export function authenticateToken(req, res, next) {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
        return res.status(200).sendFile(__dirname + "/404.html");
    }
    jwt.verify(accessToken, process.env.SECRET_KEY_STRING , (err, user) => {
        if (err) {
            return res.status(403)
        }
        req.user = user;
        next();
    });
}

export function generateJwtToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY_STRING, { expiresIn: '15h' });
}

export function generateRefreshToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY_STRING, { expiresIn: '7d' });
}

export function authenticateRefreshToken(req, res, next) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(200);
    }
    jwt.verify(refreshToken, process.env.SECRET_KEY_STRING, (err, user) => {
        if (err) {
            return res.status(200)
        }
        req.user = user;
        next();
    });
}
