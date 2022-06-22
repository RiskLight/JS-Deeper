// // // 7. Дан массив, выведите его элементы последовательно на экран в обратном порядке
// // let arr = ['elem1', 'elem2', 'elem3'];
// // arr.reverse();
// // for (let rev of arr){
// //     console.log(rev);
// // }
// // 8 Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.
// //
// // let str = 'ooooooooooooo'
// // let a = 0;
// // for(let item of str) {
// //     if(item === 'о') {
// //         a++;
// //     }
// // }
// //
// // alert(a);
// //
// // 9 function func(name = 'Аноним') {
// //     alert('Привет, '+ name );
// // }
// //
// // let name = 'Петя';
// // func();
// //
// // 10 let array = {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}
// //
// // function getParams({id, color = 'blue', border='1px dotted red', font='15px Tahoma'}) {
// //     let e = document.getElementById(id);
// //     e.style.cssText = 'color:' + color + '; border:' + border + '; font:' + font;
// // }
// //
// // getParams(array);
//
//
// //11 let newArr = ['element 1', 'element 2', 'element 3'];
// // let [elem1, elem2, ...elem3] = newArr;
// // console.log(elem1);
// // console.log(elem2);
// // console.log(elem3);
//
// //12
// // let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
// // newArr.reverse();
// // let [elem1, elem2] = newArr;
// // console.log(elem1);
// // console.log(elem2)
//
// //4
// // let newArr = ['первый', 'второй'];
// // let [, elem2 = 'bbb', elem3 = 'eee'] = newArr;
// // console.log(elem2);
// // console.log(elem3);
//
// let user = {
//     name: 'Пётр',
//     surname: 'Петров',
//     age: '20 лет'
// };
//
// let{name, surname, age} = user;
// console.log(`${name} ${surname} ${age}`);