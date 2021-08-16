// function shuffle(a) {
//     // 배열을 섞어주는 함수
//     var j, x, i;
//     for (i = a.length; i; i -= 1) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }

//     return a;
// }


// // document.body.onabort = addElement("s");

// // function addElement(text) {
// //     var newDiv = document.createElement("div");

// //     var newContent = document.createTextNode(text);
// //     newDiv.appendChild(newContent);

// //     var currenDiv = document.getElementById("div1");
// //     document.body.insertBefore(newDiv, currenDiv);
// // }



// var ex = document.querySelector("p.ex");
// var title = document.querySelectorAll("h2")[0];
// var problems = document.querySelector(".problems");
// var problem_buttons = document.querySelectorAll(".problem_button");


// function setting(){
//     data = shuffle(data);
//     // title.innerHTML = data[0].title;
//     ex.innerHTML = data[0].ex;

//     problem_list = data.slice(0, 5);
//     problem_list = shuffle(problem_list);


//     for(var i = 0; i < 5; i++){
//         // problems = document.createElement("div");
//         // problems.setAttribute("class", "problems");
//         newDIV = document.createElement("span");
        
//         newDIV.innerHTML = `${problem_list[i].title}`;
//         newDIV.setAttribute("class", "problem_button");
//         newDIV.setAttribute("onclick", `check_answer(${i})`)
//         if (data[0].title == problem_list[i].title){
//             // newDIV.classList.add("answer");
//             answer_index = i;
//         }   else{
//             // newDIV.classList.add("w_answer");
//         }
        

//         problems.appendChild(newDIV);
//         // document.querySelector("body").appendChild(problems);
//     }
// }

// function check_answer(index){
//     if (index == answer_index){
//         alert("정답");

//         for (var i = 0; i < problem_list.length; i++){
//             problems.removeChild(problems.childNodes[0]);
//         }

//         setting();
//     }   else{
//         alert("오답");
//         document.querySelector(`.problem_button:nth-child(${index + 1})`).classList.add("t");
//     }
// }


// setting()


var mode = 0; // 0이면 문제가 설명으로, 1이면 문제가 한자 성어로

var con = 0;

function shuffle(a) {
    // 배열을 섞어주는 함수
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}


// document.body.onabort = addElement("s");

// function addElement(text) {
//     var newDiv = document.createElement("div");

//     var newContent = document.createTextNode(text);
//     newDiv.appendChild(newContent);

//     var currenDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currenDiv);
// }



var ex = document.querySelector("p.ex");
// var title = document.querySelectorAll("h2")[0];
var problems = document.querySelector(".problems");
var problem_buttons = document.querySelectorAll(".problem_button");


function setting(){
    document.querySelectorAll(".num")[0].innerHTML = con;
    // console.log(con);

    data = datas[get_quers()["id"]]["d"]
    data = shuffle(data);
    // title.innerHTML = data[0].title;
    if (mode == 0){
        ex.innerHTML = data[0].ex;
        ex.style.fontSize = "1.5em";
    }   else{
        ex.innerHTML = data[0].title;
        ex.style.fontSize = "2.5em";

    }
    
    problem_list = data.slice(0, 5);
    problem_list = shuffle(problem_list);



    for (var i = 0; i < problem_list.length; i++){ // 정답 버튼을 모두 지운다.
        problems.removeChild(problems.childNodes[0]);
    }

    for(var i = 0; i < 5; i++){ // 답을 선택하는 1~5번 버튼을 만든다.
        // problems = document.createElement("div");
        // problems.setAttribute("class", "problems");
        newDIV = document.createElement("span");

        if (mode == 0){
            var  text = problem_list[i].title;
        }   else{
            var  text = problem_list[i].ex;
        }
        
        newDIV.innerHTML = text;
        newDIV.setAttribute("class", `problem_button pb-mode${mode}`);
        newDIV.setAttribute("onclick", `check_answer(${i})`)
        if (data[0].title == problem_list[i].title){
            // newDIV.classList.add("answer");
            answer_index = i;
        }   else{
            // newDIV.classList.add("w_answer");
        }
        

        problems.appendChild(newDIV);
        // document.querySelector("body").appendChild(problems);
    }
}

function check_answer(index){
    if (index == answer_index){
        alert("정답");
        
        con++;

        if(con == 2){
            // document.querySelectorAll(".con")[0].style.display = "inline";
        }
        setting();
    }   else{
        if (mode == 0){
            var a = `"${problem_list[index].ex}"라는 뜻 입니다.`;
        } else{
            var a = `"${problem_list[index].title}"에 대한 설명 입니다.`;
        }
        alert(`오답/${a}`);
        con = 0;
        // document.querySelectorAll(".num")[0].innerHTML = con;
        // document.querySelectorAll(".con")[0].style.display = "none";
        document.querySelector(`.problem_button:nth-child(${index + 1})`).classList.add("t");
    }
}

var mode_button = document.querySelector("button.mode-button");
mode_button.onclick = mode_change;

function mode_change(){
    if(mode == 0){
        mode_button.style.backgroundColor = "#6C6CFE";
        mode_button.innerHTML = "모드2";
        document.querySelector("p.mode-ex").innerHTML = "어휘가 주어지고 그 어휘에 맞는 설명을 고르는 문제 입니다.";
    }   else{
        mode_button.style.backgroundColor = "#f8585b";
        mode_button.innerHTML = "모드1";
        document.querySelector("p.mode-ex").innerHTML = "어휘에 대한 설명이 주어지고 설명에 맞는 어휘를 고르는 문제 입니다.";

    }
    mode = (mode + 1) % 2


    setting()
}

setting()