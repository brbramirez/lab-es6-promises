// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(error));


// ...

// Iteration 3 using async/await
async function makeBroccoli(){
//Loop solution
// try{
//   for(let i=0;i<broccoli.length;i++){
//     let step=await obtainInstruction('broccoli',i);
//   document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//   }

  try {
    let step0 = await obtainInstruction('broccoli',0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    let step1 = await obtainInstruction('broccoli',1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    let step2 = await obtainInstruction('broccoli',2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    let step3 = await obtainInstruction('broccoli',3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    let step4 = await obtainInstruction('broccoli',4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    let step5 = await obtainInstruction('broccoli',5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  }

  catch(error) {
    console.log(error);
  }
  finally{
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}
makeBroccoli();
// ...

// Bonus 2 - Promise all
const b1 = obtainInstruction('brusselsSprouts',0);
const b2 = obtainInstruction('brusselsSprouts',1);
const b3 = obtainInstruction('brusselsSprouts',2);
const b4 = obtainInstruction('brusselsSprouts',3);
const b5 = obtainInstruction('brusselsSprouts',4);
const b6 = obtainInstruction('brusselsSprouts',5);
const b7 = obtainInstruction('brusselsSprouts',6);

Promise.all( [b1, b2, b3, b4, b5, b6, b7] )
  .then((values) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[0]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[0]}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[2]}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[3]}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[4]}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[5]}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[6]}</li>`;

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;

    })
;

// ...