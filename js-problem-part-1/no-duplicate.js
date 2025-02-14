const birnayKhur = ["sajib","rakib","sakib","sajib","rakib","abid"]


function noDuplicate(array){
    const unique = []
    for(const item of array){
            if(unique.includes(item) === false){
                unique.push(item)
            }
    }
    return unique
}

const unickArray = noDuplicate(birnayKhur)
console.log(unickArray)