//String 

const name = "Biswajit"
const repo = 10

console.log(name + " has " + repo + " repo")//concatenation

//string interpolation using template literals
console.log(`my name is ${name} and i have ${repo} repo`);//better way to concatenate string using template literals

const gameName = new String('GTA')//new String() is not recommended to use because it creates a string object instead of a string primitive

console.log(typeof gameName)//object

console.log(gameName[0])//G
console.log(gameName.__proto__)//{} this is the prototype of the string object which contains all the methods and properties of the string object
console.log(gameName.length)//3
console.log(gameName.toLowerCase())//gta
console.log(gameName.toUpperCase())//GTA
console.log(gameName.indexOf('T'))//1
console.log(gameName.charAt(1))//T


const newString = gameName.substring(0,2)//substring(startIndex,endIndex) it will return the string from startIndex to endIndex-1
console.log(newString)//GT

const anotherString = gameName.slice(-2,2)//slice(startIndex,endIndex) it will return the string from startIndex to endIndex-1 but it can also take negative index which means it will start from the end of the string
console.log(anotherString)//T


const HerName = "  IPSITA  "
console.log(HerName)
console.log(HerName.trim())//trim() it will remove the white spaces from the start and end of the string

const myName = "Biswajit"
console.log(myName)
console.log(myName.replace("Biswajit","Rahul"))//replace(oldValue,newValue) it will replace the oldValue with newValue in the string

const url = "https://rahul.com/rahul%20biswal"
console.log(url.replace("%20","-"))


console.log(url.includes("rahul"))


const use ="biswa-rahul"
console.log(use.split("-"))
