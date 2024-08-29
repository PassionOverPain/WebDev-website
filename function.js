/** @format */
function sendEmail() {
  let bxName = document.getElementById("myName");
  let bxEmail = document.getElementById("myEmail");
  let bxSubject = document.getElementById("mySubject");
  let bxMessage = document.getElementById("myMessage");

  let myParams = {
    PName: bxName.value,
    PEmail: bxEmail.value,
    PSubject: bxSubject.value,
    PMessage: bxMessage.value,
  };

  let myServiceID = "service_wt20wpt";
  let myTemplateID = "template_fncgatu";

  emailjs.send(myServiceID, myTemplateID, myParams).then(function () {
    alert(
      `Thank you for submitting a message, your email has been sent ${bxName.value}. I will be in contact with you shortly.`
    );
  });
}
