import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

const App = ():JSX.Element => {
  const isDarkMode=useColorScheme()==="dark"
  return (
   <SafeAreaView style={styles.container}>
    <View>
      <Text style={isDarkMode?styles.whiteText:styles.darkText}>Hello</Text>
    </View>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"

  },
  darkText:{
    color:"#000000"
  },
  whiteText:{
    color:"#ffffff"
  }
})