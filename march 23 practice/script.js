window.addEventListener("load" , function(){
  let registerform = document.getElementById("registerform");
  registerform.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const formdata = new FormData(registerform);
    let name = formdata.get("name_input") ;
    let email = formdata.get("email_input") ;
    let password = formdata.get("password_input") ;
    let username = formdata.get("username_input") ;
    let mobile = formdata.get("mobile_input") ;
    let description = formdata.get("description_input") ;

    let obj = {
      name ,
      email,
      password,
      username,
      mobile,
      description
    }
     let payload = JSON.stringify(obj)
    //  console.log(payload)
    register(payload)

  })


  //login
  let loginform = this.document.getElementById("loginform")
  loginform.addEventListener("submit" , function(event){
    event.preventDefault();
    
    const loginformdata = new FormData(loginform);
    let username = loginformdata.get("username_input");
    let password = loginformdata.get("password_input");

    let obj = {
      password,
      username
    }
    localStorage.setItem("username" , username);
    let payload = json.stringify(obj);
    loginform(payload);


  })
  

})

function register(data){
  // we need to send data to the server
  fetch("https://masai-api-mocker.herokuapp.com/auth/register" ,{
    method : "POST" ,
    headers : {
      'content-type' : 'application/json'
    } ,
    body : data
  })
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

}

function login(data){
  fetch("https://masai-api-mocker.herokuapp.com/auth/login" ,{
    method : "POST" ,
    headers : {
      'content-type' : 'application/json'
    } ,
    body : data
  })
  .then((res)=> res.json())
  .then((data) => {
    if(data.error){
      console.log(data.message)
    }
    else{
      localStorage.setItem("token" , data.token)
      window.location.href = "profile.html";
    }
  })
  .catch((err) => console.log(err))

}