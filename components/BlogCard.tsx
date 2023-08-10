import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BlogCard() {
    function openWebsite(websiteLink:string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
        <Text style={styles.headingText}>ActionCard</Text>
    <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>What's new in JavaScript?</Text>
        </View>        
        <Image source={{uri:"https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
        style={styles.image}
        />
        <View style={styles.cardBody}>
            <Text numberOfLines={3}>
                Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite("https://blog.learncodeonline.in/whats-new-in-javascript-21-es12")}>
                <Text style={styles.linkButtons}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite("https://www.instagram.com/vikas4real")}>
                <Text style={styles.linkButtons}>Follow me</Text>
            </TouchableOpacity>
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
        marginBottom:6,
        marginTop:6
    },
    card:{
        marginHorizontal:8,
        marginVertical:8,
        borderRadius:6,
    },
    elevatedCard:{
        backgroundColor:"#207398",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4
    },
    headerContainer:{
        height:40,
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        color:"#000",
        fontSize:18,
        fontWeight:"500",
    },
    image:{
        height:240
    },
    cardBody:{
        padding:6
    },
    footerContainer:{
        padding:6,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    linkButtons:{
        fontSize:16,
        color:"#000000",
        backgroundColor:"#ffffff",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:20
    }
})