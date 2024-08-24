let fname = document.getElementById('fn');
let lname = document.getElementById('ln');
let mail = document.getElementById('mail');
let result= document.getElementById('result');
let para;
let value;

let para1 = document.getElementById('para1');



function myfun(){

    if(fname.value=="Kavya" && lname.value=="Lamba" && mail.value=="kavya@gmail.com"){
        para=`You are logged in! ${fname.value} ${lname.value}`;
        result.innerHTML=para;
        value=true;
    }

    else{
        if(fname.value=="" || lname.value=="" || mail.value==""){
            para="Please Enter information";
            result.innerHTML=para;
        }

        else{
            para="Access denied because you entered wrong information";
            result.innerHTML=para;
        }
    }

if(value==true){
    window.location="new.html";
}
}