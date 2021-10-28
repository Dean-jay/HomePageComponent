/**
 * 문제점 28/10/2021
 * 1. 빠르게 누를시에 loading color 체인지가 분해된다.
 * 2. 불필요한 코드들을 다시 보내는 형태가 많이 보인다.
 * 3. button 색을 바꾸는 조건이 맘에 들지 않는다.
 */
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const rb1 = document.querySelector('.box1');
const rb2 = document.querySelector('.box2');
const rb3 = document.querySelector('.box3');
const rb4 = document.querySelector('.box4');
const rd2 = document.querySelector('.roading2');
const rd3 = document.querySelector('.roading3');
const rd4 = document.querySelector('.roading4');

let processNum = 1;
// 효율적으로 4개 박스/3개 선의 on/off 를 관리할 수 있는 방법이 무엇일까?
// 갯수가 서로 다르다.
function process() {
  const rbArr = [rb1, rb2, rb3, rb4];
  const rdArr = [rd2, rd3, rd4];
  rbArr.forEach((el, i) => {
    if (processNum >= i + 1) {
      el.style.border = '0.3em solid var(--main-color)'; //blue
    } else {
      el.style.border = '0.3em solid var(--before-color)'; //grey
    }
  });
  // 모두 전달 하는 것은 불가능하다...
  rdArr.forEach((el, i) => {
    if (processNum >= i + 2) {
      el.style = `
			background: linear-gradient(to right, var(--main-color) 50%, var(--before-color) 50%);
			background-size: 200% 100%;
			background-position: left bottom;
			transition: all 0.5s ease-out;
			`;
    } else {
      el.style = `
			background: linear-gradient(to right, var(--main-color) 50%, var(--before-color) 50%);
			background-size: 200% 100%;
			background-position: right bottom;
			transition: all 0.5s ease-out;
			`;
    }
  });
  // Next button
  if (processNum >= 1 && processNum < 4) {
    nextBtn.style.backgroundColor = 'var(--main-color)'; //blue
  } else {
    nextBtn.style.backgroundColor = 'var(--before-color)'; //grey
  }
  // prev button
  if (processNum > 1 && processNum <= 4) {
    prevBtn.style.backgroundColor = 'var(--main-color)'; //blue
  } else {
    prevBtn.style.backgroundColor = 'var(--before-color)'; //grey
  }
}

process();
function incProcess() {
  if (processNum === 4) {
    console.log('finish');
    return;
  }
  processNum++;
  console.log('next', processNum);
  return process();
}
function decProcess() {
  if (processNum === 1) {
    console.log('nothing');
    return;
  }
  processNum--;
  console.log('prev', processNum);
  return process();
}

prevBtn.addEventListener('click', decProcess);
nextBtn.addEventListener('click', incProcess);
