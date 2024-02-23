import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import firestore from "@react-native-firebase/firestore"

const Login = () => {

    const navigation = useNavigation()
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await firestore()
        .collection("Users")
        .where("email", "==", email.trim())
        .get()
        .then(snapshot => {
            if(snapshot.empty){
                console.warn("Invalid Email")
            } else{
                snapshot.forEach( doc => {
                    const respDate = doc.data();
                    if(respDate.password == password.trim()){
                        navigation.push("Home",{email: email,Id: doc.id})
                    } else {
                        console.warn("Invalid Email")
                    }
                })
            } 
        })
    }

  return (
    <View style={style.container}>
        <Text style={style.head}>Login</Text>
        <TextInput style={style.input} placeholder='Email' placeholderTextColor={"blue"} onChangeText={text => setEmail(text)} value={email}/>
        <TextInput style={style.input} placeholder='password' placeholderTextColor={"blue"} secureTextEntry={true} onChangeText={text => setPassword(text)} value={password}/>
        <TouchableOpacity style={style.subView} onPress={handleLogin}>
            <Text style={style.subText}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login