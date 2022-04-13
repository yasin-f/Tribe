import {Post} from "@tribeplatform/gql-client/types";
import avatar from '../../assets/Images/yasin.jpeg';

interface AvatarRoundProps{
  post?:Post
}

export const AvatarRound = ({post}:AvatarRoundProps) => (
    <img className="w-16 rounded-full mr-4 bg-[#ccc]"  src={avatar} />
  );
