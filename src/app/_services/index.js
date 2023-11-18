import axios from "@/app/_lib/axiosConfig";

// get posts per page
export async function getPostsPerPage(page) {
    return await axios.get(`/posts?page=${page}&per_page=20`)
        .catch((error) => {
            return error;
        })
}

// get posts by id
export async function getPost(id) {
    return await axios.get(`/posts/${id}`)
        .catch((error) => {
            return error;
        })
}

// get all users
export async function getAllUsers(page) {
    return await axios.get(`/users&page=${page}&per_page=10`)
        .catch((error) => {
            return error;
        })
}

// get users by id
export async function getUser(user_id) {
    return await axios.get(`/users/${user_id}`)
        .catch((error) => {
            return error;
        })
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
export async function getComments(post_id) {
    return await axios.get(`/posts/${post_id}/comments`)
        .catch((error) => {
            return error;
        })
}

// post comment
export async function addComment(post_id, payload) {
    return await axios.post(`/posts/${post_id}/comments`, payload)
        .catch((error) => {
            return error;
        })
}