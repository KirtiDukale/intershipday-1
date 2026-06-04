 function showpopup() {
    let name=document.getElementById("name").value;
    alert("hello: "+name);
    // let email=document.getElementById("email").value;
    // let message=document.getElementById("message").value;
    // alert("Name: "+name+"\nEmail: "+email+"\nMessage: "+message);
}    
function checknumber(){
    let number=document.getElementById("number").value;
    if(number%2==0){
        alert("The number is even");
    }
    else{
        alert("The number is odd");
    }
}  
document.getElementById("changecolor").addEventListener("click",function(){
    document.body.style.backgroundColor=" black";
    document.body.style.color="white";
});
