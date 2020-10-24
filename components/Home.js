import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { Link } from 'react-router-native'

export default function Home() {
    return (
        <View>
            <Text>Logo with splash image and clickthrough button</Text>
            <Link to={'/tracker'}>
                <Button>Log expenses</Button>
            </Link>
        </View>
    )
}
