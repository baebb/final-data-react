import React from 'react';
import {Link} from 'react-router';

export default (props) => {
    return (
        <li className={`list-group-item list-group-item-action activity ${props.id}`}>
            <Link to={"transaction/" + props.parentId}>
                <div className="row">
                    <div className="col-xs-8">
                        <h4 className="media-heading">{props.name}</h4>
                        <span className="font-italic">{props.date}</span>
                    </div>
                    <div className="col-xs-4 text-xs-right">
                        <span className="text-danger font-weight-bold">- ${props.amount}</span>
                    </div>
                </div>
            </Link>
        </li>
    )
}