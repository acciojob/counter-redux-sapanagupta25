const initialState = {
    counter: 0, 
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "counter/inc":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "counter/dec":
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return { ...state };
    }
}

function inc() {
    return {
        type: "counter/inc",
    };
}

function dec() {
    return {
        type: "counter/dec",
    };
}

export { inc, dec };
export default counterReducer;
