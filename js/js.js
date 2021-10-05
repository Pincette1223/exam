for(var i = 0; i < datas.length; i++){
    let button = document.createElement("button")
    button.setAttribute("onclick", `location.href = './problem.html?id=${i}'`)
    button.innerHTML = `${datas[i]["time"]} 국어 ${datas[i]["type"]}`

    document.querySelectorAll("div.buttons")[0].appendChild(button)
}

let button = document.createElement("button")
button.innerHTML = "2학기 중간고사 과학 지시약"
button.setAttribute("onclick", `location.href = './jisi.html'`)
document.querySelectorAll("div.buttons")[0].appendChild(button)


const toDay = new Date()
const korean = new Date(2021, 10, 8)
const first = new Date(2021, 10, 5)

const d = korean - toDay

console.log(d);

let dDay = ""
if(first.getDate() - toDay.getDate() === 0){
    dDay += `중간고사 D-Day`
}   else if(first.getDate() - toDay.getDate() > 0){
    dDay += `중간고사 D-${first.getDate() - toDay.getDate()},`
}

if(korean.getDate() - toDay.getDate() === 0){
    dDay += `국어 시험 D-Day`
}   else if(korean.getDate() - toDay.getDate() > 0){
    dDay += `국어 시험 D-${korean.getDate() - toDay.getDate()}`
}


document.querySelector(".dDay").innerHTML = dDay