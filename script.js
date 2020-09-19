// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// let users = [
//     {
//         userName: 'John',
//         userPoint: 80,
//         userMark: undefined
//     }, 
    
//     {
//         userName: 'Bill',
//         userPoint: 77,
//         userMark: undefined
//     },

//     {
//         userName: 'David',
//         userPoint: 68,
//         userMark: undefined
//     },

//     {
//         userName: 'Ryan',
//         userPoint: 88,
//         userMark: undefined
//     },

//     {
//         userName: 'Nick',
//         userPoint: 95,
//         userMark: undefined
//     },
// ];

// users[users.length] = {
//     groupName: 'Group A1',
//     groupPoint: undefined,
//     groupMark: undefined
// }

// let superior = 'A';
// let aboveAverage = 'B';
// let average = 'C';
// let belowAverage = 'D';
// let fail = 'F';

// let userPresent = 0;
// let commonPoint = 0;

// for(let i = 0; i < users.length; i++) {
//     if(users[i].userPoint) {
//         userPresent++;
//         if(users[i].userPoint >= 90) {
//             users[i].userMark = superior;
//         } else if(users[i].userPoint >= 80) {
//             users[i].userMark = aboveAverage;
//         } else if(users[i].userPoint >= 70) {
//             users[i].userMark = average;
//         } else if(users[i].userPoint >= 60) {
//             users[i].userMark = belowAverage;
//         } else {
//             users[i].userMark = fail;
//         }
//         commonPoint +=users[i].userPoint;
//     }
//     users[users.length - 1].groupPoint = commonPoint / userPresent;
//     if(users[i].groupPoint) {
//         if(users[i].groupPoint >= 90) {
//             users[i].groupMark = superior;
//         } else if(users[i].groupPoint >= 80) {
//             users[i].groupMark = aboveAverage;
//         } else if(users[i].groupPoint >= 70) {
//             users[i].groupMark = average;
//         } else if(users[i].groupPoint >= 60) {
//             users[i].groupMark = belowAverage;
//         } else {
//             users[i].groupMark = fail;
//         }
//     }
// }

// console.log(users);


// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

// let firstMultipleNumber = 3;
// let secondMultipleNumber = 5;
// let sumMultiples = 0;
// for(let i = 0; i < 1000; i++ ) {
//     if(i % firstMultipleNumber === 0 || i % secondMultipleNumber === 0) {
//         sumMultiples += i; 
//     }
// }
// console.log(sumMultiples);

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// let countStarts = 5;
// let stars = '*';
// console.log(stars);
// for(let i = 1; i < countStarts; i++) {
//     stars += ' *';
//     console.log(stars);
// }