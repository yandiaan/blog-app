import axios from "@/app/_lib/axiosConfig";

// get posts per page
export async function getPostsPerPage(page) {
    try {
      let posts = [];
      const reqPosts = await axios.get(`/posts?page=${page}&per_page=10`);
      const dataPosts = await reqPosts.data;
      
      const getUserPromises = dataPosts.map(
        async ({ id, user_id, title, body }) => {
          const reqComments = await getComments(id);
          const user = await getUser(user_id);
          posts.push({
            id,
            user_id,
            title,
            body,
            author: user.name,
            commentCount: reqComments?.length,
          });
        }
      );
  
      await Promise.all(getUserPromises);
  
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

// get posts by id
export async function getPostById(id) {
    try {
      const response = await axios.get(`/posts/${id}`);
      
      const posts = response.data;
  
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

// get all users
export async function getAllUsers(page) {
    return await axios.get(`/users&page=${page}&per_page=10`)
        .catch((error) => {
            return error;
        })
}

// get users by id
export async function getUser(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    const user = response.data;
    return user;
  } catch (error) {
    if (error.code === "ERR_BAD_REQUEST") {
      return {
        name: "Anonymous User",
      };  
    }
  }
}

// post new user 
export async function addUser(payload) {
    return await axios.post(`/users`, payload)
        .catch((error) => {
            return error;
        })
}

// update user
export async function updateUser(id_user, payload) {
    return await axios.patch(`/users/${id_user}`, payload)
        .catch((error) => {
            return error;
        })
}

// delete user
export async function deleteUser(user_id) {
    return await axios.delete(`/users/${user_id}`)
        .catch((error) => {
            return error;
        })
}

// search user by name
export async function searchUser(user_name) {
    return await axios.get(`/users?name=${user_name}`)
        .catch((error) => {
            return error;
        })
}

// get comments post
export async function getComments(id) {
    try {
      const response = await axios.get(`/posts/${id}/comments`);
      const comments = response.data;
      return comments;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

// post comment
export async function addComment(post_id, payload) {
    return await axios.post(`/posts/${post_id}/comments`, payload)
        .catch((error) => {
            return error;
        })
}