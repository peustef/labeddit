import axios from "axios";
import { BASE_URL } from "../constants/urls";


const generateHeader = () => {
    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    return header
}


export const getPosts = (setPosts) => {
    axios.get(`${BASE_URL}/posts`, generateHeader())
        .then((res) => {
            setPosts(res.data)

        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const createPost = (body, cleanFields, setPosts) => {
    axios.post(`${BASE_URL}/posts`, body, generateHeader())
        .then((res) => {
            alert(res.data)
            cleanFields()
            getPosts(setPosts)

        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const getComments = (id, setComments) => {
    axios.get(`${BASE_URL}/posts/${id}/comments`, generateHeader())
        .then((res) => {
            setComments(res.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const createComment = (body, cleanFields, id, setComments) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, generateHeader())
        .then(() => {
            cleanFields()
            getComments(id, setComments)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}



export const upvotePost = (id, userVote, setPosts) => {
    if (userVote === null) {

        axios.post(`${BASE_URL}/posts/${id}/votes`, { direction: 1 }, generateHeader())
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === 1 || userVote === -1) {
        axios.delete(`${BASE_URL}/posts/${id}/votes`, generateHeader())
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}

export const downvotePost = (id, userVote, setPosts) => {
    if (userVote === null) {

        axios.put(`${BASE_URL}/posts/${id}/votes`, { direction: -1 }, generateHeader())
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === -1 || userVote === 1) {
        axios.delete(`${BASE_URL}/posts/${id}/votes`, generateHeader())
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}


export const upvoteComment = (commentId, userVote, comments) => {
    if (userVote === null) {

        axios.post(`${BASE_URL}/comments/${commentId}/votes`, { direction: 1 }, generateHeader())
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === 1 || userVote === -1) {
        axios.delete(`${BASE_URL}/comments/${commentId}/votes`, generateHeader())
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}

export const downvoteComment = (commentId, userVote, comments) => {
    if (userVote === null) {

        axios.put(`${BASE_URL}/comments/${commentId}/votes`, { direction: -1 }, generateHeader())
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === -1 || userVote === 1) {
        axios.delete(`${BASE_URL}/comments/${commentId}/votes`, generateHeader())
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}