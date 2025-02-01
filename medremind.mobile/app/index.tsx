import { Text, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";


export default function App() {
    const router= useRouter();
    useEffect(()=>{ router.replace('/auth/auth')},[router])
    return <View>
        <Text>one</Text>
    </View>;
}