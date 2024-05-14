import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { toast } from 'sonner'
import { Envelope, LockKey } from 'phosphor-react'

import {
  StyledFormCadastro,
  StyledHeader,
  StyledInputCadastro,
  StyledLabel,
  StyledContainer,
  StyledContent,
} from './styles'
import { Button } from '../../components/Button'
import { AuthContext } from '../../context/auth'
import { zodResolver } from '@hookform/resolvers/zod'

const signInForm = z.object({
  email: z.string().email({ message: 'Informe um email válido!' }),
  password: z
    .string()
    .min(3, { message: 'A senha precisa ter pelo menos 3 letras.' }),
  confirmPassword: z.string().min(3, {
    message: 'A senha de confirmação precisa ter pelo menos 3 caracteres.',
  }),
})

type SignInForm = z.infer<typeof signInForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  })

  const { signed, signIn } = useContext(AuthContext)

  async function handleSignIn(data: SignInForm) {
    // Validar se as senhas coincidem
    if (data.password !== data.confirmPassword) {
      toast.error('As senhas não coincidem.')
      return
    }

    console.log('data', data)
    // try {
    //   await signIn(data)
    // } catch (e) {
    //   toast.error('Credenciais inválidas.')
    // }
  }

  if (signed) {
    return <Navigate to="/" />
  } else {
    return (
      <>
        <Helmet title="Cadastro" />

        <StyledContainer>
          <StyledContent>
            <StyledHeader>
              <h1>Crie sua Conta</h1>
            </StyledHeader>
            <StyledFormCadastro onSubmit={handleSubmit(handleSignIn)}>
              <StyledLabel>
                <Envelope size={20} /> Email:
              </StyledLabel>
              <StyledInputCadastro
                type="text"
                id="email"
                placeholder="Informe seu e-mail:"
                {...register('email')}
              />
              <p>{errors.email?.message}</p>

              <StyledLabel>
                <LockKey size={20} /> Senha:
              </StyledLabel>
              <StyledInputCadastro
                type="password"
                placeholder="Informe sua senha:"
                {...register('password')}
              />
              <p>{errors.password?.message}</p>

              <StyledLabel>
                <LockKey size={20} /> Confirme:
              </StyledLabel>
              <StyledInputCadastro
                type="password"
                placeholder="Confirme sua senha:"
                {...register('confirmPassword')}
              />
              <p>{errors.confirmPassword?.message}</p>

              <Button disabled={isSubmitting}>Cadastrar</Button>
            </StyledFormCadastro>
          </StyledContent>
        </StyledContainer>
      </>
    )
  }
}
