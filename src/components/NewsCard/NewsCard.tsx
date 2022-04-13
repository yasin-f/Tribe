
import {NewsHeader} from './NewsHeader';
import {NewsBody} from './NewsBody';
import {NewsFooter} from './NewsFooter';
import {Post} from "@tribeplatform/gql-client/types";

interface NewsCardProps{
   post : Post,
   shadow : Boolean,
 }

export const NewsCard = ({post, shadow}:NewsCardProps) => {
         return(<div className={`${shadow && 'border rounded-2xl shadow-md border-gray-100'} ${!shadow && 'rounded-2xl'}  p-7 mt-10 bg-white`} >
                <NewsHeader  post={post} />
                <NewsBody   {...post} />
                <NewsFooter {...post} />
          </div>)           
}