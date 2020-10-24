import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { NativeRouter, Switch, Route, Link } from "react-router-native"

export default function Home({ history }) {
    return (
        <View>
            <Text> Splash page with cool GIF animation thingy</Text>
            <Button
                title="Log expenses"
                onPress={() => history.push('/tracker')}>
            </Button>
        </View>
    )
}
