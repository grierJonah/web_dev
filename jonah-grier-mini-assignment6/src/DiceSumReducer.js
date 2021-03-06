import { StaticReadUsage } from "three";

export default function DiceSumReducer(count = 0, action) {
    if (action.type === "SUM") {

        // Add number to list
        action.global_list.push(action.value)

        // get sum of list and return
        count = action.global_list.reduce((a, b) => (a + b), 0);
    }
    return count;
}