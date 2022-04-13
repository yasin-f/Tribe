import {useState} from "react";
import Lottie from 'react-lottie';
import {defaultLottieOptions} from '../../helper/defaultLottieOptions'
import TribeLogo from "../../assets/SVGs/TribeLogo.svg";
import {useSignUp} from "../../hooks/useSignUp";
import {activeToggle} from "../../Slices/AccountSlice";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {isEmptyOrSpaces} from '../../helper/isEmptyOrSpaces';
import {Alert} from '../base/Alert';
import {Helmet} from "react-helmet";
import {Title} from '../base/Title';
import strings from '../../resurce/Strings';
import {Input} from '../base/Input';
import {Button} from '../base/Button';


const {content, title, linkTo, linkContent} = strings.Account.signup;

export const SignUp = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector((state) => state.Account.Loader)
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [validation, setValidation] = useState<Boolean>(false)
    const signup = useSignUp();  

    const _signup = (email:string,password:string,name:string) => {
       if(isEmptyOrSpaces(email) || isEmptyOrSpaces(name) || isEmptyOrSpaces(password)){
               setValidation(true);
       }        
        else{
            setValidation(false);
            dispatch(activeToggle());
            signup(email,name,password);
        }        
      }

    return (
        <div className="flex h-screen">
            <Helmet><title>SignUp</title></Helmet>
            <div className="m-auto md:flex overflow-x-hidden">
            <div className="mt-24 md:mt-0"><Lottie options={defaultLottieOptions} height={500} width={550} /></div>
            <div className="flex justify-center items-center flex-col">
              <Title title={title} content={content} linkTo={linkTo} linkContent={linkContent} />
              <div className="md:w-3/5 px-5">
                {validation && <Alert />}  
                <Input type="text"     placeholder="Name"      onChangeText={event => setName(event.target.value)} />
                <Input type="email"    placeholder="Email"     onChangeText={event => setEmail(event.target.value)}   />
                <Input type="password" placeholder="Password"  onChangeText={event => setPassword(event.target.value)}  />
                <Button title='Sign Up' email={email}  password={password} name={name} loaderStatus={loader} handler={() => { _signup(email,name,password) }}  />
                  <p className="text-center mt-5 text-sm font-light">by signing up you agree to our  <span className="text-green-600">privacy policy</span></p>
                  <div className="text-center md:mt-20 mb-5 mt-5">
                    <img width={80} className="inline" src={TribeLogo}  alt="Tribe Logo" title="Tribe Logo" />
                  </div>
              </div>
             </div> 
            </div>
        </div>
    )
}