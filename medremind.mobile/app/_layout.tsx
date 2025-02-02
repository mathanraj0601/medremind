import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Stack screenOptions={{
        header: () => null,
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: 'white' },
        navigationBarHidden: true
      }}>
        <Stack.Screen name='index' options={{
          headerShown: false
        }}>
        </Stack.Screen>
      </Stack>
    </React.Fragment>
  )
}

export default _layout