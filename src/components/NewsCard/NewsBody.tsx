
import {Post} from "@tribeplatform/gql-client/types";
import {Link} from "react-router-dom";

export const NewsBody = (news : Post) => {
    return(<div className="flex  items-start pl-20  text-[#444] flex-col">
          <Link to={`/${news.id}`}>
             <p className="text-[15px] mb-6">{news.title}</p>
             <figure data-type="image" className="mb-6"> <img src="https://tribe-s3-production.imgix.net/U4QFfLFekW1I1prjQMRwh?w=1000&auto=compress,format&dl" data-id="U4QFfLFekW1I1prjQMRwh" /> </figure>
            <div dangerouslySetInnerHTML={{__html: news?.shortContent as string}} className="text-[14px]"></div>
         </Link> 
      </div>)       
}