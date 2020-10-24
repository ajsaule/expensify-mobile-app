import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#e5faef'
  },
  text: {
    color: 'darkslateblue',
    fontSize: 25,
    textAlign: 'center'
  }
})