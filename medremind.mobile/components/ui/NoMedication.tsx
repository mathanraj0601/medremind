import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NoMedication = () => {
    const colors = useThemeColor();
    return (
        <View style={[styles.container, { backgroundColor : colors.white }]}>
            <Ionicons name="medical-outline" color={colors.black} size={80} style={styles.icon}/>
            <Text style={[styles.medicationText, { color: colors.black }]}>{text.noMedication}</Text>
            <TouchableOpacity style={[styles.medicationBtn, { backgroundColor: colors.primary }]}>
                <Text style={[styles.medicationBtnText, { color: colors.white }]}>
                    {text.addMedication}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingHorizontal : 10,
        paddingVertical : 30,
        marginHorizontal : 20,
        borderRadius : 10
    },
    medicationText: {
        fontSize: 16,
        fontWeight: 'semibold'
    },
    medicationBtn: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius : 20
    },
    medicationBtnText: {
        fontSize: 16,
        fontWeight: 'semibold'
    },
    icon : {
        opacity : .5
    }
})

const text = {
    noMedication: "No medications Scheduled for today",
    addMedication: "Add Medication"
}

export default NoMedication