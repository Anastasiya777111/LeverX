const groupOfCard  = document.querySelector('.card-group');

const input = document.querySelector('.search-field');

const tags = document.querySelectorAll('.button');

const loadMore = document.querySelector('#loadMore');

const head = document.querySelector(".head")

let kol, current;
const url = 'http://127.0.0.1:3000';
const nowUrl = window.location.href;



const getAllData = async function () {
const res = await fetch.get(url);
const data = await res.json();
const db = data.data;

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

function searchFilter(result) {
  result.forEach(elem => {
    groupOfCard.insertAdjacentHTML('afterbegin', cardFromHtml(elem));
  });
}

function clearGroupOfCard() {
    groupOfCard.innerHTML = '';
}

function firstCards() {

  for (let i = 0; i < 8 && i < db.length; i++) {
    const cardHtml = cardFromHtml(db[i]);
    groupOfCard.insertAdjacentHTML('afterbegin', cardHtml);
  }
  kol = db.length - 8;
  current = 8;
}

firstCards();

loadMore.addEventListener('click', () => {
  let i = current + 8;
  while (kol > 0 && current < i) {
    const cardHtml = cardFromHtml(db[current]);
    current++;
    kol--;

    groupOfCard.insertAdjacentHTML('afterbegin', cardHtml);
  }
  if (kol <= 0) {
    loadMore.style.display = 'none';
  }
});

input.addEventListener('keyup', e => {
  const result = db.filter(word =>
    word.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  clearGroupOfCard();
  searchFilter(result);
  loadMore.style.display = 'none';
  if (e.target.value == '') {
    clearGroupOfCard();
    firstCards();
    loadMore.style.display = 'block';
  }
});

function activeTags() {
  let isActive = false;
  tags.forEach(el => {
    if (el.checked) {
      isActive = true;
      const result = db.filter(word =>
        word.tags.includes(el.value)
      );
      searchFilter(result);
    }
  });
  if (!isActive) {
    firstCards();
    loadMore.style.display = 'block';
  }
}

tags.forEach(el => {
  el.addEventListener('click', () => {
    clearGroupOfCard();
    loadMore.style.display = 'none';
    activeTags();
  });
})
}
getAllData();

function HeaderCreate(){
  return`
  <a href="autorization.html"><button class="signIn">Create a post</button></a>`;
  }

  if(nowUrl.indexOf('singIn') > -1){
    head.insertAdjacentHTML('afterbegin', HeaderCreate());}

 



