// console.log("hello")
// document.querySelectorAll(".project").forEach( function(project){})
document
.querySelectorAll(".project")
.forEach( project=> {
    // console.log(project)
    project.onclick =e =>{
        console.log(e)
    }
})