import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Layout from 'components/layout';
import Main from 'pages';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Layout>
  );
};

export default App;
