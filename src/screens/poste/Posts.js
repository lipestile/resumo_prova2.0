import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
import Api from '../../services/Api'

export default function Posts(props) {

    const navigation = props.navigation
    const usuario = props.route.params
    const[poste, setposte] = useState([])


    useEffect(() => {
        Api.get('/users/' + usuario.id + '/posts/')
            .then(respose => {
                setposte(respose.data.posts)
            })
            .catch(erro => {
                console.error('deu erro na api usuario')
            })


    }, [])


  return (
    <View>
       <Card onPress={ ()=>{
        navigation.navigate('Postes', usuario)
       }}>
                        <Card.Title
                            title={usuario?.username}
                            subtitle={usuario?.email}
                            left={() => <Avatar.Image size={48} source={{ uri: usuario.image }} />}
                            right={() => <IconButton  icon='chevron-right'/>}
                        />

                        <Card.Content>
                            <FlatList
                            data={poste}
                            renderItem={({item}) =>{
                                return(
                                    <View>
                                    <Text variant='titleLarge'>{item.title}</Text>
                                    <Text>{item.body}</Text>
                                    </View>
                                )
                            }}/>
                        </Card.Content>
                    </Card>
    </View>
  )
}

const styles = StyleSheet.create({})