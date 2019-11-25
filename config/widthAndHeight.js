import {Dimensions} from "react-native";

var {height, width} = Dimensions.get('screen');

function calWidth(widthVal) {
    return widthVal / 375 * width
}

function calHeight(heightVal) {
    return heightVal / 667 * width / 9 * 16
}


export {calWidth, calHeight};
