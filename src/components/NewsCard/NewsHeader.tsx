import {AvatarRound} from '../base/AvatarRound';
import {Post} from "@tribeplatform/gql-client/types";
import formatDate from '../../helper/formatDate';
import {DeleteNews} from  './DeleteNews';

interface NewsHeaderProps{
    user?:string,
    post?:Post
}

export const NewsHeader = ({post , user }:NewsHeaderProps)  => {
    return(
            <div className='flex justify-between items-center'>
                <div className="flex items-center">
                    <AvatarRound  post={post}/>
                    <div className="text-sm">
                         <p className="text-[#111] text-xm leading-none font-medium mb-1">{post?.createdBy?.member?.name ?? user}</p>
                         <p className="text-[#888] text-xs">{formatDate(new Date(post?.createdAt ?? new Date()) ,'EEE, MMM d, yyyy HH:mm')}</p>
                    </div>
                </div>
            <div>
             {post && <DeleteNews post={post}  />} 
            </div>
           </div>
      )
}