/** @format */
function sendEmail() {
  let bxName = document.getElementById("myName");
  let bxEmail = document.getElementById("myEmail");
  let bxSubject = document.getElementById("mySubject");
  let bxMessage = document.getElementById("myMessage");

  emailjs.init("3NfkWXzXjcjzo_G_v");

  let myParams = {
    PName: bxName.textContent,
    PEmail: bxEmail.textContent,
    PSubject: bxSubject.textContent,
    PMessage: bxMessage.textContent,
  };
  let myServiceID = "service_wt20wpt";
  let myTemplateID = "template_fncgatu";

  emailjs.send(myServiceID, myTemplateID, myParams);
  alert("Email has been sent sir");
}
