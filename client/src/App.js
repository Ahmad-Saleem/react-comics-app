import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './layouts/Default'
import ComicPage from './containers/ComicPage'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path="/:id"
            render={({ match }) => <ComicPage id={match.params.id} />}
          />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
