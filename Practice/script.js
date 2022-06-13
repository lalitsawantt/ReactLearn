// let p = new Promise((resolve, reject) => {
//   let num = 1 + 2;
//   // make num equals 2 to resolve, num != 2 to reject
//   if(num == 2){
//     return resolve("Promise Resolved");
//   }else{
//     return reject("Promise Rejected");
//   }
// })

// let consumePromise = () => {
//   p.then((res) => console.log("Resolved message : ", res))
//   .catch((rej) => console.log("Rejected message : ", rej))
// }

// consumePromise();

// let postTwoSeconds = () => {
//   let promise = new Promise((resolve, reject) => {
//   // make num equals 2 to resolve, num != 2 to reject

//     let num = 1 + 2;
//     if(num == 2){
//       setTimeout(() => {
//         resolve("RESOLVED")
//       },2000)
//     }else{
//       setTimeout(() => {
//         reject("REJECTED")
//       }, (2000));
//     }
//   })
//   return promise;
// }


// const getRes = async () => {
//   try{
//   const response = await postTwoSeconds();
//   console.log("RESPONSE IN GETRES : ", response);
//   }catch(error){  
//     console.log("ERROR IN CATCH : ", error)
//   }
// }
// getRes();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, 'food');
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log("VALUES PROMISE ALL", values);
// })




const promiseAll = async () => {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
  ];
  
  const reqs = urls.map((url) => fetch(url));
  return await Promise.all(reqs)
  // method 1
  // .then((res) => {
  //   res.map((r) => console.log("RES : ", res))
  // }).catch((err) => console.log("REJECTING PROMISE : ", err))
}
// method 2
promiseAll().then((res) => {
  console.log("ALL RES : ", res);
}).catch((e) => console.log("ERROR IN CATCH : ", e));


// Random question
// const p = new Promise((resolve) => {
//   console.log(1);
//   setTimeout(() => resolve());
// });

// Promise.resolve().then(() => console.log(2));

// setTimeout(() => {
//   console.log(3); 
// });

// p.then(() => console.log(4));

// setTimeout(() => {
//   console.log(5);
// });

// 2,1,4,3,5
// 1,2,4,3,5