import {Link} from "react-router-dom";

interface TitleProps{
    title : string,
    content : string,
    linkTo:string,
    linkContent:string
  }

export const Title = ({title, content, linkTo, linkContent} : TitleProps) => {
    return(
       <>
        <h1 className="text-center font-bold text-4xl mt-20 md:mt-0">{title}</h1>
        <p className="text-center mt-2 text-base">{content} <Link to={linkTo} className="text-green-600">{linkContent}</Link></p>
       </>
      )
}