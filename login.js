const url = 'http://127.0.0.1:3000';
const formaa = document.querySelector('.formSub');


async function login() {
  const data={
    login: document.querySelector('.login').value,
    password: document.querySelector('.password').value,
  };
  const res = await fetch.post(`${url}/login`,{
     body: JSON.stringify(data),
     headers: {
      'Content-Type': 'application/json'
  },
  });
const result = await res.json();
if(result){
  localStorage.setItem('isLogged', JSON.parse(result));
  window.location.href='./index.html?value=singIn';
}
};


     formaa.addEventListener('submit', e => {
        e.preventDefault()
        console.log("click")
        login();
     });

let checkbox=document.querySelector(".check");
let inputPswrd=document.querySelector(".password");
    checkbox.addEventListener('click', () => {
  if(checkbox.checked){
      inputPswrd.setAttribute("type", "text");
  } else{
      inputPswrd.setAttribute("type", "password");
  }
});