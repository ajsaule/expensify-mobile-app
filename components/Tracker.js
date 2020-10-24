import  React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { Link } from 'react-router-native'

export default function Events() {

    const [expense, setExpense] = useState(null)
    const [expenseArr, setExpenseArr] = useState([])
    const [list, setList] = useState(null)
    
    const handleSubmit = (e) => {
        let { name, value } = e.target // how do I reset the text field without using inner HTML ?? 
        e.preventDefault()
        expenseArr.push(expense)
        console.log(expenseArr)
    }
    
    const handleChange = (e, stateObject) => {
        const { name, value } = e.target
        setExpense({ ...stateObject, [name]: value })
    }

    const printItems = () => {
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
            <Link to={'/'}>
                <Button>Back</Button>
            </Link>
            <Text>Calculate your expenses</Text>
            <form onSubmit={handleSubmit}>
                <Text>How much you spent</Text>
                <input onChange={(e) => handleChange(e, expense)} name="amount" type="number" />
                <Text>What did you spend it on</Text>
                <input onChange={(e) => handleChange(e, expense)} name="type" type="text" />
                <input onClick={printItems} type="submit" value="Log"/>
            </form>
            <Text>Expenses</Text>
            <Text>
                {list}
            </Text>
        </View>
    )
}

// remove list item button 
// <button onClick={() => remove(key)}></button>