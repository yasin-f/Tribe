import {Post} from "@tribeplatform/gql-client/types";
import {ReactComponent as TrashCanIcon} from "../../assets/SVGs/trash.svg";
import {useDeletePost} from "@tribeplatform/react-sdk/hooks";
import {hasScopesPermission} from "@tribeplatform/gql-client/permissions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

interface DeleteNewsProps{
  post : Post,
}

export const DeleteNews = ({post} : DeleteNewsProps) => {
   
    const {mutate: deletePost} = useDeletePost()
    const [canDelete] = hasScopesPermission(post, ["deletePost"])

    if (!canDelete)
        return null

        const deleteNews = () => {
            confirmAlert({
                title: 'Confirm to Delete',
                message: 'Are you sure to Delete this News?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () =>   deletePost({
                             id: post.id,
                          })
                  },
                  {
                    label: 'No',
                    onClick: () => {}
                  }
                ]
              });
        }
       
    return (
        <div className="flex flex-col justify-center mr-2">
            <TrashCanIcon className="cursor-pointer w-6 h-6 " fill="#fff" onClick={deleteNews}/>
        </div>
    )
}