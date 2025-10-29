function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetching Post Data")
    }, 2000);
  })
}
function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetching Comment Data");
    }, 3000);
  })
}

async function getBlogData() {
  try {
    console.log("Fetching Blog Data");

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
    
    
    console.log("Fetched Successfully");
    
  } catch (error) {
    console.error("Fetching Data Failed. Please Try Again");
  }
}

getBlogData();
