import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserProps {
  id: string
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface signInProps {
  email: string
  password: string
}

interface AuthContextType {
  user: UserProps | null
  signed: boolean
  signIn: ({ email, password }: signInProps) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  signed: false,
  user: null,
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadingStoreData = async () => {
    const storegeUser = localStorage.getItem('@AuthGodot:user')

    if (storegeUser) {
      const user: UserProps = JSON.parse(storegeUser)
      setUser(user)
    }
  }

  const signIn = async ({ email, password }: signInProps) => {
    try {
      const response = await api.get('/accounts')
      const accounts = response.data

      const foundAccount = accounts.find(
        (account: UserProps) =>
          account.email === email && account.password === password,
      )
      if (foundAccount) {
        setUser(foundAccount)

        // // So Para Exenplos vou enviar tudo kkkk tempo ta curto
        localStorage.setItem('@AuthGodot:user', JSON.stringify(foundAccount))

        return foundAccount
      }
    } catch (e) {
      throw new Error('Credenciais inválidas.')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@AuthGodot:user')
    setUser(null)
  }

  const value = {
    user,
    signed: user !== null && user !== undefined,
    signIn,
    signOut,
  }

  useEffect(() => {
    loadingStoreData()
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext)
