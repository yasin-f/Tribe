import {useLogin as useReactSDKLogin} from "@tribeplatform/react-sdk/hooks";
import {useCallback} from "react";

export const useLogin = () => {
    const {login} = useReactSDKLogin()

    return useCallback((email: string, password: string) => {
        login({
                variables: {input: {usernameOrEmail: email, password}}
            }
        ).then((token) => {
            console.log( 'token ====> ', token)
            localStorage.setItem('apiKey', token.accessToken)
            window.location.href = '/NewsList'
        })
    }, [login])
}


