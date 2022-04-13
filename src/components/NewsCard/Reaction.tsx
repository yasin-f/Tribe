
import {Post} from "@tribeplatform/gql-client/types";
import {useAddReaction, useRemoveReaction} from "@tribeplatform/react-sdk/hooks";

interface ReactionProps{
    icon : string
    text : string,
    post:Post
  }

export const Reaction = (props:ReactionProps) => {

    const {post, text, icon} = props
    const {mutate: upvote} = useAddReaction()
    const {mutate: downvote} = useRemoveReaction()
    const reacted = post?.reactions?.some(reaction => reaction.reacted && reaction.reaction === '+1')

    const userReaction = () => {
      reacted ?
        downvote({
            postId: post?.id,
            reaction: '+1'
        })
        :
        upvote({
            postId: post?.id,
            input: {
                reaction: '+1',
            }
        })
    }

    return( 
         <div className='flex justify-between items-center'>
                    <img src={icon}  width={24}/>
                    {text == 'like' && <span onClick={userReaction} className='ml-2 font-light text-xm cursor-pointer'>
                         { post.reactionsCount ?? 0 }  Like
                    </span> }
                     {text == 'comments' &&  <span className='ml-2 font-light text-xm cursor-pointer'>
                        { post.repliesCount ?? 0 } Comments
                    </span> }
         </div>
      )  
}