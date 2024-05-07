import styled from 'styled-components'

export const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray};
  min-height: 100vh;
`
export const StyledContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const StyledFormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  min-width: 500px;
  padding: 5px 50px 5px 50px;
`

export const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  font-weight: 700;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

export const StyledInputCadastro = styled.input`
  display: flex;
  gap: 5px;
  font-weight: 700;
  width: 100%;
  padding: 15px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray['gray-100']};
  color: ${({ theme }) => theme.colors.gray['gray-500']};
  margin-bottom: 15px;
`
