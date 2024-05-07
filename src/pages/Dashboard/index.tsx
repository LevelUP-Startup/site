import { Helmet } from 'react-helmet-async'
import { useTheme } from '../../styles/theme-provider'
import { Conteiner } from './style'
import { useAuth } from '../../context/auth'
import { Navigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export const Dashboard = () => {
  const { setIsTheme, theme } = useTheme()
  const { signOut, signed } = useAuth()
  return signed ? (
    <>
      <Helmet title="Dashboard" />
      <button
        onClick={() =>
          theme === 'dark' ? setIsTheme('light') : setIsTheme('dark')
        }
      >
        {theme}
      </button>
      <Conteiner>
        Dashboard aki <Button onClick={signOut}>Deslogar</Button>
      </Conteiner>
    </>
  ) : (
    <Navigate to="/signin" />
  )
}
