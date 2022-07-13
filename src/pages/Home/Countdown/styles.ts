import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: calc(18vw);
    line-height: calc(14vw);
  }

  @media (max-width: 480px) {
    font-size: calc(10vw);
    line-height: calc(8vw);
  }

  @media (max-height: 420px) {
    font-size: calc(10vh);
    line-height: calc(8vh);
  }
`

export const Separator = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;

  overflow: hidden;

  color: ${(props) => props.theme['green-500']};

  padding: 2rem 0;

  @media (max-width: 768px) {
    width: calc(6vw);
  }

  @media (max-width: 480px) {
    width: calc(4vw);
  }
`
