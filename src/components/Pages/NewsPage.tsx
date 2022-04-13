import {useParams} from "react-router-dom";
import {usePost} from "@tribeplatform/react-sdk/hooks";
import {NewsCard} from '../NewsCard/NewsCard'
import {CommentList} from '../Comment/CommentList'


export const NewsPage = () => {
   
    const params = useParams()
    const NewsId = params.NewsId as string
  
    const {data: post} = usePost({
        id: NewsId,
        fields: {
            replies: {
                variables: {
                    limit: 100,
                },
                fields: {
                    reactions: {
                        fields: 'all',
                        variables: {
                            limit: 10,
                        }
                    },
                    createdBy: {
                        member: 'basic'
                    },
                    authMemberProps: 'all',
                }
            }
        }
    })

    return (
        <div className="bg-[#cccccc42]">
            <div className='container mx-auto md:w-5/12 px-4 pt-14 z-30 '>
                {post && <NewsCard  post={post} shadow={false}  />}
                <h2 className="text-center font-medium mt-10 mb-10"> {post?.repliesCount} Comments </h2>
                <CommentList post={post} />
                <hr />
            </div>
        </div>
    )
}