
import {Post} from "@tribeplatform/gql-client/types";
import {Reaction} from './Reaction';
import  commentIcon from "../../assets/SVGs/comment.svg";
import  like from "../../assets/SVGs/like.svg";

export const Interactive = (post : Post) => {
    return(
        <div className='flex justify-around items-center mt-5 mb-5 text-sm text-[#888]'>
                <Reaction post={post}  icon={commentIcon}  text={'comments'}/>
                <Reaction post={post}  icon={like}  text={'like'}/>
        </div>
      )
}