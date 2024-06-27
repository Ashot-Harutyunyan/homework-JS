//գրել ֆուկցիա, որը պարզում է
//տրված բնական թվի թվանշանների գումարը զույգ է թե կենտ ։

function evenOrOdd(n){
    let count = 0
    while(n > 0){
        let a = n % 10
        n = Math.floor(n - a) / 10
        count += a
    }
    if(count % 2 === 0){
      return 'even'  
    }else {
        return 'odd'
    }
    
}


console.log(evenOrOdd(202))
console.log(evenOrOdd(203))

console.log('-----------------------------------------------------')

//Գտնել ֆունկցիա որը ստանում է, որպես պարամետր իրարից պրաբելով առանձնացված ստրինգ
// և մասիվ, որի էլէմենտները ստրինգներ են: Գտնել մասիվում առկա բառերը ստրնգում
//և փոխարինել այդ բառիը սինվոլների քանակի ասղանիշներով։

let str = 'Lorem ipsum dolor sit amet quod officiis quam maxime fuga'
let arr = ['sint', 'ipsum', 'elit', 'incidunt', 'quisquam', 'sit', 'delectus']

function loop(arg){
    let star = ''
    for(let j = 0; j < arg; j++){
        star += '*'
    }
    return star
}

function findWords(str, arr){
    let newArr = [] 
    let newStr = str.split(' ')

    for(let i = 0; i < arr.length; i++){
        if(newStr.includes(arr[i])){
            newArr.push(loop(arr[i].split('').length))
        }else {
            newArr.push(arr[i])
        }
    }
   
    return newArr.join(' ')
}


console.log(findWords(str, arr))

console.log('-----------------------------------------------------')

// Խնդիր 14: Պատահական ուղղություն
// Գեներացնել պատահական ուղղություն (N, NE, E, SE, S, SW, W, NW):

function randomDirection() {
    const arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
  
console.log(randomDirection())

console.log('-----------------------------------------------------')

// Խնդիր 13: Պատահական հեռախոսահամար
// Գեներացնել պատահական հեռախոսահամար ձևաչափով XXX-XXX-XXX:

function randomPhoneNumber(){
    let arr = ['091', '096', '099', '043', '077', '093', '094', '098', '049', '055', '041']
    let phoneNumber = []
    phoneNumber.push(arr[Math.floor(Math.random() * arr.length)])
    for(let i = 0; i < 2; i++){
        const diff = 999 - 100 + 1
        let number = Math.ceil(Math.random() * diff + 100)
        number = '-' + number 
        phoneNumber.push(number)
    }
    return phoneNumber.join('')
}

console.log(randomPhoneNumber())

console.log('-----------------------------------------------------')

// Խնդիր 16: Պատահական Hexadecimal Գույնի Գեներացիա
// Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք:

function hexadecimalColor(){
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
}

function randomColor(){
    let red = hexadecimalColor()
    let green = hexadecimalColor()
    let blue = hexadecimalColor()

    return `#${red}${green}${blue}`
}
console.log(randomColor())

console.log('-----------------------------------------------------')

// Խնդիր 19: Պատահական ժամանակ գեներացիա (HH:MM)
// Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:

function randomTime(){
    const diff = 12 - 24 + 1
    let hour = Math.ceil(Math.random() * diff + 12).toString().padStart(2, '0')
    let minute = Math.ceil(Math.random() * 60).toString().padStart(2, '0')

    return `${hour}:${minute}`
}

console.log(randomTime())