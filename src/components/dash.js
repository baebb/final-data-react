import React from 'react';
import { connect } from 'react-redux';
import { activityData } from '../data/activity_data';
import { transactionData } from '../data/transaction_data';


class Dash extends React.Component {
    // topFive(data) {
    //     const highestFive = data
    //         .filter((x) => {return x.name !== "Payment Reversal"})
    //         .filter((x) => {return x.amount > 0})
    //         .sort((a,b) => {return b.amount - a.amount;})
    //         .slice(0,5);
    //     // console.log(highestFive);
    //     for(var i = 0; i < 5; i++) {
    //         // let date = highestFive[i].activity_datetime.substring(0,10);
    //         console.log(highestFive[i].amount, highestFive[i].name, highestFive[i].parent_id);
    //     }
    // }


    render() {
        return (
            <div>
                <ul></ul>
                <p>Sup Ross</p>
            </div>
        )
    }
}

export default Dash;