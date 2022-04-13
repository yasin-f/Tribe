import {useState} from "react";
import {useAddReply} from "@tribeplatform/react-sdk/hooks";
import {Post, PostMappingTypeEnum} from "@tribeplatform/gql-client/types";

export const Comment = (post : Post) => {
  const [comment, setComment] = useState<string>('')
  const {mutateAsync: addReply} = useAddReply()

  const addComment = () => {
      addReply({
        postId: post?.id as string,
        input: {
            postTypeId: "41B71xq1GbAA1IU",
            publish: true,
            mappingFields: [{
              key: 'content',
              type: PostMappingTypeEnum.HTML,
              value: JSON.stringify(`<p>${comment}</p>`)
            }],
        }
    }).then(() => {
         setComment('');
  })
  }

    return(
        <div className='flex justify-center items-center text-sm relative'>
         <button onClick={addComment} type="button" className="boreder hover:bg-green-400 transition duration-300 rounded-3xl w-9 h-9 right-1 bg-green-500 absolute flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
         </button>
         <input  className="bg-[#f9f9f9] appearance-none border rounded-3xl w-full py-3 px-5 text-gray-600 leading-tight focus:outline-none focus:shadow-outline text-sm"
              type="text" placeholder='write your comments' onChange={event => setComment(event.target.value)}  />
        </div>
      )
}