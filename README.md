# LearningExpress.js-P1

Well i have learned alot since the past few days Express.js facilitate everything that would take 30 lines of code in Node.js 
i have learned about 

1- express which is a middleware where i can stack mutliple middleware on top of each other
2- express make it easy to use other modules and other middleware like the bodyparser middleware
3- it's easy to speicify certin routes using either app.use #note here app.use the given path is used to substring matching and not exact matching
app.get app.post 
4- i learned how to use express.static which is an increadible way to send static files like css and js files that wont be changed 
5- i've learned how to use the SendFile function which made sending function way too easy i no longer need to spicify a content type or anything it just 
send the file and handles everything
6- i have learnt that every middleware in app. something has a callback function which executes on every request and that callback takes 3 paramters
    a- request  b- response c- anothercall back function we usually name it next
7- next() is used to if u want to continue to the other middlewares 
8- i've read in the documentation that express.static calles next() if files arent found 
