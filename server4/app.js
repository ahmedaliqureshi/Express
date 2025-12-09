//why:- we need to import the packages form the added pnpm packages 
//where;- we are doing at the start of the program 
//what:- using the import and from words
import express from "express"; 
import dotenv from "dotenv"; 
// why;- then we need to take data form the env files 
//where;- we are going to do it right after the dotenv
//what:- we are going to use method like of .config()
dotenv.config(); 
//why;- the express is a methos and cannot be used as normally, so we need a variabel 
// to store it 
//where:- we are going to take it in at the start of the program 
//what:- const variable name (same as file name) = express() method 
const app = express(); 
//why:- the input that we are taken as json format so to manuplate the data 
// we need to use json format with use method 
//where:- we need to use it at the start of the program 
//what;- file name. use(exprss(json))
app.use(express.json()); 
//why;- now we need a port number on which the data can be posted and retrived 
//where:- this will also be written at the start of the program 
//what= cont PORT= porcess.env.PORT||5000 
const PORT= process.env.PORT||5000; 
//why:- now we are going to create a test api to see if our imported packages 
// and variables are working or not 
//where;- we are going to create this api as the 1st of them 
//what:- app.get(method)("/root"(reques,response)=>{
// try catch block })
app.get("/",(req,res)=>{
    try {
        console.log("hello express, this is my 1st api"); 
        res.status(200).json({message:"test api is working"});
    } catch (error) {
        console.log(error.message, error.name); 
        res.status(500).json({message:"test api is not working"});
    }
})
// why;- to take the input from the user we need to use post method 
//  //where; it will be written after the test api 
//what;- app.post("/root",(req,res)=.{ try catch block})
app.post("/add",(req,res)=>{
    try {
        // why:- we need to take the inputs from the user hence we will be taking req
        //where:0 we are going to write it at teh start of the code ]
        //what:- const varibale name = req.body.variable to store the data 
        console.log('hello')
        const numb1= req.body.a; 
        const numb2= req.body.b; 
        const total= numb1 + numb2; 
        console.log(`sum is ${total}`);
        res.status(200).json({ouput:total});
    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test add api is not working"});
    }
})
app.post("/mul",(req,res)=>{
    try {
        const numb1= req.body.a; 
        const numb2= req.body.b; 
        const total= numb1 * numb2; 
        console.log(`sum is ${total}`);
         res.status(200).json({ouput:total});
    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test mul api is not working"});
    }
})

app.post("/comp",(req,res)=>{
    try {
        const numb1= req.body.a; 
        const numb2= req.body.b; 
        if(numb2>numb1)
        {
            console.log(`${numb2} is greater`); 
             res.status(200).json({ouput:numb2});
        }
        else 
            console.log(`${numb1} is greater`);
         res.status(200).json({ouput:numb1});
    
    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test comp api is not working"});
    }
})

app.post("/EORD",(req,res)=>{
    try {
        const numb1= req.body.a; 
        const numb2= req.body.b; 
        if(numb1%2==0)
        {
            res.status(200).json({ouput:`${numb1} is even`})
        }
        else if (numb2%2==0)
        {
            res.status(200).json({output:`${numb2} is even`})
        }
        else 
        res.status(200).json({ouput:`neither of the numbers are even, hence odd`});

    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test EORD api is not working"});
    }
})

app.post("/rev",(req,res)=>{
    try {
        // res.status.apply(200).json({message:`type youre string: \n`})
        let str1=req.body.a; 
        //note:- JS does not have a build in revers method, so to reverse a string 
        // we need to convert it into an array and then split it and reverse it and put it back 
        //why:- we need to use split method to convert the string into array
        // then we need to reverse method to flip the elements of the array 
        // then we need use join method to put them backtogther 
        let revstr=[...str1].reverse().join('')
         res.status(200).json({ouput:`${revstr}`});
        
    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test rev api is not working"});
    }
})
app.post("/pal",(req,res)=>{
    try {
        // res.status.apply(200).json({message:`type youre string: \n`})
        let str1=req.body.a; 
        //note:- JS does not have a build in revers method, so to reverse a string 
        // we need to convert it into an array and then split it and reverse it and put it back 
        //why:- we need to use [...string varibale name] to convert the string into array
        // then we need to reverse method to flip the elements of the array 
        // then we need use join method to put them backtogther 
        let revstr=[...str1].reverse().join('')
        //  res.status(200).json({ouput:`${revstr}`});
         if(str1==revstr)
         {
            console.log(`the string is palindore`)
            res.status(200).json({output:`${str1} is palindrome`});
         }
         else 
            console.log(`the string is not palindore`);
            res.status(200).json({output:`${str1} is not palindrome`});
        
    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test pal api is not working"});
    }
})
app.post("/vowel",(req,res)=>{
    try {
        // res.status.apply(200).json({message:`type youre string: \n`})
        let str1=req.body.a; 
        //note:- JS does not have a build in revers method, so to reverse a string 
        // we need to convert it into an array and then split it and reverse it and put it back 
        //why:- we need to use [...string varibale name] to convert the string into array
        // then we need to reverse method to flip the elements of the array 
        // then we need use join method to put them backtogther 
        let revstr=[...str1].reverse().join('')
        //  res.status(200).json({ouput:`${revstr}`});
         if(str1==revstr)
         {
            console.log(`the string is palindore`)
            res.status(200).json({output:`${str1} is palindrome`});
         }
         else 
            console.log(`the string is not palindore`);
            res.status(200).json({output:`${str1} is not palindrome`});
        
    } catch (error) {
        console.log(error.message,error.name); 
        res.status(500).json({message:"test pal api is not working"});
    }
})





//why:- to recive the outputs of teh api we are going to use listen method 
//where:- this will be written at the end of the program 
// what:- app.listen(PORT, ()=>{conosle.log port number})
app.listen(PORT,()=>{
    console.clear()
    console.log(`server is running at http://localhost${PORT}`)
})