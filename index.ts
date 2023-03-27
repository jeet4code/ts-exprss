import express, { Request, Response } from "express";

const app = express();

app.get("/", (req:Request, res: Response) => {
    res.send("Hello Friends");
})

app.listen("3000", () => {
    console.log("Hello ts node express");    
});
