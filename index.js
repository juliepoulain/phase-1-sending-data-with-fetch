// Add your code here
const submitData = (name, email) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email }),
  })
    .then((res) => res.json())
    .then((user) => {
      const id = document.createElement("p");
      id.textContent = user.id;
      document.body.append(id);
    })
    .catch((e) => {
      const errorMessage = document.createElement("p");
      errorMessage.style.color = "red";
      errorMessage.textContent = e.message;
      document.body.append(errorMessage);
    });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitData(e.target.name.value, e.target.email.value);
});
