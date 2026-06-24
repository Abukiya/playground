// Function to display something
function myDisplayer(some) {
    console.log(some);
}

function step1() {
  return "A";
}

async function run() {
  let value = await step1();
  myDisplayer(value);
}

run();


function fail() {
  return Promise.reject("Failed");
}

async function run1() {
  try {
    let value = await fail();
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

run1();