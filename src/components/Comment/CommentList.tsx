import {Post} from "@tribeplatform/gql-client/types";
 import {DeleteNews} from "../NewsCard/DeleteNews";
 import {NewsHeader} from "../NewsCard/NewsHeader";
 import { useSpaces } from '@tribeplatform/react-sdk/hooks';

 interface CommentListProps{
    post?:Post
  }

export const CommentList = ({post} :CommentListProps ) => {
    const {isLoading } = useSpaces({ fields: { image: 'basic' } })
    return (
        <>
            {isLoading && <div className="text-center" >Loading...</div>}
            {post?.replies?.nodes?.map(reply => (
               <div className="border p-5 bg-[#cccccc1c] rounded-lg mb-10">
                <div className="flex justify-between items-center" key={reply.id}>
                     <NewsHeader {...reply}  user={reply.createdBy?.member?.name ?? ''} />
                     {reply && <DeleteNews  post={reply} /> } 
                </div>
                <div className="w-full text-justify mx-auto text-[#888] text-sm pl-[80px] pr-[12px]" key={reply.id}>
                     <div dangerouslySetInnerHTML={{__html: reply.shortContent as string}}/>
                </div>       
               </div>

            ))}
        </>
    )
}