let count=0;
function increaseCount(){
    if(count<5){
        count++;
        document.getElementById("counter").innerText=count;
    }
    
}
function herasuCount(){
    if(count>-5){
        count--;
        document.getElementById("counter").innerText=count;
    }
}
function baiCount(){
    
    count=count*2;
    document.getElementById("counter").innerText=count;
    
}
function resetCount(){
    
    count=0;
    document.getElementById("counter").innerText=count;
    
}
function mawaruCount(){
    if(count<5){
        count++;
        document.getElementById("counter").innerText=count;
    }
    else if (count==5){
        count=-5
        document.getElementById("counter").innerText=count;
    }
   
        
    
}
