import { StyledButton } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  )
}
