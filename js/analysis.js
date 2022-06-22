function createElement(tag, classList = [], text = "") {
  let element = document.createElement(tag);
  element.innerText = text;

  classList.forEach((class_) => {
    element.classList.add(class_);
  });

  return element;
}

function getRandomColor() {
  var RGB_1 = Math.floor(Math.random() * (255 + 1));
  var RGB_2 = Math.floor(Math.random() * (255 + 1));
  var RGB_3 = Math.floor(Math.random() * (255 + 1));

  return (strRGBA = "rgba(" + RGB_1 + "," + RGB_2 + "," + RGB_3 + ",0.3)");
}

const id = get_quers()["id"];
checkOutside(id);

const wrongList = JSON.parse(localStorage.getItem(`wrongList_${id}`));

if (wrongList == null) {
  alert("아직 오답이 없습니다. 문제를 더 풀어보세요!");
  location.href = `./problem.html?id=${id}`;
}

const wrongListValues = Object.values(wrongList);

// console.log(wrongList);

let colors = [];

for (const i in wrongList) {
  colors.push(getRandomColor());
}

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: Object.keys(wrongList),
    datasets: [
      {
        label: "오답 횟수",
        backgroundColor: colors,
        data: wrongListValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "오답 횟수",
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 14,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: Math.min(...wrongListValues) - 1,
            max: Math.max(...wrongListValues),
            stepSize: 1,
            fontSize: 20,
          },
        },
      ],
    },
  },
});
