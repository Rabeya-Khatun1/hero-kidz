import GithubProvider from "next-auth/providers/github"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
 CredentialsProvider({
  name: "Credentials",
  credentials: {    
    username:{label: "Username", type:"text", placeholder:"jsMith"},
    password:{label: "Password", type: "password", placeholder: "****"}
  },
  async authorize(credentials, req){
    return null
  }
})
  ],
}
