
const fs=require('fs');
const path=require("path");

const btnCreate=document.querySelector(".btn-primary");
const btnRead=document.querySelector(".btn-warning");
const btnDelete=document.querySelector(".btn-negative");
const fileName=document.querySelector(".fileName");
const fileContent=document.querySelector(".fileContent");

const filePath=path.join(__dirname,"File");

btnCreate.addEventListener("click",(e)=>{
    let file=path.join(filePath,fileName.value);
    const content=fileContent.value;
    fs.writeFile(file,content,(err)=>{
        if(err){
            return alert(err, "error");
        }
        alert("File created/update");
    })
});

btnRead.addEventListener("click",()=>{
    let file=path.join(filePath,fileName.value);
    fs.readFile(file,(err,data)=>{
        if(err){
            return console.log(err,"error");
        }
        fileContent.value = data;
        // prompt("File name "+fileName.value+" reading done")
    })
});

btnDelete.addEventListener("click",()=>{
    let file=path.join(filePath,fileName.value);
    fs.unlink(file,(err)=>{
        if(err){
            return console.log(err,"error");
        }
        
        alert("File name "+fileName.value+" deleted")
        fileName.value = "";
        fileContent.value = "";
    })
});