export const calculate = (formula) => {
    return {
        type: 'CALCULATE',
        payload: {
            formula: formula
        }
    }
};