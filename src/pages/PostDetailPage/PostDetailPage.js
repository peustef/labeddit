import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import PostCommentsCard from "./PostCommentsCard";
import { ScreenContainer } from "../../constants/styled";
import { getPosts } from "../../services/post";
import PostDetailCard from "./PostDetailCard";
import CreateComment from "./CreateComment";


const PostDetailPage = ({ posts, setPosts }) => {
    useProtectedPage()
    const [comments, setComments] = useState()

    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    const params = useParams()



    useEffect(() => {
        getPosts(setPosts)
    }, [setPosts])

    const getComments = () => {
        axios.get(`${BASE_URL}/posts/${params.id}/comments`, header)
            .then((res) => {
                setComments(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <ScreenContainer>
            <PostDetailCard posts={posts} params={params} setPosts={setPosts} />
            <CreateComment comments={comments} setComments={setComments} getComments={getComments} id={params.id} />
            <PostCommentsCard comments={comments} getComments={getComments} id={params.id} />

        </ScreenContainer>
    )
}

export default PostDetailPage;
