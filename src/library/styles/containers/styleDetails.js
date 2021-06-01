import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const style = StyleSheet.create({
    name: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.gray
    },
    price: {
        fontSize: 17,
        color: colors.gray
    },
    text: {
        fontSize: 17,
        color: colors.gray,
        marginVertical: 15
    }
})