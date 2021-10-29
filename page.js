const url = window.location.href;

const group = document.querySelector('.group');

const groupTag = document.querySelector('.Tags');

const nameAndDate = document.querySelector('.data');

function getId(){
return url.split('?id=')[1];
}

function form(elem){
    group.insertAdjacentHTML('afterbegin', cardFromHtml(elem))
}

form(data[getId()]);

function cardFromHtml(elem) {
  let section=``;
  for(let i=0; i< elem.article.length; i++){
    section+=`
    <p class="smallTitle">
    ${elem.article[i].smallTitle}
  </p>
  <p class="descript">
  ${elem.article[i].smallDiscript}
</p>
    `;
  }
  console.log(section);
  return `
    <img
      src="${elem.img}"
      alt="${elem.title}"
      class = "image"
    />
    <h4 class="title">${elem.title}</h4>
    ${section}
  `;
}

inputTag(data[getId()].tags);

function inputTag(result){
    const mas = result.split(',');
mas.forEach(elem => {
    groupTag.insertAdjacentHTML('afterbegin', TagHtml(elem));
  });}

  function TagHtml(elem) {
    const element = elem.split('_').join(' ') 
      return `
      <input type="checkbox" class="button" value="${element}" onclick="window.location.href = 'ang.html?id=${elem}'">
      <label for="button">${element}</label>
      `;
    }

function underScore(elem){
  return `
  <p class="name">${elem.author}</p>
  <p class="day">${elem.date}</p>
  `;
}  

function undScoreWithDate(dataOfScore){
  nameAndDate.insertAdjacentHTML('afterbegin', underScore(dataOfScore));
}

undScoreWithDate(data[getId()]);