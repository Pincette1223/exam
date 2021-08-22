function getDataDay(id){
    let result = []
    const db = firebase.firestore()
    db.collection("data").doc(String(id)).collection("d").get().then((documents) => {
        documents.forEach(document => {
            result.push(document.data())
        });
    })
    return result;
}