document.querySelector("#myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  // Basic validation
  if (!name || isNaN(age)) {
    alert("Please fill out all fields.");
    return;
  }

  // Promise that resolves/rejects based on age
  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution or rejection
  ageCheckPromise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
