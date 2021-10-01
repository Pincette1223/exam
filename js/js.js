for(var i = 0; i < datas.length; i++){
    button = document.createElement("button")
    button.setAttribute("onclick", `location.href = './problem.html?id=${i}'`)
    button.innerHTML = `${datas[i]["time"]} 국어 ${datas[i]["type"]}`

    document.querySelectorAll("div.buttons")[0].appendChild(button)
}

const toDay = new Date()
const korean = new Date(2021, 10, 8)
const first = new Date(2021, 10, 5)

const d = korean - toDay

console.log(d);
document.querySelector(".dDay").innerHTML = `중간고사 D-${first.getDate() - toDay.getDate() === 0 ? 'Day' : first.getDate() - toDay.getDate()}, 국어 시험 D-${korean.getDate() - toDay.getDate() === 0 ? 'Day' : korean.getDate() - toDay.getDate()}`