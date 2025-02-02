import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import CircularProgess from '@/components/ui/CircularProgess'
import { QUICK_ACTIONS } from '@/constants/home/constant'
import QuickAction from '@/components/ui/QuickAction'
import NoMedication from '@/components/ui/NoMedication'
import Medication from '@/components/ui/Medication'

export default function Home() {
    const colors = useThemeColor()
    const count = 1000;

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.homeContainer, { backgroundColor: colors.containerBg }]}>
            {/* progress */}
            <LinearGradient colors={["#1a8e2d", "#146922"]} style={styles.dailyActionContainer}>
                {/* header */}
                <SafeAreaView style={styles.dailyActionHeader}>
                    <Text style={[styles.dailyActiontext, { color: colors.white }]}>
                        {text.dailyAction}
                    </Text>
                    <TouchableOpacity style={[styles.notificationBtn, { backgroundColor: colors.logoDarkShade }]}>
                        <Ionicons name='notifications-outline' size={24} color={colors.white} >
                        </Ionicons>
                        <View style={[styles.notificationBadge, { backgroundColor: colors.red, borderColor: colors.notiGreen }]}>
                            <Text style={[styles.notificationCount, { color: colors.white }]}> {count > 10 ? '10+' : count} </Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
                {/* circular prgress */}
                <CircularProgess totalDose={10} completedDose={5} progress={5 / 10} />
            </LinearGradient>

            {/* quick action */}
            <View style={styles.quickActionContainer}>
                <Text style={[styles.quickActionText, { color: colors.black }]}>{text.quickAction}</Text>
                <View style={styles.quickActionLinksContainer}>
                    {QUICK_ACTIONS.map((action) => (
                        <QuickAction
                            color={action.color}
                            gradient={action.gradient}
                            icon={action.icon}
                            label={action.label}
                            route={action.route}
                            key={action.label}
                        />
                    ))}
                </View>
            </View>

            {/* medication */}
            <View style={styles.medicationContainer}>
                <View style={styles.medicationHeader}>
                    <Text style={[styles.medicationText, { color: colors.black }]}>
                        {text.medication}
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.seeAllBtn, { color: colors.primary }]} > {text.seeAll} </Text>
                    </TouchableOpacity>
                </View>
                {[{ dose : '900g', time:'9:00', name :'Paracetamoil', color : '#004400'}].length === 0 ?
                    <NoMedication /> :
                    <View style={styles.medicationsContainer}>
                       { [{ dose : '900g', time:'9:00', name :'Paracetamoil', color : '#004400'}, { dose : '900g', time:'9:00', name :'Psaracetamoil', color : '#004400'}].map((item)=>(

                           <Medication color={item.color} dose={item.dose} time={item.time} taken={false} handletaken={()=>{}} name={item.name} key={item.name} />
                       ))}
                    </View>

                }
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    dailyActionContainer: {
        paddingHorizontal: 12,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingTop: 10,
        paddingBottom: 30

    },
    dailyActionHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dailyActiontext: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    notificationBtn: {
        padding: 5,
        borderRadius: 10,
        position: 'relative',
    },
    notificationCount: {
        fontSize: 8,
        textAlign: 'center'
    },
    notificationBadge: {
        position: "absolute",
        top: -4,
        right: -4,
        minWidth: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
    },
    quickActionContainer: {
        flex: 1,
        padding: 15
    },
    quickActionText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    quickActionLinksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 10
    },
    medicationContainer : {

    },
    medicationsContainer: {
      gap : 10,
      paddingVertical : 10
    },
    medicationHeader: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    medicationText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    seeAllBtn: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})


const text = {
    dailyAction: 'Daily Progress',
    quickAction: 'Quick Actions',
    medication: "Today's Medication",
    seeAll: 'See All'

}


