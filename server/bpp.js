// why:- we are taking importing express to use it's libraries 
// where;- we are doing this at the start of the program, to be later on used
// what:- we are using the import key word to make the libraries form experss 
// to be imported 
import express from "express"; 
// why:- we are importin dotenv libraries acess and use the data stored in it 
// where:- we are doing this are the start of the code to be used in rest of the program 
// what:- same we are using the import to have libraries 
import dotenv from "dotenv"; 
//why;- then we are configuring the dotenv file so the program can acess it 
// where;- we are doing this at the start of the program, so it can be used through out the program 
// what:- we are going to use the method like of .config() to simply the work for us 
dotenv.config(); 
//why:- then we takeing the file name as variable and equating it to express function, 
// brcuase express function cannot be used independetny 
// where- we are doing this at the start of the program to, be later on used in rest of the program 
// what:- we are taking the variabel as constent and then assigning them to the express function 
const bpp= express();
//why;- the data is kept in the dotenv file is processed, this is done to protect the sentive data fo the program 
// where:- this is done after importing that will help us in rest of the program 
// what:- we are taking a variable and storing the process in it by keeping it constent 
const PORT=process.env.PORT; 
//why:- then we are going to use the "use"method that help us to use the other methods like of the 
// post, put and delete 
//where:- thsi is also written in the intial stages of the program as we will be using it through out the 
// program 
// what:- the file name with use method acuess will be written with in it there, will be the express key word with json acess
// this makes the output of the express in json format 
bpp.use(express.json());
//why:- tesing an api si crusial as it helps us does the file is running or not 
//where:- we write it this after isntalling the packages as it helps to know that if the packages are running or not 
// what:- we take the file name and acess it with get method, the get method consist of the two parameter where one is root 
// the other one is  reques and response,then they are arrow funciton which consist of the try catch and block 
bpp.get("/",(req,res)=>{
    try {
        res.status(200).json({masg:"tesing the api"});
    } catch (error) {
        console.log(error.message, error.name); 
        res.status(500).json({mssg:error})
    }
})
//why:- post  basically generat the data from the user or make an entery in db 
// we will make the root as login 
// where:- this will be our 1st api after testing as we want teh user to 1st make the account on our websit 
// what:- the post method consist of the simple dot ".", and name of the object to acess the data with in ti 
// the body is automatically made by the express as the code is ran 
bpp.post("/login",(req,res)=>{
try {
    //why:- we are going to declare the variable and put the acessed data in it 
    // where:- this will done in the start of the try block 
    // what:- declare a varaible by let and then acesss the data of the 

    // we are taking the variable known as userData 
    let userData= req.body; // taking the data from database which is known as body
    console.log(userData); // printing the database 
    // email of the user 
    let email= userData.email; // acessing email fromn the body 
    //password of the user 
    let password = userData.password  // acessing password from the body 
    res.status(200).json({msg:"account is created"})

//     let {email, password} = req.body
// ,
} catch (error) {
    console.log(error.message, error.name); 
    res.status(500).json({mssg:error})
}
})
//why:- put basically updates the existing the data in the db 
// where:- we are wiriting it after the post so we can update the data that has been recently updated 
// what:- post is method like all the other http methos, where we use to update the data in db 
bpp.put("/update",(req,res)=>{
    try {
        let updateData=req.body; 
        console.log(updateData); 
        res.status(200).json({msg:"account updated"});
    } catch (error) {
         console.log(error.message, error.name); 
        res.status(500).json({mssg:error})
    }
})
//why:- delete method is used to remove the data from the database 
//where:- we are doing this all the way at the end of the program, but it does not have any significance
// of where we put it 
//what:- delete is similar method as other 
bpp.delete("/delete",(req,res)=>{
    try {
        // we are going to take one more variable and acess the data form the body 
    let deleteData = req.body; 
    // print the body 
    console.log(deleteData); 
    req.status(200).json({msg:"account updated"})
    } catch (error) {
        console.log(error.message, error.name); 
        res.status(500).json({mssg:error})
    }
})
//why:- we need to recall the api so we need to call the local host 
// where:- we keep this at the end of the program, so it is the format we follow 
// what:- it helps us to call teh api and get the output 

bpp.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
})