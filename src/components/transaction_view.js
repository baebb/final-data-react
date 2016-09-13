import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router';
import {getTransaction, getMerchantCategory } from "../actions/index";
import Transaction from './transaction';
import Merchant from './merchant';

class TransactionView extends React.Component {
    componentWillMount() {
        this.props.getTransaction(this.props.params.transactionId);
    }

    render() {
        const {transaction, merchant } = this.props;
        if (!transaction) {
            return (
                <p>Loading...</p>
            )
        }

        if (transaction === 'Not found') {
            return (
                <p>Transaction not found</p>
            )
        }

        const date = transaction.created_at.substr(0, 10);
        const card_mode = transaction.card_entry_mode == 'Virtual' ? 'Online' : 'Physical';
        const amount = Math.abs(Number(transaction.amount).toFixed(2));
        const {
            card_acceptor_name_location,
            status,
            merchant_category_code,
            merchant_id,
            processor_key,
            processor_merchant_name
        } = transaction;

        return (
            <div className="row">
                <div className="col-xs-12 col-md-8 offset-md-2 topRow">
                    <Link className="btn btn-danger" to={"/"}>Back</Link>
                </div>
                <Transaction
                    name={card_acceptor_name_location}
                    amount={amount}
                    status={status.toLowerCase()}
                    card_mode={card_mode}
                    mcc={merchant_category_code}
                    date={date}
                    getMerchantCategory={this.props.getMerchantCategory}
                />
                {merchant ? <Merchant
                    category={merchant.edited_description}
                    merchantId={merchant_id}
                    processorKey={processor_key}
                    merchantProcessorName={processor_merchant_name}
                /> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        transaction: state.activeTransaction,
        merchant: state.activeMerchant
    }
}

export default connect(mapStateToProps, {getTransaction, getMerchantCategory})(TransactionView)