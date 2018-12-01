export default function FunctionReducer(
    state = {        
        formula: '',
        rangeA: 0,
        rangeB: 0,
        alpha: 0.618,
        epsilon: 0.01,
        minimum: 0,
        iterNumber: 0,
        plotData: [["x","y"],[0,0]]
    },
    action
) {
    switch (action.type) {

        case 'CALCULATE_FULFILLED':         
            var pltData = [["x","y"]];

            action.payload.data.plot.x.forEach((element, i) => {                
                pltData.push([element, action.payload.data.plot.y[i]])
            });
        
            state = {...state,
                minimum: action.payload.data.result.minimum,
                iterNumber: action.payload.data.result.iterNumber,
                plotData: pltData,
                rangeA: action.payload.data.a,
                rangeB: action.payload.data.b,
                formula: action.payload.data.formula,
                epsilon: action.payload.data.epsilon,
                aplha: action.payload.data.alpha
            }
            break;

        default:
            return state;
    }

    return state;
}