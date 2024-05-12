const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const button = document.querySelector(".btn_submit");
async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("response:", response);
  return await response.json();
}

button?.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = usernameInput?.value.trim();
  const password = passwordInput?.value.trim();
  if (!username || !password) {
    alert("Please Enter Both Username or Password");
    return;
  }
  const response = await postData("http://localhost:3000/signup", {
    username: username,
    password: password,
  });
  if (response.success) {
    alert("User Created Successfully!");
  } else {
    alert(response.message);
  }
});
