import styled, { css } from 'styled-components'

interface BaseInputProps {
  isErrored: boolean
}

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;

  color: ${(props) => props.theme['gray-100']};
`

const BaseInput = styled.input<BaseInputProps>`
  height: 2.5rem;

  font-weight: bold;
  font-size: 1.125rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme['gray-100']};
  background: transparent;

  padding: 0 0.5rem;

  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${props.theme['red-500']};
    `}
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
