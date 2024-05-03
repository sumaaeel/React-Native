import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Input = (props) => {
    const [ text, OnChangeText]=useState()
  return (
    <View style={{backgroundColor:'gray', borderRadius:100, height:50, paddingLeft:18, width:'80%',}} >
      <TextInput placeholder={props.placeholder}
        onChangeText={OnChangeText}
        value={text}
        style={{}}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})