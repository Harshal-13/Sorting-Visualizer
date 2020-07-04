import {
    combineReducers
} from "redux";
import {
    algorithm
} from "./algorithm";
import {
    array
} from "./array";
import {
    currentBubbleTwo
} from "./bubbleSort";
import {
    currentHeapThree
} from "./heapSort";
import {
    currentMergeX
} from "./mergeSort";
import {
    currentQuickTwo,
    pivot
} from "./quickSort";
import {
    isRunning
} from "./running";
import {
    currentSorted
} from "./sorted";
import {
    currentSwappers
} from "./swappers";

export default combineReducers({
    algorithm,
    array,
    currentBubbleTwo,
    currentHeapThree,
    currentMergeX,
    currentQuickTwo,
    pivot,
    isRunning,
    currentSorted,
    currentSwappers,
});