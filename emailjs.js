
function sendMail(){ 

    var params = {
        from_name: document.getElementById("from_name").value, 
        message:document.getElementById("message").value,  
        subject:document.getElementById("subject").value, 
    } 
    if (from_name.value != "" && message.value != "" ){
    emailjs.send("service_00cd6cs","template_to6wfb2",params)
    }
    
    else{
        alert("error! make sure you fill out the fields");
    }
}
