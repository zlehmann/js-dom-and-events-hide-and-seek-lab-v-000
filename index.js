function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.getElementByID('app')
    .querySelectorAll('ul.unranked-list li');

  for (let i = 0; i <lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis.content) * n).toString();
  }
}
