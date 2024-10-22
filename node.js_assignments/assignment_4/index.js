const employees = require("./Employee.json"); 
const { writeFile,readFile,appendFile,rm } = require("fs");

const stringEmp = JSON.stringify(employees, null, 2); 

// writeFile("Employee.txt", stringEmp, "utf8", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// readFile("./Employee.txt",(err)=>{
//     if (err) throw err;
//     console.log("The data has been read!");
// })

// appendFile("./Employee.txt","Updated","utf8",(err)=>{
//     if(err) throw err
//     console.log("The data has been appended!")
// })

rm("./Employee.txt",(err)=>{
    if(err) throw err
    console.log("The file has been deleted!")
})
