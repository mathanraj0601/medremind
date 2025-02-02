import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const  { width } = Dimensions.get('window')

const QuickAction = ({ color, gradient, icon, label, route }: QuickActionProps) => {

    const colors = useThemeColor()
    return (
        <Link href={route} asChild key={label}>
            <TouchableOpacity style={styles.button}>
                <LinearGradient colors={gradient} style={styles.gradient}>
                    <View style={[styles.icons , {backgroundColor : colors.logoDarkShade}]}>
                        <Ionicons size={24} color={Colors.white} name={icon} />
                    </View>
                    <Text style={[styles.label, {color : colors.white}]}>
                       {label}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </Link>
    )
}


const styles = StyleSheet.create({

    button: {
        width: (width - 52) / 2,
        height: 110,
        borderRadius: 16,
        overflow: "hidden",
    },
    icons: {
        height : 40,
        width: 40,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    label : {
        fontSize : 14,
        fontWeight : 'semibold',
    },
    gradient : {
        flex : 1,
        padding : 15,
        justifyContent : 'space-between'
    }
})

export default QuickAction