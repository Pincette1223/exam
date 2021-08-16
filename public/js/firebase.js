function getDataDay(id){
    let result = []
    db.collection("data").doc(id).collection("d").get().then((documents) => {
        documents.forEach(document => {
            result.push(document.data())
        });
    })

    return result;
}

// var firebaseConfig = {
//     apiKey: "AIzaSyBor-jfaBQ49zL_Bp-lUz660-RHQ0PsfOg",
//     authDomain: "exam-6c47b.firebaseapp.com",
//     projectId: "exam-6c47b",
//     storageBucket: "exam-6c47b.appspot.com",
//     messagingSenderId: "777164885894",
//     appId: "1:777164885894:web:3fa0950b6338f6979e6607",
//     measurementId: "G-2NXSWDZX6S"
// };