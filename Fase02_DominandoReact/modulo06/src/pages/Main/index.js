import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    InputIcon,
    List,
    User,
    Avatar,
    Name,
    ProfileButton,
    ProfileButtonText,
    Bio,
} from './styles';
import API from '../../services/api';

const renderUser = ({ item }) => {
    return (
        <User>
            <Avatar source={{ uri: item.avatar }} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>
            <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
            </ProfileButton>
        </User>
    );
};

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
            id: response.data.id,
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
                        color="#8e8e8e"
                        style={{ padding: 6 }}
                    />
                </InputIcon>
                <SubmitButton onPress={handleAddUser}>
                    <Icon name="add" size={20} color="#FFF" />
                </SubmitButton>
            </Form>
            <List
                data={users}
                keyExtractor={(user) => user.id}
                renderItem={renderUser}
            />
        </Container>
    );
};

export default Main;
