import { ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts= [
        {
          "id": 1,
          "name": "Vikas Pandey",
          "imageURL": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
          "phone": "+91-9807362721"
        },
        {
          "id": 2,
          "name": "Akanksha Tripathi",
          "imageURL": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
          "phone": "+91-9580845046"
        },
        {
          "id": 3,
          "name": "Shashank Dubey",
          "imageURL": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
          "phone": "+91-8765001001"
        },
        {
          "id": 4,
          "name": "Shiva Awasthi",
          "imageURL": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
          "phone": "+91-7844031968"
        },
        {
          "id": 5,
          "name": "Vivek Upadhyay",
          "imageURL": "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
          "phone": "+91-7007227809"
        }
      ]
  
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

        {contacts.map((item)=>(

        <View key={item.id} style={styles.bodyContainer}>
            <Image source={{uri:item.imageURL}} style={styles.contactImage}/>
            <View>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactNumber}>{item.phone}</Text>
            </View>
        </View>

        ))}
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
    },
    bodyContainer:{
      flex:1,
      flexDirection:"row",
      marginVertical:6,
      marginHorizontal:8,
      alignItems:"center",
      backgroundColor:"#53BDFF",
      padding:4,
      borderRadius:10
    },
    contactName:{
      fontSize:16,
      fontWeight:"600",
      color:"#ffffff"
    },
    contactNumber:{
      fontSize:14,
      fontWeight:"400",
      color:"grey"
    },
    contactImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:16
    }

})