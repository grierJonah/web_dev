export default function CounterReducer(count = 0, action) {
    if (action.type === "ROLL") {
        const vals = [1, 2, 3, 4, 5, 6];
        const dieValue = vals[Math.floor(Math.random() * vals.length)];
        count = dieValue;
    }
    return count
}