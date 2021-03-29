import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import {Integrations} from '@sentry/tracing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import 'video.js/dist/video-js.css';
import './assets/fonts/euder/Euder-Black.otf';
import './assets/fonts/euder/Euder-Bold.otf';
import './assets/fonts/euder/Euder-Regular.otf';
import './index.css';
import 'react-awesome-slider/dist/styles.css';
import './i18n';
import reportWebVitals from './reportWebVitals';
import {store} from './store';
import {Provider} from 'react-redux';

/*import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);*/

import Login from './views/login/Login';
import PriseConscience from './views/priseconscience/PriseConscience';
import Delivrance from './views/delivrance/Delivrance';
import Liberte from './views/liberte/Liberte';
import Fiole from './views/fiole/Fiole';
import PrivateRoute from './PrivateRoute';

console.log({NODE_ENV: process.env.NODE_ENV});
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://c3918a24a2404cdf9f3f3ced195b6ee7@sentry.prototyper.fr/16',
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute name="priseconscience" path="/priseconscience" exact component={PriseConscience} />
            <PrivateRoute name="delivrance" path="/delivrance" exact component={Delivrance} />
            <PrivateRoute name="liberte" path="/liberte" exact component={Liberte} />
            <PrivateRoute name="fiole" path="/fiole" exact component={Fiole} />
            <Route name="login" path="/" component={Login} />
          </Switch>
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
