import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { NativeRouter, Switch, Route, Link } from "react-router-native"
import Header from './components/Header'
import Tracker from './components/Tracker'
import Home from './components/Home'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
          <Header />
          <Text>Working Not working </Text>
          <Switch>
            <Route path="/tracker" component={Tracker} />
            <Route path="/" component={Home} />
          </Switch>
      </View>
    </NativeRouter>
  )
}

Header.defaultProps = {
  title: 'Expense tracker'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  text: {
    color: 'darkslateblue',
    fontSize: 50
  }
})