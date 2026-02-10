import { loginUser } from "@/api/auth"
import CredentialsProvider from "next-auth/providers/credentials"


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
const user = await loginUser(credentials);
return user ? user : null

  }
})
  ],
}
