// const form = document.querySelector('#form')
// const username = document.querySelector('#username').value;
// const password = document.querySelector('#password').value;

const validateForm = ()=>{
    const profileObj = {username:'',password:''}
    if(username!=='' && password!==''){
        profileObj.username = document.getElementById("username").value;
        profileObj.password = document.getElementById("password").value;
        localStorage.setItem("profileDetails",JSON.stringify(profileObj));
        window.location.href="Home.html";
    }else{
        return
    }
}
// form.addEventListener('submit',(e)=>{
    
//     if(!validateInputs())
//     {
//         e.preventDefault();
//     }
// })

// function validateInputs()
// {
//     const usernameVal = username.value.trim()
//     const passwordVal = password.value.trim();
//     let success = true

//     if(usernameVal===''){
//         success=false;
//         setError(username,'Username is required')
//     }
//     else{
//         setSuccess(username)
//     }

//     if(passwordVal === ''){
//         success= false;
//         setError(password,'Password is required')
//     }
//     else if(passwordVal.length<8){
//         success = false;
//         setError(password,'Password must be atleast 8 characters long')
//     }
//     else{
//         setSuccess(password)
//     }


//     return success;

// }

// // setError Function
// function setError(element,message)
// {
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')
//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }

// //setSuccess Function
// function setSuccess(element)
// {
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')
//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }




  