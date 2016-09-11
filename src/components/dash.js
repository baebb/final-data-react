import React from 'react';
import { connect } from 'react-redux';
import { activityData } from '../data/activity_data';
import { transactionData } from '../data/transaction_data';


class Dash extends React.Component {
    checkIt(array) {
        console.log(array);
        var data = array;
        console.log(data.length);
        var i = 0;
        while(data[i]) {
            console.log(data[i]);
            i++;
        }
    }
    topTen(data) {
        const highestTen = data
            .filter((x) => {return x.name !== "Payment Reversal"})
            .filter((x) => {return x.amount > 0})
            .sort((a,b) => {return b.amount - a.amount;});
        // console.log(highestTen);
        for(var i = 0; i < 10; i++) {
            console.log(highestTen[i].amount, highestTen[i].name);
        }
    }


    render() {
        // console.log(parseInt(activityData[1].amount));
        // this.checkIt(activityData)
        return (
            <div>
                <ul>{this.topTen(activityData)}</ul>
                <p>Sup Ross</p>
            </div>
        )
    }
}

export default Dash;