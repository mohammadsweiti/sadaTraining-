
window.alert("new");
const students = [
    {
        name:"mohammad",
        Gpa : 90
    },
    {
        name:"ali",
        Gpa : 60
    },
    {
        name:"ahmad",
        Gpa : 70
    },


]

const name1 = window.prompt("please enter your name ");
document.write(`hello ${name1} `);
document.write(` list of the studenmt`);
students.forEach((std ,index)=>{
    document.writeln("<br/>" );
    document.writeln(` student ${index} :  ${std.name}`);
    

})

console.log(students);

console.log(JSON.stringify(students));

localStorage.setItem("user" , name1);
 const name2 = localStorage.getItem("user");

 
document.writeln("<br/>" );
document.writeln(`Hello ${name2}`);

