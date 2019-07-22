
function clicked()
{
    //alert(document.getElementById("nameTxt").value)
    //call new Person with values from input boxes
    //-- create Person
    //console.log(person)
    // -- use class
    const name=document.getElementById("nameTxt").value;
    const age=document.getElementById("age").value;
    const pass=document.getElementById("pass").value;
    const gender=document.getElementsByName("gender");
    let gen="";
    for( g in gender){
        if(gender[g].checked){
            gen=gender[g].value;
            } 
    }   
    //const f=document.getElementById("f").checked;
   // const o=document.getElementById("o").checked;
   // const m=document.getElementsByName("gender");
    const cars=document.getElementById("cars");
    const car=cars.options[cars.selectedIndex].value
    const bike=document.getElementById("bike").checked;

    var personF=new Person(name,age,pass,gen,car,bike);
    var personC=new PersonClass(name,age,pass,gen,car,bike);
    console.log(personF);
    console.log(personC.toString());
}