import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 20vh);
  margin: 10vh auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100vh;

    border-radius: 0px;

    margin: 0 auto;
    padding: 1rem;
  }

  @media (max-height: 420px) {
    height: auto;
    min-height: 100%;

    border-radius: 0px;

    margin: 0 auto;
  }
`
