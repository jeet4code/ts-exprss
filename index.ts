import express, { Request, Response } from "express";
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.enable('view cache');

app.get("/", (req:Request, res: Response) => {
    //res.send("Hello Friends");
    const data = {
        title: 'My Page',
        heading: 'Welcome to my page!',
        showContent: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      };
      // Update Layout
      // app.locals.layout = "t2"
      // res.render('home', data);
      res.render('home', {...data, layout: "t2"});
    
})

app.listen("3000", () => {
    console.log("Hello ts node express");    
});
