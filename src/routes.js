import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Dash from './components/dash';
import TransactionView from './components/transaction_view';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dash}/>
        <Route path="transaction/:transactionId" component={TransactionView}/>
    </Route>
)