import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { CommentsCard, LoadingCommentsCard } from './styled';
import { downvoteComment, upvoteComment } from '../../services/post';



export default function PostCommentsCard({ comments, setComments, getComments, id }) {


    return (
        <>
            {comments ? (
                <>{comments.map((comment) => {
                    return <CommentsCard key={comment.id}>
                        <CardHeader
                            subheader={`${comment.username}:`}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {comment.body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="like" color="primary" onClick={() => upvoteComment(comment.id, comment.userVote, getComments)}>
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {comment.voteSum}
                            </Typography>
                            <IconButton aria-label="dislike" color="primary" onClick={() => downvoteComment(comment.id, comment.userVote, getComments)} >
                                <ThumbDownIcon />
                            </IconButton>

                        </CardActions>

                    </CommentsCard>
                })}</>
            ) : (
                <LoadingCommentsCard>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Carregando comentários...
                    </Typography>
                </LoadingCommentsCard>
            )}

        </>
    );
}