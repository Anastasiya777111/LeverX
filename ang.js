const url = window.location.href;

const groupOfCard = document.querySelector('.card-group');

const input = document.querySelector('.search-field');

const serchtag = document.querySelector('.Serchtag');

var result;

function getId(){
    let totalUrl = url.split('?id=')[1];
    if(totalUrl.indexOf('0')!==-1){
    return totalUrl.split('0')[1];}
    else{return totalUrl}
    }


function cardFromHtml(elem) {
  return `
  <a href="page.html?id=${elem.id}"
  <div class="card">
    <img
      src="${elem.img}"
      alt="${elem.title}"
      class="main__card-img"
      style="width:100%"
    />
    <div class="container">
    <h4 class="card_title">${elem.title}</h4>
    <p class="card_text">
      ${elem.descript}
    </p>
    </div>
  </div>
  </a>
  `;
}

function Ttext(elem) {
  const str = "Searching by tag : " + elem.split('_').join(' ');
  return `
 <p class="angTitle">${str}<p>
  `;
}

function searchFilter(result) {
  result.forEach(elem => {
    groupOfCard.insertAdjacentHTML('afterbegin', cardFromHtml(elem));
  });
}

function titleText(text) {
    serchtag.insertAdjacentHTML('afterbegin', Ttext(text));
  }

function clearGroupOfCard() {
    groupOfCard.innerHTML = '';
}

titleText(getId());
activeTags(getId());

function activeTags(em) {
    
        result = data.filter(word =>
          word.tags.includes(em)
        );
        searchFilter(result);
      }

      input.addEventListener('keyup', e => {
        const total = result.filter(word =>
          word.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        clearGroupOfCard();
        searchFilter(total);
        if (e.target.value == '') {
          clearGroupOfCard();
          searchFilter(result);
        }
      });
      