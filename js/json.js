function shuffle(arr) {
    // 배열을 섞는 함수
    for(let i = 0; i < 3; i++){
        arr = arr.sort(() => Math.random() - 0.5)
    }

    return arr
}

const MEMBERS = [
    "A", "B", "C", "D", "E", "F", "G"
]
let result = []
const groupCount = 2;

function group(){
    const members = shuffle(MEMBERS)
    let result = []
    console.log(members);


    for(let i = 0; i < members.length; i += groupCount){
        let group = []
        for(let j = groupCount; j > 0; j--){
            group.push(members[j])
        }

        result.push(group)
    }

    return result
}

console.log(group());
