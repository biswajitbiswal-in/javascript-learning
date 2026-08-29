const coding = ["java","python","ruby","react","express"]

// coding.forEach(function (i){
//     console.log(i);
    
// })


// coding.forEach( (i) =>{
//     console.log(i);
    
// })


function printMe(item){
    console.log(item);
    
}
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(index,"-",item,"=>",arr);
    
})


let arr = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
      {
        languageName:"java",
        languageFileName:"java"
    },
      {
        languageName:"python",
        languageFileName:"py"
    },
]
arr.forEach((item)=>{
    console.log(item.languageFileName);
    
})
