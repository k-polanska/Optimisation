import { pathToFileURL } from "url";

export const calculate = (formula, rangeA, rangeB, aplha, epsilon) => {
    return {
        type: 'CALCULATE',
        payload: {
            formula: formula,
            rangeA: rangeA,
            rangeB: rangeB,
            alpha: alpha,
            epsilon: epsilon
        }
    }
};