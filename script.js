function sendMail(){
    let parms={
        sub : document.getElementById("sub").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        message : document.getElementById("message").value,    
    };
    emailjs.send("service_nwfwboo","template_gpy7l9b",parms).then(alert("Contact details sent successfully!!!"))
}