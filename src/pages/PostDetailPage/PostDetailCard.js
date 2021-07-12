import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { PostDetailsCard } from './styled';
import { downvotePost, upvotePost } from '../../services/post';



export default function PostDetailCard({ posts, params, setPosts }) {

    const post = posts.length && posts.filter((post) => {
        if (post.id === params.id) {
            return true
        } else {
            return false
        }
    })

    return (
        <>
            {post ? (
                <>
                    <PostDetailsCard key={post[0].id}>
                        <CardHeader
                            title={post[0].title}
                            subheader={post[0].username}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post[0].body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="like" color="primary" onClick={() => upvotePost(post[0].id, post[0].userVote, setPosts)}>
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post[0].voteSum}
                            </Typography>
                            <IconButton aria-label="dislike" color="primary" onClick={() => downvotePost(post[0].id, post[0].userVote, setPosts)}>
                                <ThumbDownIcon />
                            </IconButton>
                            <IconButton aria-label="comment" color="secondary">
                                <CommentIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post[0].commentCount}
                            </Typography>


                        </CardActions>

                    </PostDetailsCard>
                </>
            ) : (
                <PostDetailsCard>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Carregando...
                    </Typography>
                </PostDetailsCard>
            )}





        </>
    );
}