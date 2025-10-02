//Nome: Gustavo Miranda
//Student ID: 101488574

//Question 2

function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'success: resolved after 500ms' });
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ error: 'fail: rejected after 500ms' });
    }, 500);
  });
}

(async () => {
  console.log('-------------------------------- Question 2 ---------------------------------');
  console.log(" ");

  try {
    const res = await resolvedPromise();
    console.log("Resolved Output :", JSON.stringify(res));
  } catch (err) {
    console.error("Resolved Error  :", JSON.stringify(err));
  }

  try {
    const rej = await rejectedPromise();
    console.log("Rejected Output :", JSON.stringify(rej));
  } catch (err) {
    console.error("Rejected Error  :", JSON.stringify(err));
  }

  console.log(" ");
  console.log('-------------------------------------------------------------------------------');
})();
