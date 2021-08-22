db.collection("data").get().then((documents) => {
    documents.forEach(doc => {
        let button = document.createElement("button")
        button.innerText = `${doc.data()["time"]} 국어 ${doc.data()["type"]}`
        button.addEventListener("click", () =>{location.href = './problem.html?id=' + doc.id})

        document.querySelector("div.buttons").appendChild(button)
    });
})

console.log(location.pathname);