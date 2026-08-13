 //Object destructuring

 const course = {
    courseName : "Web developement with chai aur code",
    price : 999,
    courseInstructor: "Biswajit"
 }
// course.courseInstructor
const {courseInstructor : instructor} = course
console.log(instructor);

// {
//     name : "biswajit",
//     price:100
// }

[
    {},
    {},
    {}
]
