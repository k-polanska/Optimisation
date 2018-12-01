export default function FunctionReducer(
    state = {        
        formula: '',
        rangeA: 0,
        rangeB: 0,
        alpha: 0.618,
        epsilon: 0.01,
        minimum: 0,
        iterNumber: 0
    },
    action
) {
    switch (action.type) {

        case 'CALCULATE':
            state = {...state,
                formula: action.payload.formula,
                rangeA: action.payload.rangeA,
                rangeB: action.payload.rangeB,
                alpha: action.payload.alpha,
                epsilon: action.payload.epsilon
            };
            break;

        default:
            return state;
    }

    return state;
}