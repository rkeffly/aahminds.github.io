function sendMail(params){
    var tempParams = {
        from_name:document.getElementsByClassName("form-control form-custom").value,
        to_name:document.getElementsByClassName("form-control form-custom").value,
        message:document.getElementById("exampleFormControlTextarea1").value,
    };
    emailjs.send('service_6zxl4he', 'template_vip0w3z',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}