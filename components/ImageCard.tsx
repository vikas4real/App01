import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingText}>ImageCard</Text>
        <View style={{alignItems:"center"}}>
      <View style={styles.card}>
        <Image
        source={{uri:"https://images.unsplash.com/photo-1662376107358-21296a9234f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByZW0lMjBtYW5kaXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.title}>Prem Mandir</Text>
            <Text style={styles.location}>Location: Vrindavan</Text>
            <Text style={styles.description}>Prem Mandir is a Hindu temple in Vrindavan, Mathura district, Uttar Pradesh, India. The temple was established by Jagadguru Shri Kripalu Ji Maharaj. It is maintained by Jagadguru Kripalu Parishat, an international non-profit, educational, spiritual, charitable trust.</Text>
        </View>
      </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"500",
        marginHorizontal:8,
        marginBottom:6
    },
    card:{
        backgroundColor:"#ffffff",
        width:350,
        height:360,
        borderRadius:8,
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:8,
    },
    title:{
        color:"#000000",
        fontSize:22,
        fontWeight:"bold"
    },
    location:{
        color:"#000000",
        fontSize:14
    },
    description:{
        color:"#242B2E",
        fontSize:12,
        marginTop:6,
    }


})