function getDataDay(id){
    let result = []
    db.collection("data").doc(id).collection("d").get().then((documents) => {
        documents.forEach(document => {
            result.push(document.data())
        });
    })

    return result;
}