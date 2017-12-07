// assigning checkboxPass within HTML to a let within javascript
let checkboxPass = document.getElementById('showHidePass')
let emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"

// Grabbing the id's from HTML and assigning a var to them within Javascript
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('passWord')

let nothingEntered = ""
let passwordRequirements = `<ul><li>one lowercase alphabetical character</li><li>one uppercase alphabetical character</li><li>one numeric character</li><li>one special character</li><li>must be eight characters or longer</li></ul> `
let firstRequired = "First name required"
let lastRequired = "Last name required"
let emailRequired = "Please enter a valid email"
let emailRep = `<input type="email">`


// onClick method for the submitInfo button. The following will process
submitInfo.addEventListener('click',function(){

  // for HTML button
  let submitInfo = document.getElementById('submitInfo')

  // checkValidity for "lets"
  let name1Validity = firstName.checkValidity()
  let name2Validity = lastName.checkValidity()
  let emailValidity = email.checkValidity()
  let passValidity = password.checkValidity()


  // empty divs within the HTML form
  let reqFirst = document.getElementById('reqFirst')
  let reqLast = document.getElementById('reqLast')
  let reqEmail = document.getElementById('reqEmail')
  let reqPassword = document.getElementById('reqPassword')



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






  console.log(name1Validity)
  console.log(name2Validity)
  console.log(emailValidity)
  console.log(passValidity)
  // console.log(passValidity)
  console.log('clicked button')
})

// Showing and hiding password
checkboxPass.addEventListener('click',function(){
  if(checkboxPass.checked) {
    password.setAttribute('type','text')
  } else {
    password.setAttribute('type','password')
  }
})
