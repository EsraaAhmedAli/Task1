import express, { request } from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templete');


const students=[
    {
        id:1,
        name:"Esraa",
        city:"cairo",
    },
    {
        id:2,
        name:"Esraa",
        city:"GIZA",
    },
    {
     id:3,
     name:"Basma",
     city:"Alexandria",
    },
    {
        id:4,
        name:"Alaa",
        city:"Giza",
       },
       {
        id:5,
        name:"Eman",
        city:"Cairo",
       },
       {
        id:6,
        name:"Aya",
        city:"Alexandria",
       },
       {
        id:7,
        name:"Esraa",
        city:"ALX",
       },
       {
        id:8,
        name:"Esraa",
        city:"Alexandria",
       },
       {
           id:9,
           name:"Alaa",
           city:"Giza",
      },
     {
           id:10,
           name:"Eman",
           city:"Cairo",
     },
     {
           id:11,
           name:"Aya",
           city:"Alexandria",
     },
     {
           id:12,
           name:"Esraa",
           city:"ALX",
     },
];
const student =(request,response) =>{
   
    response.render("students",{layout:false, students})
}
app.get("/students",student)
app.listen(500);
