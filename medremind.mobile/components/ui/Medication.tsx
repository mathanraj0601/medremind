import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Medication = ({ dose, handletaken, name, taken, time, color }: MedicationProps) => {
    const colors = useThemeColor();
    return (
        <View style={[styles.container, { backgroundColor: colors.white }]}>

            <View style={[styles.icon, { backgroundColor: `${color}15` }]}>
                <Ionicons name='medical' color={color} size={35} />
            </View>

            <View style={styles.medicineInfo}>
                <Text style={[styles.name, { color: colors.darkGrey }]}>{name}</Text>
                <Text style={[styles.dose, { color: colors.lightGrey }]}>{dose}</Text>
                <View style={styles.timeContainer}>
                    <Ionicons name='time-outline' size={16} />
                    <Text style={[styles.time, { color: colors.lightGrey }]}>
                        {time}
                    </Text>
                </View>
            </View>

            {taken ?
                <View style={[styles.takenContainer, { backgroundColor: colors.takenGreenOverlay }]}>
                    <Ionicons name='checkmark-circle' color={colors.primary} size={20} />
                    <Text style={[styles.takenText, { color: colors.primary }]}> {text.taken} </Text>
                </View> :
                <TouchableOpacity style={[styles.takeBtn, { backgroundColor: color }]}>
                    <Text style={[styles.takeBtnText, { color: colors.white }]}>
                        {text.take}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    icon: {
        padding: 10,
        borderRadius: 40
    },
    medicineInfo: {
        gap: 2
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    dose: {
        fontSize: 14,
        fontWeight: 'semibold'
    },
    time: {
        fontSize: 14,
        fontWeight: 'semibold'
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    takeBtn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        marginLeft: 'auto',
    },
    takeBtnText: {
        fontWeight: "bold",
        fontSize: 14,
    },
    takenContainer: {
        marginLeft: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        borderRadius: 15
    },
    takenText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

const text = {
    taken: 'Taken',
    take: 'Take'
}


export default Medication