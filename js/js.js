for(var i = 0; i < datas.length; i++){
    let button = document.createElement("button")
    button.setAttribute("onclick", `location.href = './problem.html?id=${i}'`)
    button.innerHTML = `${datas[i]["time"]} 국어 ${datas[i]["type"]}`

    if(i == 5){
        button.classList.add("currentExam")
    }

    document.querySelectorAll("div.buttons")[0].appendChild(button)
}

// let button = document.createElement("button")
// button.innerHTML = "2학기 중간고사 과학 지시약"
// button.setAttribute("onclick", `location.href = './jisi.html'`)
// document.querySelectorAll("div.buttons")[0].appendChild(button)

