import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("screen")

const style = StyleSheet.create({
    container: {
        height: height*1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        gap: height* 0.04,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        width: width* 0.8,
        color: "black",
        paddingHorizontal: width* 0.04,
    },
    head: {
        fontSize: 20,
        color: "black",
    },
    subView: {
        width:  width* 0.8,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    subText: {
        color: "white",
        padding: width* 0.02,
    }
})

export default style;