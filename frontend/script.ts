const usernameInput = document.querySelector<HTMLInputElement>(
  '[data-name="username"]'
);
const passwordInput = document.querySelector<HTMLInputElement>(
  '[data-name="password"]'
);

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
