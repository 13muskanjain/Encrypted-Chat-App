const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault();  // preventing form from submitting
}

continueBtn.onclick = ()=>{
  console.log("Hello");
    let xhr = new XMLHttpRequest();    // XML Object
    xhr.open("POST", "php/login.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if (data.localeCompare("success")){
                location.href= "users.php"; 
              }
              else{
                console.log(data);
                errorText.style.display="block";
                errorText.textContent=data;
              }
          }
      }
    }
    let formData = new FormData(form); 
    xhr.send(formData);
}