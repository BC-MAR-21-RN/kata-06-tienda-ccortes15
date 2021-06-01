import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const style = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        paddingHorizontal: 25,
        paddingBottom: 25,
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewTop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewDown: {
        backgroundColor: colors.white
    },
    text: {
        fontSize: 16,
        color: colors.white
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white
    }
})