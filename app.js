let crypto = require("node:crypto");
function releaseName(name, tag=10){
    return name + ":" + crypto.randomBytes(tag).toString('hex')
}
console.log("Cloud Native application deployment!")
console.log("Updated content")
console.log("Release note: " + releaseName("Sample-release"))
