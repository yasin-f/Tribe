import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {useState} from "react";
import {useAddPost} from "@tribeplatform/react-sdk/hooks";
import {PostMappingTypeEnum} from "@tribeplatform/gql-client/types";
import {client} from '../../service/TribeClient'
import {useNavigate} from "react-router-dom";
import {Input} from '../base/Input';

export const CreateNews = () => {
    const navigate = useNavigate()
    const [mediaUrl, setMediaUrl] = useState<string>('')
    const [mediaId, setMediaId] = useState<string>('')
    const [data, setData] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const {mutateAsync: addPost} = useAddPost()


   const  onImageChange = async(event:any) => {
   
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];

            client.media.uploadImages([{ contentType: 'image/png', file: img }]).then(result =>{
                console.log(result)
                setMediaUrl(result[0].url)
                setMediaId(result[0].id)
            })

        // client.posts.listPostTypes({ limit: 10 }).then(spaces => {
        //     console.log('listPostTypes:', spaces)
        //     })
        
        // client.spaces.list({ limit: 5 }, "basic").then(spaces => {
        //     console.log('List of 5 spaces:', spaces)
        //     })
        }
      };

      
    return (
       <div className='p-5'>
           <div className="md:w-1/2 mx-auto  border rounded-2xl shadow  mt-24 bg-[white] md:p-10 p-4">
           <h1 className="text-2xl text-center">Submit News</h1>
         
           <Input type="text"  placeholder="Title"  onChangeText={event => setTitle(event.target.value)}   />  
            <label className="block text-gray-700 text-sm font-bold mt-5 mb-5">
                Content
            </label>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Whats new?</p>"
                onChange={(event: any, editor: any) => {
                    setData(editor.getData());
                }}
            />

          <div className='mt-10'>
           {mediaUrl != '' &&  <figure data-type="image" className="mb-2"> <img width={100} height={100} src={mediaUrl} data-id={mediaId}/> </figure>}
            <h1 className='mb-2'>Select Image</h1>
            <input type="file" name="Image" onChange={onImageChange} />
          </div>
             <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={() => {
                    addPost({
                        spaceId: 'zZ0P14ijt90S',
                        input: {
                            postTypeId: 'vjVQCin4xkVpEkv',
                            publish: true,
                            mappingFields: [
                                {
                                    key: 'title',
                                    type: PostMappingTypeEnum.TEXT,
                                    value: JSON.stringify(title)
                                },
                                {
                                    key: 'content',
                                    type: PostMappingTypeEnum.HTML,
                                    value: JSON.stringify(`<p> ${data} </p> "\"<figure data-type=\\\"image\\\"><img src=\\\"${mediaUrl}\\\" data-id=\\\"${mediaId}\\\"></figure>\""`)          
                                }
                            ]
                        }
                    }).then(() => {
                        navigate('/NewsList');
                    })
                }}
            >
                Submit
           </button> 
       </div>
      </div>

    );
}

//value: JSON.stringify("\"<figure data-type=\\\"image\\\"><img src=\\\"https://tribe-s3-production.imgix.net/U4QFfLFekW1I1prjQMRwh?w=1000&auto=compress,format&dl\\\" data-id=\\\"U4QFfLFekW1I1prjQMRwh\\\"></figure>\"")


