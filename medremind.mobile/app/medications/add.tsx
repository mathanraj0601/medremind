import { Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'


const AddMedication = () => {
    const colors = useThemeColor()
    const [formData, setFormData] = useState({
        name: '',
        dose: ''
    })

    const [error, setError] = useState<{ [key: string]: string }>({})
    const router = useRouter()

    return (
        <View style={[styles.container, { backgroundColor: colors.containerBg }]}>
            <LinearGradient style={styles.linearGradient} colors={["#1a8e2d", "#146922"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.back, { backgroundColor: colors.white }]} onPress={router.back}>
                        <Ionicons name='chevron-back-outline' size={28} color={colors.backBtn} />
                    </TouchableOpacity>
                    <Text style={[styles.addMedicationText, { color: colors.white }]}>Add Medications</Text>
                </View>
                <ScrollView style={styles.sectioncontent}>
                    <View style={styles.inputs}>

                        {/* Medication Name */}
                        <View>
                            <TextInput
                                style={[styles.textInput, { backgroundColor: colors.white, color: colors.black }]}
                                placeholder='Medicine Name'
                                placeholderTextColor={colors.lightGrey}
                                value={formData.name}
                                onChangeText={(text) => {
                                    setFormData((prev) => ({ ...prev, name: text }))
                                    if (error.name) {
                                        setError((prev) => ({ ...prev, name: "one" }))
                                    }
                                }}
                            />
                            {error?.name && <Text style={[styles.errorText, { color:colors.red}]}>
                                {error.name}
                            </Text>}
                        </View>


                        {/* Dosage */}

                        <View>
                            <TextInput
                                style={[styles.textInput, { backgroundColor: colors.white, color: colors.black }]}
                                placeholder='Dosage Ex: 500mg'
                                placeholderTextColor={colors.lightGrey}
                                value={formData.dose}
                                onChangeText={(text) => {
                                    setFormData((prev) => ({ ...prev, dose: text }))
                                    if (error.name) {
                                        setError((prev) => ({ ...prev, dose: "" }))
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.frequencyContainer}
                        >
                          <View style={styles.frequencyHeader}>
                               <Text style={[styles.frequencyHeaderText, {color: colors.black}]}> {text.howOften} </Text>
                          </View>
                        </View>

                    </View>
                </ScrollView>
            </View>


        </View>
    )
}

export default AddMedication

const text = {
    howOften : 'How Often ?'
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Platform.OS === 'ios' ? 140 : 120
    },
    content: {
        paddingTop: Platform.OS == 'ios' ? 50 : 40
    },
    sectioncontent: {
        paddingTop: 30,
        paddingHorizontal: 20,
        flexDirection: 'column',
        gap: 10
    },
    back: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },
    addMedicationText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInput: {
        height: 50,
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 10
    },
    inputs: {
        flexDirection: 'column',
        gap: 10
    },
    errorText: {
        fontSize: 12,
        marginTop: 4,
        marginLeft: 12,
    },
    frequencyHeader : {

    },
    frequencyContainer : {
      marginTop : 20
    },
    frequencyHeaderText:{
        fontSize : 18,
        fontWeight : 'bold'
    }

})