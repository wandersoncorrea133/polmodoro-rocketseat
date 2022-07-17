import styled from 'styled-components'

export const Container = styled.div`
  background: black;

  & > h1 {
    color: ${(props) => props.theme.white};
  }
`
