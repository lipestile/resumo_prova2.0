import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { Avatar, Card, IconButton } from 'react-native-paper'

export default function User(props) {

    const[usuario, setusuarios] = useState([])
    const usuarioId = props.route.params.id
    console.log(usuarioId)
    

    useEffect(() => {
        Api.get('/users/' + usuarioId)
            .then(respose => {
                console.log(respose.data)
                setusuarios(respose.data)
            })
            .catch(erro => {
                console.error('deu erro na api usuario')
            })


    }, [])

  return (
    <View>
       <Card onPress={ ()=>{}}>
                        <Card.Title
                            title={usuario?.username}
                            subtitle={usuario?.email}
                            left={() => <Avatar.Image size={48} source={{ uri: usuario.image }} />}
                            right={() => <IconButton  icon='chevron-right'/>}
                        />
                        <Card.Cover source={{uri:usuario?.image}}></Card.Cover>
                    </Card>
    </View>
  )
}

const styles = StyleSheet.create({})