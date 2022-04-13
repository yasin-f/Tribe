import {useState} from "react";
import Lottie from 'react-lottie';
import {defaultLottieOptions} from '../../helper/defaultLottieOptions'
import {useLogin} from "../../hooks/useLogin";
import {isEmptyOrSpaces} from '../../helper/isEmptyOrSpaces';
import {Alert} from '../base/Alert';
import {activeToggle} from "../../Slices/AccountSlice";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {Helmet} from "react-helmet";
import {Title} from '../base/Title'
import strings from '../../resurce/Strings';
import {Input} from '../base/Input';
import {Button} from '../base/Button';
import TribeLogo from "../../assets/SVGs/TribeLogo.svg";
import {getAccessToken} from '../../service/Index';
const {content, title, linkTo, linkContent} = strings.Account.login;

export const Login = () => {
 
    const dispatch = useAppDispatch();
    const loader = useAppSelector((state) => state.Account.Loader)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [validation, setValidation] = useState<Boolean>(false);

    const login = useLogin()

    const _login = (email:string,password:string) => {

      //console.log(email, password)
      if(isEmptyOrSpaces(email) || isEmptyOrSpaces(password)){
              setValidation(true);
      }        
       else{
           setValidation(false);
           dispatch(activeToggle());
           getAccessToken(email,password);
          // login(email,password);
       }        
     }

    return (
        <div className="flex h-screen">
            <Helmet> <title>login</title></Helmet>
            <div className="m-auto md:flex overflow-x-hidden">
            <div className="mt-24 md:mt-0"><Lottie options={defaultLottieOptions} height={500} width={550} /></div>
                <div className="flex justify-center items-center flex-col">
                <Title title={title} content={content} linkTo={linkTo} linkContent={linkContent} />
                <div className="md:w-4/5 px-5">
                {validation && <Alert />}
                <Input type="email"     placeholder="Email"     onChangeText={event => setEmail(event.target.value)}   />
                <Input type="password"  placeholder="Password"  onChangeText={event => setPassword(event.target.value)}/>
                <Button title='Log in' email={email}  password={password} loaderStatus={loader} handler={() => { _login(email,password) }}  />
                </div>
                <div className="text-center md:mt-20 mb-5 mt-5">
                    <img width={80} className="inline" src={TribeLogo}  alt="Tribe Logo" title="Tribe Logo" />
                  </div>
            </div>
            </div> 
           
        </div>
    )
}


