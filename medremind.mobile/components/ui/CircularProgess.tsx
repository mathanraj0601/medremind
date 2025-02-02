import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import Svg, { Circle } from "react-native-svg";


const { width } = Dimensions.get('window')
const AnimatedCircle = Animated.createAnimatedComponent(Circle);


const CircularProgess = ({ completedDose, progress, totalDose }: CircularProgressProps) => {
    const colors = useThemeColor();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const circleWidth = width * 0.55
    const strokeWidth = 15
    const radius = (circleWidth - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [circumference, 0]
    })

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: progress,
            useNativeDriver: true,
            duration: 1500
        }).start()
    }, [progress])

    return (
        <View style={styles.circularProgressContainer}>
            {/* Info texr */}
            <View style={styles.infoTextContainer}>
                <Text style={[styles.infoPercentages, { color: colors.white }]}>
                    {progress * 100}%
                </Text>
                <Text style={[styles.infoText, { color: colors.white }]}>
                    {completedDose} of {totalDose} doeses
                </Text>
            </View>
            <Svg
                width={circleWidth}
                height={circleWidth}
                style={styles.ring}
            >
                <Circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    r={radius}
                    stroke={colors.logoDarkShade}
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <AnimatedCircle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    r={radius}
                    stroke={colors.logoLightShade}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    fill="none"
                    strokeLinecap="round"
                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                />
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    circularProgressContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    infoTextContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1
    },
    ring: {
        transform: [{ rotate: '-90deg' }]

    },
    infoText: {
        fontSize: 12,
        fontWeight : 'semibold'
    },
    infoPercentages: {
        fontSize: 32,
        fontWeight : 'bold'
    }
})

export default CircularProgess