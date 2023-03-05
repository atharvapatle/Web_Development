const fs=require("fs");

//folder making
// fs.mkdir('Atharva',(err)=>{
// if(err) throw err;
// console.log('Folder created');
// })

//file making
// fs.writeFile('./Atharva/bio.txt',"I am SuperHuman",(err)=>{
//     console.log("Files Created");
// })

//Append
// fs.appendFile('./Atharva/bio.txt',"and a son of god.",(err)=>{
//     console.log("Appended succesfully!");
// })

// Reading the file
// fs.readFile('./Atharva/bio.txt','utf-8',(err,data)=>{
//     if(err) console.log('It is an error');
//     console.log(data);
//     console.log("run succesfully");
// })

//RENAME
// fs.rename('./Atharva/bio.txt','./Atharva/myBio.txt',(err)=>{
// console.log('OK!');
// })

//DELETION //File
fs.unlink("./Atharva/myBio.txt",(err)=>{
    console.log('DONE');
})

//Folder
fs.rmdir('./Atharva',(err)=>{
    console.log('Done');
})

