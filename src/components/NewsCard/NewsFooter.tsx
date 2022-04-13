
import {Post} from "@tribeplatform/gql-client/types";
import {Interactive} from './Interactive';
import {Comment} from '../Comment/Comment';

export const NewsFooter = (user : Post) => {
    return(<>
            <Interactive {...user} />
            <Comment     {...user} />
          </>)
}