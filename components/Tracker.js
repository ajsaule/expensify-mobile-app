import  React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Button, TextInput, FlatList } from 'react-native'
// import { uuid } from 'uuidv4'

export default function Events({ history }) {

    const [amount, setAmount] = useState(null)
    const [type, setType] = useState(null)
    const [expenseArr, setExpenseArr] = useState([])
    const [list, setList] = useState(null)
    
    const handleSubmit = () => {
        setExpenseArr({...expenseArr, "amount": amount, "type": type })
        // let { name, value } = e // how do I reset the text field without using inner HTML ?? 
        // expenseArr.push(expense)
        // console.log(expenseArr)
        printItems()
    }
    
    // const handleChange = (e, stateObject) => {
    //     console.log(e)
    //     const { name, value } = e 
    //     console.log(name)
    //     console.log(value)
    //     setExpense({ ...stateObject, [name]: value })
    // }

    const printItems = () => {
        // how can we simplify the loop here ? 
        console.log(expenseArr)
        let output = expenseArr.map((item, key) => {
            return (
                <Text key={key}>  
                    You bought {item.amount} for {item.type}
                </Text>
            )
        })
        setList(output)
    }

    const handleDelete = (e) => {
        e.target.style.opacity = 0
    } 

    return (
        <View>
            <Button title="Back" onPress={() => history.push('/')}></Button>
            <Text>Calculate your expenses</Text>
            <Text>How much you spent</Text>
            <TextInput onChangeText={(number) => setAmount(number)} name="amount" type="number" />
            <Text>What did you spend it on</Text>
            <TextInput onChangeText={(expense) => setType(expense)} name="type" type="text" />
            <Button onPress={handleSubmit} type="submit" title="Log"/>
            <Text>Expenses</Text>
            <Text>
                {list}
            </Text>
            {/* <FlatList
                data={expenseArr}
                renderItem={({ expenseArr }) => (
                    <Text>{expenseArr}</Text>
                )}
                keyExtractor={expenseArr => expenseArr.id}
            /> */}
        </View>
    )
}

// remove list item button 
// <button onClick={() => remove(key)}></button>