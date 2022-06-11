let p = new Promise((resolve, reject) => {
  let num = 1 + 2;
  // make num equals 2 to resolve, num != 2 to reject
  if(num == 2){
    return resolve("Promise Resolved");
  }else{
    return reject("Promise Rejected");
  }
})

let consumePromise = () => {
  p.then((res) => console.log("Resolved message : ", res))
  .catch((rej) => console.log("Rejected message : ", rej))
}

consumePromise();

let postTwoSeconds = () => {
  let promise = new Promise((resolve, reject) => {
  // make num equals 2 to resolve, num != 2 to reject

    let num = 1 + 2;
    if(num == 2){
      setTimeout(() => {
        resolve("RESOLVED")
      },2000)
    }else{
      setTimeout(() => {
        reject("REJECTED")
      }, (2000));
    }
  })
  return promise;
}


const getRes = async () => {
  try{
  const response = await postTwoSeconds();
  console.log("RESPONSE IN GETRES : ", response);
  }catch(error){  
    console.log("ERROR IN CATCH : ", error)
  }
}
getRes();
