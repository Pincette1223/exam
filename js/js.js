for(var i = 0; i < datas.length; i++){
    button = document.createElement("button")
    button.setAttribute("onclick", `location.href = './problem.html?id=${i}'`)
    button.innerHTML = `${datas[i]["time"]} 국어 ${datas[i]["type"]}`

    document.querySelectorAll("div.buttons")[0].appendChild(button)
}