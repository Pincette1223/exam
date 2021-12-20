for(var i = 0; i < datas.length; i++){
    let button = document.createElement("button")
    button.setAttribute("onclick", `location.href = './problem.html?id=${i}'`)
    button.innerHTML = `${datas[i]["time"]} 국어 ${datas[i]["type"]}`

    if(i == 5){
        button.classList.add("currentExam")
    }

    document.querySelectorAll("div.buttons")[0].appendChild(button)
}

let comment = document.querySelector(".comment")
const random = Math.random() * 1000 % 100
console.log(random);
if( random < 1){
    comment.innerHTML = "정철 개새끼"
}