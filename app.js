function generateMarksheet()
{
    var math=parseInt(document.getElementById('math').value);
    var physics=parseInt(document.getElementById('physics').value);
    var english=parseInt(document.getElementById('english').value);
    var urdu=parseInt(document.getElementById('urdu').value);
    var computer=parseInt(document.getElementById('computer').value);


 if(math>100 || physics>100 ||english>100 ||urdu>100 || computer>100 )
{
    alert("ENTER VALID VALUE")
}
else
{
    var obtainedMarks=math+physics+english+urdu+computer
console.log(obtainedMarks);
document.getElementById("obtainedMarks").innerHTML=obtainedMarks;

var percentage = (obtainedMarks /500)*100;
console.log(percentage);
document.getElementById('percentage').innerHTML=percentage;

}
if(math>50 && physics>50 && english>50 && urdu>50 && computer>50 )
{
    document.getElementById('remarks').innerHTML="PASS";
}
else{
    document.getElementById('remarks').innerHTML="FAIL";
}
if(percentage>=80){
    document.getElementById("grade").textContent="A";
}
else 
if(percentage>=70){
    document.getElementById("grade").textContent="B";
}
else
if(percentage>=60){
    document.getElementById("grade").textContent="C";
}
else
if(percentage>=50){
    document.getElementById("grade").textContent="D";
}
else
if(percentage>=40){
    document.getElementById("grade").textContent="F";
}
}
// var obtainedMarksTd=document.getElementById('percentag')
// var percentageTd = document.getElementById('percentage')

// percentag.inner='percentag'
// percentage.innerHTML='percentage'




            
            

 