let description=document.querySelector(".description");
let blockAdd=document.querySelector(".btnAddBlock")

function fullDescription(){
    return `
    <div class="story">
    <div class="subtitle">
    <div class="inscriptAbove">Enter the subtitle of your article</div>
<input type="text" class="EntSubtitle" placeholder="Enter Subtitle">
</div>
<div class="story_cont">
<div class="inscriptAbove">Tell your story...</div>
<textarea name="story" class="fieldOfTextarea"></textarea>
</div>
<div class="RemoveBlock">
       <button class="btnRemoveBlock">- Remove new block</button>
       </div>
</div>
    `
}

function addDescription(){
    description.insertAdjacentHTML("beforeend",fullDescription())
}


function addBlock() {
    blockAdd.addEventListener("click", (e) => {
      e.preventDefault();
      addDescription();
    });
  }
  function removeBlock() {
    description.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("btnRemoveBlock")) {
        let block = e.target.closest(".story");
        block.remove();
      }
    });
  }
  addDescription();
addBlock();
removeBlock();



function validation() {
    let allIsOkey = true;
    let imgFile = document.querySelector(".img_input");
    let title = document.querySelector(".EntTitle");
    let story = document.getElementsByClassName("story");
  
    
    function showError(elem) {
        allIsOkey = false;
      elem.classList.add("error");
    }
  
    if (title.value== "") {
      showError(title);
    }
  
    for (let i = 0; i < story.length; i++) {
      let subtitle = story[i].querySelector(".subtitle");
      let textarea = story[i].querySelector("textarea");
      if (subtitle.value == "") {
        showError(subtitle);
      }
      if (textarea.value == "") {
        showError(textarea);
      }
      data.push({
        title: title.value,
        descript: textarea.value,
        article: subtitle.value,
        id: data.length
      })
    }
  
    if (allIsOkey) {
      alert("Ok");
    } else {
      alert("Enter all data!");
    }
  }

  document.querySelector(".publish").addEventListener("click", function(e){
      e.preventDefault();
      validation();
  });