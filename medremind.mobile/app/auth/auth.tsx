import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
import * as LocalAuth from 'expo-local-authentication'
import {  useRouter } from 'expo-router'

const { width } = Dimensions.get('window');

export default function Auth() {
    const colors = useThemeColor();
    const [hasBioMetrics, setHasBioMetrics] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const router = useRouter();
    const checkBioMetrics = async () => {
        const hasBioMetrics = await LocalAuth.hasHardwareAsync();
        const isEnrolled = await LocalAuth.isEnrolledAsync();

        console.log(hasBioMetrics, isEnrolled)
        setHasBioMetrics(hasBioMetrics && isEnrolled)
    }

    const authenticate = async () => {
        try {

            setError(null)
            setIsAuthenticating(true)

            const hasHardWare = await LocalAuth.hasHardwareAsync();
            const supportTypes  = await LocalAuth.supportedAuthenticationTypesAsync();
            const hasBioMetrics = await LocalAuth.isEnrolledAsync();

            const auth = await LocalAuth.authenticateAsync({
                promptMessage : hasHardWare && hasBioMetrics ? text.bioMetrics : text.pin,
                fallbackLabel: "Use pin",
                cancelLabel : 'Cancel',
                disableDeviceFallback : false
            })

            if(auth.success){
               router.replace('/splashScreen/splashscreen')
            }
            else{
                setError(text.errorAuthAgain)
            }
           
        }
        catch (err) {
            setError(text.errorTryAgain)
        }
        finally {
            setIsAuthenticating(false)
        }

    }

    useEffect(() => {
        checkBioMetrics()
    }, []);

    return (
        <LinearGradient colors={["#4CAF50", "#2E7D32"]} style={styles.authContainer}>
            <View style={styles.logoContainer}>
                <View style={[styles.logo, { backgroundColor: colors.logoDarkShade }]}>
                    <Ionicons name='medical' size={80} color={colors.white} />
                </View>
                <Text style={[styles.title, { color: colors.logoLightShade }]}> {text.title}</Text>
                <Text style={[styles.subtitle, { color: colors.logoLightShade }]}>{text.subTitle}</Text>
            </View>

            <View style={[styles.pinContainer, { backgroundColor: colors.white }]}>
                <Text style={[styles.welcomeText, { color: colors.black }]}>{text.welcomeBack}</Text>
                <Text style={[styles.pinText, { color: colors.black }]}>{hasBioMetrics ? text.bioMetrics : text.pin}</Text>
                <TouchableOpacity style={[styles.pinBtnContainer, { backgroundColor: colors.primary }, isAuthenticating && styles.pinBtnContainerDisabled]} disabled={isAuthenticating} onPress={authenticate}>
                    <Ionicons name={hasBioMetrics ? "finger-print-outline" : "keypad-outline"} size={30} style={{ color: colors.white }} />
                    <Text style={[styles.pinBtnText, { color: colors.white }]}> {hasBioMetrics ? text.bioMetricsShort : text.pinShort} </Text>
                </TouchableOpacity>
            </View>


            {error && <View style={[styles.errorContainer, { backgroundColor: colors.dangerBg }]}>
                <Ionicons name="alert-circle" size={20} color={colors.danger} />
                <Text style={[styles.errorText, { color: colors.danger }]}>{error}</Text>
            </View>}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        gap: 10
    },
    logo: {
        borderRadius: 100,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16
    },
    pinContainer: {
        alignItems: 'center',
        marginTop: 30,
        width: width - 40,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        gap: 10,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    pinText: {
        fontSize: 12
    },
    pinBtnContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20,
        gap: 10,
        borderRadius: 10,
    },
    pinBtnContainerDisabled: {
        opacity: 0.7,
    },
    pinBtnText: {
        fontSize: 14,
        fontWeight: 'semibold'
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        gap: 8
    },
    errorText: {
        fontSize: 14,
    },
})

const text = {
    title: 'MedRemind',
    subTitle: 'Your Personal Medication App',
    welcomeBack: 'Welcome Back !',
    pin: 'Enter Your Pin to Access your medications',
    bioMetrics: 'Enter Face ID / Finger Print to access your medication',
    bioMetricsShort: 'Enter Face ID / Finger Print',
    pinShort: 'Enter Pin',
    errorAuthAgain: 'Authentication failed, Please try again',
    errorTryAgain: 'An error occured, Please try again',

}