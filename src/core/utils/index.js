var moment = require('moment');

function calculateSumOfNumbers(numbers){
    return numbers.reduce((sum, elem) => {
        return sum + elem.amount;
    }, 0);
}

function getFormattedTime(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export {calculateSumOfNumbers, getFormattedTime};