function validateForm() {
  const formObj = {
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  }
  const fullName = document.getElementById("full-name").value.trim();
  formObj["full-name"] = fullName ? true : false;

  const email = document.getElementById("email").value;
  const emailRegex = /[\w]+(\.[\w]+)*@[\w]+\.[a-z]+/i;
  const isEmail = emailRegex.test(email);
  formObj["email"] = isEmail;

  return formObj;
}
validateForm(); 