export default function AddDiceReducer(count = 0, action) {
    if (action.type === "ADD") {
        action.die_list.push(action.value);
        count = action.die_list
    }
    return count;   // type  --> [ list ]
}