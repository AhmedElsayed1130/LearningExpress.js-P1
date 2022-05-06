const express = require("express")
const bodyparser = require("body-parser")
const rootDir = require("./util/path")
const usersRoutes = require("./routes/user")
const staticFilesRoutes = require("./routes/staticFiles")

const app = express()
// bodyparser module works with express very while just call the bodyparser.the type exepected to come
app.use(bodyparser.urlencoded())
app.use(usersRoutes)
app.use(staticFilesRoutes)



app.listen(2000)
console.log("Listenning on port 2000")
