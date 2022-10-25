const toys = [{name:"yo-yo",color:"red"},{name:"doll",color:"blue"},{name:"bow",color:"brown"},{name:"barbi",color:"pink"}]

const aToys = toys.filter(toy => toy.name.startsWith("b"))
console.log(aToys)

const isColorBlue = toys.filter(toy => toy.color.includes("blue"))
console.log(isColorBlue)
isColorBlue.length > 0 ? console.log(true):console.log(false);