// this is a module that helps u with finding pathes like the main process path and also helps in joining pathes
const path = require("path")
// the process.mainModule.filename is where the main app starts in it returns the path from the root of the file system
module.exports = path.dirname(process.mainModule.filename)