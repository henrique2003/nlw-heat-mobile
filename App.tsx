import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AuthProvider } from './src/hooks/auth'
import { Home } from './src/screens'
import { theme, ThemeProvider } from './src/themes'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          style="light"
          translucent
          backgroundColor="transparent"
        />
        <Home />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
