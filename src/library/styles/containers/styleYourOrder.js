import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },
    header: {
        flexDirection: 'row',
        minHeight: 100,
        paddingHorizontal: 25,
        alignItems: 'center',
        backgroundColor: colors.white,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    viewTitle: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.gray,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    viewDown: {
        marginTop: 30,
        padding: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    collapse: {
        marginVertical: 10
    },
})