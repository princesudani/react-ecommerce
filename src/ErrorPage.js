import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper>
    <div className="container">
    <div>
      <h2>404</h2>
      <h2>UH OH !!! You're Lost.</h2>
      <p>The Page you are Looking for does not exist. How you got hare is a mystery. But you can click the button below to go back to the Homepage</p>
      <Button>
        <NavLink to="/">Go Back to Homepage</NavLink>
      </Button>
    </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage
