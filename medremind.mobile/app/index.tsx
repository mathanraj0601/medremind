import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";

export default function SplashScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const colors = useThemeColor();

  useEffect(()=>{
    Animated.parallel([
      Animated.timing(fadeAnim,{
        toValue : 1,
        duration : 1000,
        useNativeDriver : true
      }),
      Animated.spring(scaleAnim,{
        toValue : 1,
        useNativeDriver : true,
        tension : 10,
        friction : 2
      }),
    ]).start()

    const timer = setTimeout(()=>{ router.replace('/auth/auth')},1000)
    return () => clearTimeout(timer)
  },[router])
  return <View style={[styles.splashScreenContainer,  { backgroundColor : colors.primary } ]}>
    <Animated.View style={[styles.iconContainer,
      {
        opacity : fadeAnim,
        transform : [{scale : scaleAnim}]
      }
    ]}>
      <Ionicons name="medical" size={150} color={colors.white} />
      <Text style={[styles.appName , {color : colors.white}]}> { text.title.toUpperCase() }</Text>
    </Animated.View>
  </View>
}

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex:1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer : {
    alignItems:'center'
   },
   appName : {
    fontSize : 24,
    fontWeight : "semibold",
    letterSpacing:1
   }
});


const text = {
  title : 'Medremind'
}