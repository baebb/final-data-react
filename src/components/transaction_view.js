import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTransaction } from '../actions/index';

class TransactionView extends React.Component {
    componentWillMount() {
        this.props.getTransaction(this.props.params.transactionId);
    }

    render() {
        return (
            <p>{this.props.params.transactionId}</p>
        )
    }
}

function mapStateToProps(state) {
    return { transaction: state.activeTransaction }
}

export default connect(mapStateToProps, { getTransaction })(TransactionView)