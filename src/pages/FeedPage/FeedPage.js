import React, { useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ScreenContainer } from "../../constants/styled";
import PostCard from "./PostCard";
import CreatePostCard from "./CreatePostCard";
import { getPosts } from "../../services/post";

const FeedPage = ({ posts, setPosts }) => {
    useProtectedPage()


    useEffect(() => {
        getPosts(setPosts)
    }, [setPosts])

    return (
        <ScreenContainer>
            <CreatePostCard posts={posts} setPosts={setPosts} />
            <PostCard posts={posts} setPosts={setPosts} />
        </ScreenContainer>
    )
}

export default FeedPage;
