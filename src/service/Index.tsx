import { TribeClient } from "@tribeplatform/gql-client"

export const client = new TribeClient({
  graphqlUrl: "https://app.tribe.so/graphql",
})

export const getAccessToken = async (usernameOrEmail:string, password:string) => {
  const guestTokens = await client.getTokens(
    { networkDomain: "lawmingo.tribeplatform.com" },
    "basic"
  )
  client.setToken(guestTokens.accessToken)

  const { accessToken, refreshToken } = await client.auth.login(
    {
      input: { usernameOrEmail, password },
    },
    "basic"
  )
       console.log({ accessToken, refreshToken })
        localStorage.setItem('apiKey', accessToken)
         window.location.href = '/NewsList'      
}
