import axios from 'axios';


export const calculate = (formula, rangeA, rangeB, alpha, epsilon) => {
    return {
        type: 'CALCULATE',
        payload: axios.get('http://127.0.0.1:5000/calculate',         
        { params: { 
            formula: formula,
            rangeA: rangeA,
            rangeB: rangeB,
            alpha: alpha,
            epsilon: epsilon 
            } 
        }
    )}
};