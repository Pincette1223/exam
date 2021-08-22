function random(start, end) {
    /* 시작값과 끝 값을 받아서 두 수 사이의 난수를 반환한다. */
    return Math.floor(Math.random() * (end - start)) + start;
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}


function setting() {
    while (Div_options.hasChildNodes()) {
        Div_options.removeChild(Div_options.firstChild);
    }

    data = shuffle(data);
    continue_.querySelector("b.num").innerText = `${con}회`
    if (con == 2) {
        continue_.hidden = false;
    }


    options = data.slice(0, 5);
    answer = options[0];

    if(mode == 0){
        P_ex.innerText = answer["ex"]
    }   else{
        P_ex.innerText = answer["title"]
    }

    options = shuffle(options)

    for (let i = 0; i < options.length; i++) {
        const element = options[i];

        let option = document.createElement("div");
        option.classList.add("option")
        option.classList.add("bg-nomal")
        option.classList.add(`mode${mode + 1}`)

        if(mode == 0){
            option.innerText = options[i]["title"]
        }   else{
            option.innerText = options[i]["ex"]
        }
        option.addEventListener("click", () => { checkAnswer(i) })

        Div_options.appendChild(option)
    }
}


function checkAnswer(idx) {
    if (options[idx] === answer) {
        alert("정답입니다.")
        con++;

        setting()
    } else {
        alert(`오답입니다.\n${options[idx]["ex"]} 라는 뜻 입니다.`)
        Div_options.childNodes[idx].classList.add("wrong")

        con = 0;
        continue_.hidden = true;
    }
}

//matching
const Div_options = document.querySelector(".options");
const P_ex = document.querySelector(".ex");
const continue_ = document.querySelector(".continue");
const modeChange = document.querySelector(".modeChange");
const modeEx = document.querySelector(".modeEx");

let mode = 0;

continue_.hidden = true;

modeChange.addEventListener("click", () => {
    if(mode == 0){
        modeChange.innerText = "모드2"
        modeChange.classList.add("mode2")
        modeChange.classList.remove("mode1")
        modeEx.innerText = "어휘가 나오고 어휘에 대한 설명을 맞추는 모드 입니다."
        mode++;
    }   else{
        modeChange.innerText = "모드1"
        modeChange.classList.add("mode1")
        modeChange.classList.remove("mode2")
        modeEx.innerText = "어휘에 대한 설명이 나오고 어휘를 맞추는 모드 입니다."

        mode--;
    }

    setting()
})


let con = 0;
const id = get_quers()["id"]
let data = datas[id]["d"]


setting()