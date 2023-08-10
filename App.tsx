import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ImageCard from './components/ImageCard'
import BlogCard from './components/BlogCard'
import ContactList from './components/ContactList'

const App = () => {
  const isDarkMode=useColorScheme()==="dark"
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
    <FlatCards/>
    <ImageCard/>
    <BlogCard/>
    <ContactList/>
    </ScrollView>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  darkText:{
    color:"#000000"
  },
  whiteText:{
    color:"#ffffff"
  }
})