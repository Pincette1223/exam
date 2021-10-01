function random(start, end) {
    /* 시작값과 끝 값을 받아서 두 수 사이의 난수를 반환한다. */
    return Math.floor(Math.random() * (end - start)) + start;
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}


function setting() {
    continue_.querySelector("b.num").innerText = `${con}회`
    if (con === 2) {
        continue_.hidden = false;
    }

    if(con === 50){
        alert("연속 50번 정답이라니 당신은 천재인가요?")
    }   else if(con === 100){
        alert("연속 100번 정답이라니 당신은 미친놈인가요?")
    }   else if(con === 150){
        alert("연속 150번 정답이라니 당신은 김도완인가요?")
    }   else if(con % 50 === 0 && con > 150){
        alert(`연속 ${con}번 정답이면 너 김도완이지.`)
    }

    while(Div_options.hasChildNodes()){
        Div_options.removeChild(Div_options.firstChild)
    }


    modeExSetup()
    options = shuffle(datas[id]["d"]);
    answer = options[0];

    if(mode === 0){
        P_ex.innerText = answer["ex"]
    }   else{
        P_ex.innerText = answer["title"]
    }

    options = shuffle(options.slice(0, 5))

    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        // console.log(element);

        let option = document.createElement("div");
        option.classList.add("option")
        option.classList.add("bg-nomal")
        option.classList.add(`mode${mode + 1}`)

        if(mode == 0){
            option.innerText = options[i]["title"]
        }   else{
            option.innerText = options[i]["ex"]
        }

        option.addEventListener("click", () => { checkAnswer(i, answer)})

        Div_options.appendChild(option)
    }
}


function checkAnswer(idx, answer) {
    if (options[idx] === answer) {
        alert("정답입니다.")
        con++;

        setting()
    } else {
        let msg = ""
        if(mode === 0){
            //모드 1인 경우
            msg = `오답입니다.\n${options[idx]["ex"]} 입니다.`
        }   else{
            // 모드 2인 경우
            msg = `오답입니다.\n${options[idx]["title"]}라는 뜻 입니다.`
        }
        alert(msg)
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
let options = []


continue_.hidden = true;

modeChange.addEventListener("click", () => {
    modeChange.innerText = `모드${2 - mode}`
    modeChange.classList.add(`mode${2 - mode}`)
    modeChange.classList.remove(`mode${1 + mode}`)
    modeExSetup()
    
    if(mode === 0){
        mode++;
    }   else{
        mode--;
    }
    
    setting()
})

function modeExSetup(){
    if(id === 4){
        if(mode === 0){
            modeEx.innerText = "속담의 뜻이 나오고 속담을 맞추는 모드 입니다."
        }   else{
            modeEx.innerText = "속담이 나오고 속담의 뜻을 맞추는 모드 입니다."
        }
    }   else{
        if(mode === 0){
            modeEx.innerText = "어휘의 설명이 나오고 어휘를 맞추는 모드 입니다."
        }   else{
            modeEx.innerText = "어휘가 나오고 어휘에 대한 설명을 맞추는 모드 입니다."
        }
    }
}

let con = 0
const id = Number(get_quers()["id"])
// let data = datas[id]["d"]




setting()