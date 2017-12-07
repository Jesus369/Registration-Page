// assigning the HTML Id to a "let"
let checkboxPass = document.getElementById('showHidePass')

// Grabbing the id's from HTML and assigning a var to them within Javascript
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('passWord')

// Notifying the user within the empty HTML file divs of there requirements
let passwordRequirements = `<ul><li>one lowercase alphabetical character</li><li>one uppercase alphabetical character</li><li>one numeric character</li><li>one special character</li><li>must be eight characters or longer</li></ul> `
let firstRequired = "First name required"
let lastRequired = "Last name required"
let emailRequired = "Please enter a valid email"
let emailRep = `<input type="email">`


// onClick method for the submitInfo button. The following will process...
submitInfo.addEventListener('click',function(){

  // for HTML file submit button
  let submitInfo = document.getElementById('submitInfo')

  // checking validity
  let name1Validity = firstName.checkValidity()
  let name2Validity = lastName.checkValidity()
  let emailValidity = email.checkValidity()
  let passValidity = password.checkValidity()


  // empty divs within the HTML file's form
  let reqFirst = document.getElementById('reqFirst')
  let reqLast = document.getElementById('reqLast')
  let reqEmail = document.getElementById('reqEmail')
  let reqPassword = document.getElementById('reqPassword')


  // if validity returns false, meaning if the user on there end does not correctly meet the requirements then notify the user there requirements
  if(name1Validity === false) {
    reqFirst.innerHTML = firstRequired
  }

  if(name2Validity === false) {
    reqLast.innerHTML = lastRequired
  }

  if(emailValidity === false) {
    reqEmail.innerHTML = emailRequired
  }

  if(passValidity === false) {
    reqPassword.innerHTML = "Your password must contain at least" + passwordRequirements
  }





  // checking on the console end that the functions are running properly
  console.log(name1Validity)
  console.log(name2Validity)
  console.log(emailValidity)
  console.log(passValidity)
  console.log('clicked button')
})

// Showing and hiding password when the user clicks on the checkbox
checkboxPass.addEventListener('click',function(){
  if(checkboxPass.checked) {
    password.setAttribute('type','text')
  } else {
    password.setAttribute('type','password')
  }
})
