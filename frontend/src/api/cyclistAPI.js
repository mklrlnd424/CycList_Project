const BASE_URL = "http://localhost:8000/api/"


async function login(credentials) {
  try {
    let init = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(credentials)
    }
    let response = await fetch(BASE_URL + "login", init)
    let data = await response.json()
    return data
  }
  catch(error) {
    console.log(error)
    return {}
  }
}


async function GetPosts(credentials) {
  try {
    let init = {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `JWT ${credentials.token}`
      },
    }
    let response = await fetch(BASE_URL + "posts/", init)
    let data = await response.json()
    return data

  }
  catch(error) {
    console.log(error)
    return {}
  }
}

async function GetUserPosts(credentials) {
  try {
    let init = {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `JWT ${credentials.token}`
      },
    }
    let response = await fetch(BASE_URL + `users/${credentials.userID}`, init)
    let data = await response.json()
    return data.profile.posts

  }
  catch(error) {
    console.log(error)
    return {}
  }
}


async function GetPostById(credentials, postID) {
  try {
    let init = {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `JWT ${credentials.token}`
      },
    }
    let response = await fetch(BASE_URL + `posts/${postID}`, init)
    let data = await response.json()
    return data

  }
  catch(error) {
    console.log(error)
    return {}
  }
}



async function CreatePost(postData, credentials) {
  try {
    let init = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `JWT ${credentials.token}`
      },
      "body": JSON.stringify(postData)
    }
    let response = await fetch(BASE_URL + "posts/", init)
    let data = await response.json()
    return data
  }
  catch(error) {
    console.log(error)
    return {}
  }
}

async function UpdatePost(postData, credentials) {
  try {
    let init = {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `JWT ${credentials.token}`
      },
      "body": JSON.stringify(postData)
    }
    let response = await fetch(BASE_URL + `posts/${postData.id}/`, init)
    let data = await response.json()
    return data
  }
  catch(error) {
    console.log(error)
    return null
  }
}

async function DeletePost(postData, credentials) {
  try {
    let init = {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `JWT ${credentials.token}`
      },
      "body": JSON.stringify(postData)
    }
    let response = await fetch(BASE_URL + `posts/${postData.id}`, init)
    let data = await response.json()
    if (data){
      console.log("delete successful")
    }
  }
  catch(error) {
    console.log(error)
    return {}
  }
}





export default {
  login,
  GetPosts,
  CreatePost,
  GetUserPosts,
  GetPostById,
  UpdatePost,
  DeletePost,
}