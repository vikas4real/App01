import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Yellow</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"500",
        marginHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:"row"
    },
    card:{
        width:100,
        height:100,
        margin:8,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8
    },
    cardOne:{
        backgroundColor:"#EB4D4B",
    },
    cardTwo:{
        backgroundColor:"#1C8D73",
    },
    cardThree:{
        backgroundColor:"#1B98F5",
    },
    cardFour:{
        backgroundColor:"#F4CE6A"
    }
    
})