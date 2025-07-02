document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("emailForm");
  if (!form) {
    console.error("Form with id 'emailForm' not found.");
    return;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    if (response.ok) {
      alert("Submitted successfully!");
      form.reset();
    } else {
      alert("Submission failed!");
    }
  });
});
