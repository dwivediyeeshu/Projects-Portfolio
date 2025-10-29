function fetchUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ name: "yeeshu", url: "https://yeeshu.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data....");
    const data = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User Data: ", data);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
