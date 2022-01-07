import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton, InputIcon } from './styles';
import API from '../../services/api';

const Main = ({ navigation }) => {
    const [newUser, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const handleAddUser = async () => {
        const response = await API.get(`/users/${newUser}`);
        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
            twitter: response.data.twitter_username,
        };
        setUsers([...users, data]);
        setUser('');
        Keyboard.dismiss();
        console.tron.log(users);
    };

    return (
        <Container>
            <Form>
                <InputIcon>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adiconar usuário"
                        value={newUser}
                        onChangeText={(text) => setUser(text)}
                        returnKeyType="send"
                        onSubmitEditing={handleAddUser}
                    />
                    <Icon
                        onPress={() => setUser('')}
                        name="close"
                        size={25}
                        color="#121214"
                        style={{ padding: 6 }}
                    />
                </InputIcon>
                <SubmitButton onPress={handleAddUser}>
                    <Icon name="add" size={20} color="#FFF" />
                </SubmitButton>
            </Form>
        </Container>
    );
};

export default Main;
