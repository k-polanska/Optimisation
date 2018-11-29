export default function FunctionReducer(
    state = {        
        formula: 'kasndkas'
    },
    action
) {
    switch (action.type) {

        case 'CALCULATE':
            state = {...state,
                formula: action.payload.formula
            };
            break;

        default:
            return state;
    }

    return state;
}