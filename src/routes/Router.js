import React from "react";
import { Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ setRightButton, posts, setPosts }) => {
    return (


        <Switch>
            <Route exact path="/feed">
                <FeedPage posts={posts} setPosts={setPosts} />
            </Route>
            <Route exact path="/">
                <LoginPage setRightButton={setRightButton} />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage setRightButton={setRightButton} />
            </Route>
            <Route exact path="/detalhe/:id">
                <PostDetailPage posts={posts} setPosts={setPosts} />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>

    )
}

export default Router;
