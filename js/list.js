const id = get_quers()["id"];
data = datas[id]["d"];
checkOutside(id);
document.querySelector(".tmi").innerText = `전체 ${data.length}개`;

OnO = [];

for (var i = 0; i < data.length; i++) {
  tr = document.createElement("tr");

  td_title = document.createElement("td");
  td_ex = document.createElement("td");
  td_bt = document.createElement("td");

  tr.setAttribute("class", `index-${i}`);

  td_title.innerHTML = data[i].title;
  td_title.setAttribute("class", "title");
  tr.appendChild(td_title);

  td_ex.innerHTML = data[i].ex;
  td_ex.setAttribute("class", "ex");
  tr.appendChild(td_ex);

  td_bt.innerHTML = "체크";
  td_bt.setAttribute("onclick", `check(${i})`);
  td_bt.setAttribute("class", "check");
  tr.appendChild(td_bt);

  OnO.push(0);

  document.querySelector("table").appendChild(tr);
}

function check(index) {
  if (OnO[index] == 0) {
    // document.querySelector(`.index-${index}`).style.color = "red";
    document.querySelector(`.index-${index}`).classList.add("check_on");
    document.querySelector(`.index-${index} .check`).innerHTML = "체크 해제";
    OnO[index]++;
  } else {
    // document.querySelector(`.index-${index}`).style.color = "black";
    document.querySelector(`.index-${index}`).classList.remove("check_on");
    document.querySelector(`.index-${index} .check`).innerHTML = "체크";
    OnO[index]--;
  }
}
