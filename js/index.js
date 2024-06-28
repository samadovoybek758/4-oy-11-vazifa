// 1-masala
// let str = "fdahanha";
// function findA(str) {
//     let res = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a") {
//             res++
//         }
//     }
//     return res
// }
// console.log(findA(str));


// 2-masala
// function buildNewMassive(n) {
//     let res =[];
//     for (let i = 2; i < n; i+=2) {
//        res.push(i)
//     }
//     return res
// }
// console.log(buildNewMassive(7));


// 3-masala
// function delet(str) {
//     let str2 ='';
//     for (const a of str) {
//         if (a != " ") {
//             str2 += a
//         }
//     }
//     return str2
// }
// console.log(delet("sdf    asdfa    afd "));


// 4-masala
// function delet(str) {
//     let res ='';
//     for (let i = 1; i < str.length; i++) {
//        res +=  str[i]
//     }
//     return res
// }
// console.log(delet("salom"));


// 5-masala
// function minElement(numbers) {
//     let min =numbers[0];
//     for (let i = 2; i < numbers.length; i++) {
//        if (numbers[i] < min) {
//             min = numbers[i]
//        }
//     }
//     return numbers.indexOf(min)
// }
// console.log(minElement([3,4,5,6,2,3,4]));



// 6-masala
// function changeMin(str) {
//     return str.toLowerCase()
// }
// console.log(changeMin("SALOM"));


// 7-masala
// let arr = [1,9,2,5,8,3,7]
// function sumMassive(arr) {
//     let res =0;
//     for (let i = 0; i < arr.length; i++) {
//         res+= arr[i]
//     }
//     return res
// }
// console.log(sumMassive(arr));



// 8-masala
// let str = "bugun bayrambbb"
// function findB(str) {
//     let res =0;
//     for (let i = 0; i < str.length; i++) {
//        if (str[i] == 'b') {
//           res++
//        }
//     }
//     return res
// }
// console.log(findB(str));


// 9-masala
// function buildNewMassive(n) {
//     let res =[];
//     for (let i = 1; i <= n; i++) {
//        res.push(i**2)
//     }
//     return res
// }
// console.log(buildNewMassive(10));



// 10-masala
// let str = "salom hammaga";
// function delet(str) {
//     let res = str.split('')
//     res.pop();
//     let str2 = res.join('')


//     return str2
// }
// console.log(delet(str));


// 11-masala
// let arr = [3,-4,5,6,0,-5,-1];
// function delet(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > -1) {
//             res.push(arr[i])
//         }  
//     }
//     return res
// }
// console.log(delet(arr));


// 12-masala
// let str = '2 true hello 3 5565465 world';
// function notNumber(str) {
//     let str2 = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt([i]) < 48 || str.charCodeAt([i]) > 57 ) {
//             str2 += str[i];
//         }
//     }
//     return str2
// }
// console.log(notNumber(str));


// 13-masala
// let str = "salom dunyo"
// function change(str) {
//     let res = str.split("")
//     let result =[]
//     for (let i = 0; i < res.length; i++) {
//         result.unshift(res[i])
//     }
//     return result.join("")
// }
// console.log(change(str));



// 14-masala
// let arr = [1,4,6,7,8,3]
// function twice(are) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//          res.push(arr[i]*2)
        
//     }
//     return res
// }
// console.log(twice(arr));


// 15-masala
// let str = 'salom';
// function change(str) {
//     let first = str.charAt(0);
//     let end = str.charAt(str.length-1);
//     let newStr = end + str.slice(1,str.length -1) + first
//     return newStr
// }
// console.log(change(str));



// 16-masala
// let arr = [3,5,7,12,8,4,2,6]
// function juftNums(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2==0) {
//             res = res+arr[i]
//         }}
//     return res
// }
// console.log(juftNums(arr));



// 17-masala
// function changeMax(str) {
//     return str.toUpperCase()
// }
// console.log(changeMax("salom dfgadfa FGH"));




// 18-masala
// let cars = ["malibu","gentra","kia","tahoe","anor"];
// function sortMassive(cars) {
//     return cars.sort()
// }
// console.log(sortMassive(cars));




// 19-masala
// let str = 'hello world';
// function change(str) {
//     let res = str.split(' ')
//     res = res.map(function (value) {
//         return value[0].toUpperCase() + value.slice(1);
//     })
//     return res.join(' ')
// }
// console.log(change(str));


// 20-masala
// let arr = [2,6,5,7,9,4,3,2];
// function delet(rr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !=1) {
//             res.push(arr[i])
//         }
        
//     }
//     return res
// }
// console.log(delet(arr));



// qo'shimcha
// 1-masala Berilgan stringda qancha belgi (harf, raqam, yoki belgilar) bo'ldigini sanash.
// let arr = ['salom',4,6,7,true,'world'];
// function sumsMassive(arr) {
//     let res =0;
//     for (let i = 0; i < arr.length; i++) {
//         res++ 
//     }
//     return res
// }
// console.log(sumsMassive(arr));


// 2-masala  Berilgan massivedagi juft sonlarni kvadratlari chiqarilsin
// let arr = [2,4,6,7,5,4];
// function juftNums(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2==0) {
//             res.push(arr[i]**2)
//         }else{
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(juftNums(arr));


// 3-masala   berilgan sting berilgan suz bilan boshlanganmi tekshiring
// let str = "ko'zoynak"
// function started(str,element) {
//     let str2 = str.startsWith(element)
//     return str2
// }
// console.log(started(str,"sdf'"));


// 4-masala   masivning berilgan joyidan berilgancha eement uchirib berilgan elemntni qushish
// let arr = [2,64,6,7,7,56];
// function metod(arr,element1,element2,element3) {
//     arr.splice(element1,element2,element3)

//     return arr
// }
// console.log(metod(arr,2,3,"salom"));


// 5-masala  berilgan stringdan 4-indexdagi 3ta elementni uchiradigan funksiya yarating
let str = "crocodile"
function delet(str) {
    let res =str.split('')
    res.splice(2,3)
    return res.join("")
}
console.log(delet(str));
