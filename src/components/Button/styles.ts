import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryOver};
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.green['green-500']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-400']};
      cursor: not-allowed;
    `}
`
