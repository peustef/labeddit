import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { PostsCard } from './styled';
import { goToPostDetail } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { downvotePost, upvotePost } from '../../services/post';


export default function PostCard({ posts, setPosts }) {
    const history = useHistory()


    const goToDetail = (id) => {
        goToPostDetail(history, id)
    }

    return (
        <>

            {posts.length ? (
                <>{posts.map((post) => {
                    return <PostsCard key={post.id}>
                        <CardHeader
                            title={post.title}
                            subheader={post.username}
                            onClick={() => goToDetail(post.id)}
                        />
                        <CardContent onClick={() => goToDetail(post.id)}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="like" color="primary" onClick={() => upvotePost(post.id, post.userVote, setPosts)} >
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.voteSum}
                            </Typography>
                            <IconButton aria-label="dislike" color="primary" onClick={() => downvotePost(post.id, post.userVote, setPosts)}>
                                <ThumbDownIcon />
                            </IconButton>                        
                            <IconButton aria-label="comment" color="secondary" onClick={() => goToDetail(post.id)}>
                                <CommentIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.commentCount}
                            </Typography>


                        </CardActions>

                    </PostsCard>
                })}</>
            ) : (
                <PostsCard>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Carregando...
                    </Typography>
                </PostsCard>
            )}

        </>
    );
}