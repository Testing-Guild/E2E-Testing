const usernameInput = document.querySelector<HTMLInputElement>(".username");
const passwordInput = document.querySelector<HTMLInputElement>(".password");
const button = document.querySelector<HTMLButtonElement>(".btn_submit");
async function postData(
  url: string,
  data: object
): Promise<{ success: boolean; message: string }> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
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
  const response = await postData("/signup", { username, password });
  
  if (response.success) {
    alert("User Created Successfully!");
  } else {
    alert(response.message);
  }
});
