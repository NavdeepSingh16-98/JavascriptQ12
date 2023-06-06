let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let title = document.getElementById("title");

let objArr = [];


let fillPost = () =>{
    objArr.forEach((data)=>{
    
    
        posts.innerHTML += `
        <div class="PostDiv">
    <div class="titleDiv">
          <p class="blogTitle">${data.title}</p>
         
          <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
        <div class="textDiv">${data.body}</div>
        </div>
        `;
    
    
    
    })
    
    }

async function fetchData(){

    try{

        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        let data = await response.json();

        console.log('data',data);

        objArr = data;
        fillPost();



    }
    catch(err){
console.log(err.message);

    }



}





let data = {};

let createPost = () => {
    posts.innerHTML += `
    <div class="PostDiv">
    <div class="titleDiv">
          <p class="blogTitle">${data.title}</p>
         
          <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
        <div class="textDiv">${data.body}</div>
        </div>
    `;
    input.value = "";
    title.value = "";
  };

  let acceptData = () => {
    data["body"] = input.value;
    data["title"] = title.value;
    console.log(data);

    createPost();
  };
  let deletePost = (e) => {
    e.parentElement.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    debugger;

    let postDiv=e.parentElement.parentElement.parentElement;
    title.value = postDiv.firstElementChild.firstElementChild.innerHTML;
   // title.value = e.parentElement.previousElementSibling.innerHTML;
   input.value = postDiv.lastElementChild.innerHTML;
    e.parentElement.parentElement.parentElement.remove();
  };
 

  let formValidation = () => {
    if (input.value === "" && title.value==="") {
      msg.innerHTML = "body and title cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
  };


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  
  
window.onload = function(){
    fetchData();

}
  