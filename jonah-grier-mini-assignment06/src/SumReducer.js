export default function SumReducer(state = {
    recent_num: 0,
    total_sum: 0,
    values: [],
}, action) {
    const initalState = {
        recent_num: 0,
        total_sum: 0,
        values: [],
    }
    if (action.type === "ROLL") {
        const vals = [1, 2, 3, 4, 5, 6];
        const dieValue = vals[Math.floor(Math.random() * vals.length)];

        state.values.push(dieValue)

        let sumCount = state.values.reduce((a, b) => (a + b), 0)
        return {
            ...state, recent_num: dieValue, total_sum: sumCount,
        }
    } else if (action.type === "CLEAR") {
        return {
            recent_num: 0, total_sum: 0, values: []
        }
    }
    return state;
}


// TODO:

    // --> Reset the state back to a initial state    (done)
    // --> Add dice to the screen
    //          ---> Dice should contain 