const express =require("express")
const rootDir = require("../util/path")
const path = require("path")
// used to server static files and it should only be used on static servers 
//const Estatic = express.static 
// the express router lets u define a set of routes to use instead of adding them directly to the app
const router = express.Router()

// used an express router the link arriving here will be css/new.css 
// so the express.static should start searching from rootDir
router.use(express.static(rootDir))


module.exports = router