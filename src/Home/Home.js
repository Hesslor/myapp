import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';
import firestore from "@react-native-firebase/firestore"
import style from './style'
import { useRoute } from '@react-navigation/native';

const Home = () => {

    const [amount, setAmount] = useState('');
    const route = useRoute();
    const {Id} = route.params

    const updateData = async () => {
        await firestore()
            .collection("Users")
            .doc(Id)
            .update({amountpaid: amount})
            .then( () => {
                console.warn("payment updated")
            })
    }

    const handleSubmit = () => {
        const Amount = amount + "000";
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_ciPrsItiMtTxNz', // Your api key
            amount: Amount ,
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then( () => {
            // handle success
            alert(`Success: ${amount}`);
            updateData();

          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
    }

//

  return (
    <View style={style.container}>
        <TextInput style={style.input} placeholder='Enter the amount' keyboardType= "phone-pad" placeholderTextColor="blue" onChangeText={text => setAmount(text)} value={amount}/>
        <TouchableOpacity style={style.subView} onPress={handleSubmit}>
            <Text style={style.subText}>
                Pay
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home