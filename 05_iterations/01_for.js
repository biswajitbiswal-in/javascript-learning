//for
for (let i = 0; i <= 10; i++) {
    const element = i
    //console.log(element);
    
}


for (let i = 0; i < 10; i++) {
    // console.log(`outer loop value : ${i}`);
    
   for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value : ${j}and inner loop${i}`);
        // console.log(i + '*' + j +'='+i*j );
        
        
    
   }
    
}
let myArr = ["Rahul","Biswajit","Arpit","Batman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

//break and continue
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected ${i}`);
        
        //break
    continue;
    }
   console.log(`value of i is ${i}`);
   
    }
