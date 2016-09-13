import React from 'react';

export default (props) => {
    return (
        <div className="col-xs-12 col-md-8 offset-md-2">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-xs-8">
                           <span className="font-weight-bold">{props.name}</span>
                        </div>
                        <div className="col-xs-4 text-xs-right">
                            <span className="font-weight-bold text-danger">- ${props.amount}</span>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <small>Status:</small>
                    <p className="capitalize">{props.status}</p>
                    <small>Transaction origin:</small>
                    <p className="capitalize">{props.card_mode}</p>
                    <small>Date:</small>
                    <p className="capitalize">{props.date}</p>
                </div>
                <div className="card-footer">
                    <button onClick={props.getMerchantCategory.bind(this,props.mcc)} className="btn btn-primary">Get Merchant Details</button>
                </div>
            </div>
        </div>
    )
}