import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    view: {
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40
    },
    imageContainer: {
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 180,
        height: 180
    }
})