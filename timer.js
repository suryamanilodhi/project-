const Ending=" 28 November 2022  10:43:40 AM";
document.getElementById("end-date").Ending;
const inputs=document.querySelectorAll("input")
 function clock(){
    const end=new Date(Ending);
    const now=new Date();
    console.log(end);
    console.log(now);
    // differennce  is in milisecond so divide by 1000 to convert it intop second
    const diff=(end-now)/1000;
    if(diff<0)return;
     // converts into days;
    inputs[0].value=(Math.floor(diff/3600/24));
    // convert into hours
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=Math.floor((diff)%60);
   

}
clock();
setInterval(
    ()=>{
        clock()
},1000) 

setInterval(
    ()=>{
        clock()
    },1000
);