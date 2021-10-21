function sendMail(params){
    var tempParams = {

        from_name:document.getElementById("fromname").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("form-control").value,
    };
    emailjs.send('service_6zxl4he', 'template_66uwzo9',tempParams)
    .then(function(res){
        console.log("success", res.status);
        alert('Sent!');
    })
}