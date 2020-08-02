import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  header,
  main,
  footer {
    display: flex;
    margin: 0;
    width: 100%;
  }

  header > nav,
  .container {
    display: flex;
    margin: 16px auto;
    width: 100%;
    max-width: 1024px;
    @media (max-width: 1024px) {
      margin: 16px;
    }
  }

  header {
    border: 1px solid #aaa;
    h1 {
      margin: 4px 0;
    }
  }
`

export default function DefaultLayout(props) {
  return (
    <Layout>
      <header>
        <nav>
          <h1>Comics App</h1>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </Layout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
}
