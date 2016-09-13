import React from 'react';

export default (props) => {
    return (
        <div className="col-xs-12 col-md-8 offset-md-2">
            <div className="card">
                <div className="card-block">
                    <small>Merchant category:</small>
                    <p>{props.category}</p>
                    <small>Merchant ID:</small>
                    <p>{props.merchantId}</p>
                    <small>Merchant processor key:</small>
                    <p>{props.processorKey}</p>
                    <small>Merchant processor name:</small>
                    <p>{props.merchantProcessorName}</p>
                </div>
            </div>
        </div>
    )
}
