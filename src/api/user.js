const COHORT_NAME = "2301-ftb-et-web-am";
const BASE_URL = "https://strangers-things.herokuapp.com/api/${COHORT_NAME}";

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("Registering user result: ", result);
    return result;
  } catch (error) {
    console.log("Error registering user: ", error);
  }
}
