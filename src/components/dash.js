import React from 'react';
import { connect } from 'react-redux';

import { topFive } from '../actions/index';
import Activity from './activity';

class Dash extends React.Component {
    componentDidMount() {
        this.props.topFive();
    }

    renderActivity (activityObj) {
        const id = activityObj.id;
        const parentId = activityObj.parent_id;
        const name = activityObj.name.split('  ')[0];
        const date = activityObj.created_at.substr(0,10);
        const amount = activityObj.amount;

        return (
            <Activity key={id} id={id} parentId={parentId} name={name} date={date} amount={amount} />
        )
    }

    render() {
        console.log(this.props.largestActivities)
        return (
            <div className="row">
                <div className="col-xs-12 col-md-4 offset-md-4">
                    <h3 className="text-xs-center">Recent High-value Transactions</h3>
                    <ul className="list-group">
                        {this.props.largestActivities.map(this.renderActivity)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { largestActivities: state.largestActivities}
}

export default connect(mapStateToProps, { topFive })(Dash);