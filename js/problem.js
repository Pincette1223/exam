function random(start, end) {
  /* 시작값과 끝 값을 받아서 두 수 사이의 난수를 반환한다. */
  return Math.floor(Math.random() * (end - start)) + start;
}
function shuffle(arr) {
  for (let i = 0; i < 3; i++) {
    arr = arr.sort(() => Math.random() - 0.5);
  }

  return arr;
}

function modeExSetup() {
  modeEx.innerText = "[ ] 안에 들어갈 말을 고르는 모드입니다.";
}

function createElement(tag, classList = [], text = "") {
  let element = document.createElement(tag);
  element.innerText = text;

  classList.forEach((class_) => {
    element.classList.add(class_);
  });

  return element;
}

function getWrongKey(idx) {
  return options[idx]["ex"];
}

function setting() {
  if (0 < con && con <= 50 && con % 50 === 0) {
    alert("연속 50번 정답이라니 당신은 천재인가요?");
  }

  while (Div_options.hasChildNodes()) {
    Div_options.removeChild(Div_options.firstChild);
  }

  modeExSetup();
  options = shuffle(datas[id]["d"]);
  answer = options[0];

  P_ex.innerText = answer["ex"];

  options = shuffle(options.slice(0, 5));

  for (let i = 0; i < options.length; i++) {
    const element = options[i];
    // console.log(element);

    let optionGroup = createElement("div", ["optionGroup"]);

    let option = createElement("div", [
      "option",
      "bg-nomal",
      `mode${mode + 1}`,
    ]);
    option.innerText = options[i]["title"];

    option.addEventListener("click", () => {
      checkAnswer(i, answer);
    });

    optionGroup.appendChild(option);
    Div_options.appendChild(optionGroup);
  }
}

function checkAnswer(idx, answer) {
  if (currentAnswer) return;

  if (options[idx] === answer) {
    // alert("정답입니다.")

    con++;
    continue_.querySelector("b.num").innerText = `${con}회`;
    if (con === 2) {
      continue_.hidden = false;
    }

    if (max < con) {
      max = con;
      localStorage.setItem("max", max);
      continue_.querySelector("b.max").innerText = `${max}회`;
    }

    Div_options.childNodes[idx].classList.add("answer");
    document.querySelectorAll(".problem")[0].classList.add("answer");

    setTimeout(() => {
      setting();
      document.querySelectorAll(".problem")[0].classList.remove("answer");

      currentAnswer = false;
    }, 1000);

    currentAnswer = true;
  } else {
    addWrongList(options[idx].title);
    let msg = `오답입니다.\n${getWrongKey(idx)}`;
    // alert(msg)

    Div_options.childNodes[idx].classList.add("wrong");

    con = 0;
    continue_.hidden = true;
  }
}

function addWrongList(title) {
  if (title in wrongList) wrongList[title] += 1;
  else wrongList[title] = 1;

  localStorage.setItem(`wrongList_${id}`, JSON.stringify(wrongList));
}

//matching
const Div_options = document.querySelector(".options");
const P_ex = document.querySelector(".ex");
const continue_ = document.querySelector(".continue");
const modeChange = document.querySelector(".modeChange");
const modeEx = document.querySelector(".modeEx");
const problemTitle = document.querySelector(".problem-title");

let mode = 0;
let options = [];
let currentAnswer = false;

let con = 0;
const id = Number(get_quers()["id"]);
checkOutside(id);

let data = datas[id]["d"];

var max = localStorage.getItem("max");
if (max == null) max = 0;

let wrongList = JSON.parse(localStorage.getItem(`wrongList_${id}`));
if (wrongList == null) wrongList = {};

continue_.hidden = true;
continue_.querySelector("b.max").innerText = `${max}회`;

// modeChange.addEventListener("click", () => {
//   modeChange.innerText = `모드`;
//   modeChange.classList.add(`mode${2 - mode}`);
//   modeChange.classList.remove(`mode${1 + mode}`);
//   modeExSetup();

//   if (mode === 0) {
//     mode++;
//   } else {
//     mode--;
//   }

//   setting();
// });

setting();

// console.log(max);
