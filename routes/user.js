const express =require("express")
const rootDir = require("../util/path")
const fs = require("fs")
const path = require("path")
// the express router lets u define a set of routes to use instead of adding them directly to the app
const router = express.Router()

// used an express router 
router.get("/login.html",(request,response,next)=>{
    // joins the path of the rootDir and the views+login.html
    // note a / is not added it's added by the function to handle different operating systems
    response.sendFile(path.join(rootDir,"views","login.html"))
})
router.get("/register.html",(request,response,next)=>{
    response.sendFile(path.join(rootDir,"views","register.html"))
})
// for requests coming from login.html
router.get("/index.html",(request,response,next)=>{
    response.sendFile(path.join(rootDir,"views","index.html"))
})
// search in the user.txt file for the registered user if its found will send index.html
router.post("/redirectFromLogin.html",(request,response,next)=>{
    let data = request.body
    let username = data.username
    let password = data.password
    let file = fs.readFileSync("user.txt","utf8")
    var x = -1 
    x = file.search(username)
    console.log(x)
    if (x > -1 )
    {
        x = -1 
        x = file.search(password)
        console.log(x)
        if (x > -1 )
        response.sendFile(path.join(rootDir,"views","index.html"))
        else 
        response.sendFile(path.join(rootDir,"views","login.html"))
    }
    else{

        response.sendFile(path.join(rootDir,"views","login.html"))
    }



})
// writing the registerd info to user.txt and sending index.html
router.post("/redirectFromRegister.html",(request,response,next)=>{
    let data = request.body
 
    fs.appendFileSync("user.txt",data.username)
    fs.appendFileSync("user.txt","\t")
    fs.appendFileSync("user.txt",data.email)
    fs.appendFileSync("user.txt","\t")
    fs.appendFileSync("user.txt",data.password)
    fs.appendFileSync("user.txt","\n")
    response.sendFile(path.join(rootDir,"views","index.html"))
})




module.exports = router