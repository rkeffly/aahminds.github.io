function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("exampleFormControlTextarea1").value,
    };
    emailjs.send('service_6zxl4he', 'template_qatw2da',tempParams)
    .then(function(res){
        console.log("success", res.status);
        alert('Sent!');
    })
}