import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, IconButton, Text, } from 'react-native-paper'
import Api from '../../services/Api'
import { FlatList } from 'react-native-gesture-handler'

export default function Home(props) {

    const navigation = props.navigation
   
    const [usuarios, setusuarios] = useState([])


    useEffect(() => {
        Api.get('/users')
            .then(respose => {
                // console.log(respose.data.users)
                setusuarios(respose.data.users)
            })
            .catch(erro => {
                console.error('deu erro na api usuario')
            })


    }, [])

    return (
        <View>
            <FlatList
                data={usuarios}
                renderItem={({ item, index }) => {
                    return (
                    <Card onPress={ () => {
                        navigation.navigate('Usuario', {id: item. id})
                    }}>
                        <Card.Title
                            title={index + ': ' + item.username}
                            subtitle={item.email}
                            left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
                            right={() => <IconButton  icon='chevron-right'/>}

                        />
                    </Card>
                    )


                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})