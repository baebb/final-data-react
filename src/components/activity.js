import React from 'react';

export default (props) => {
    return (
        <li className={`list-group-item activity ${props.id}`}>
            <div className="media-body">
                <h4 className="media-heading">{props.name}</h4>
                <span className="font-italic">{props.date}</span>
            </div>
            <div className="media-right">
                <p className="text-danger">${props.amount}</p>
            </div>
        </li>
    )
}