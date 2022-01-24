import React, { useState, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
    Profile,
    Bio,
    Separator,
} from './styles';
import API from '../../services/api';

const Main = ({ navigation }) => {
    const [newUser, setUser] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAsyncData();
    }, []);

    const addUserStorage = async (newUser) => {
        try {
            const newsUsers = [...users, newUser];
            await AsyncStorage.setItem('@users', JSON.stringify(newsUsers));
            setUsers(newsUsers);
        } catch (error) {
            console.log(error);
        }
    };

    const getAsyncData = async () => {
        try {
            const users = await AsyncStorage.getItem('@users');
            if(users){
                setUsers(JSON.parse(users));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleNavigate = (user) => {
        navigation.navigate('User', {user});
    };

    const renderUser = ({ item }) => {
        return (
            <User onPress={(_) => handleNavigate(item)}>
                <Avatar source={{ uri:   item.avatar }} />
                <Profile>
                    <Name>{item.name}</Name>
                    <Bio>{item.bio}</Bio>
                </Profile>
            </User>
        );
    };

    const handleAddUser = async () => {
        setLoading(true);
        const response = await API.get(`/users/${newUser}`);
        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
            twitter: response.data.twitter_username,
            id: response.data.id,
        };
        if(response){
            addUserStorage(data);
        }
        setUser('');
        Keyboard.dismiss();
        setLoading(false);
    };

    return (
        <Container>
            <Form>
                <InputIcon>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar usuário"
                        value={newUser}
                        onChangeText={(text) => setUser(text)}
                        returnKeyType="send"
                        onSubmitEditing={handleAddUser}
                    />
                    {newUser ? (
                        <Icon
                            onPress={() => setUser('')}
                            name="close"
                            size={25}
                            color="#8e8e8e"
                            style={{ padding: 6 }}
                        />
                    ) : null}
                </InputIcon>
                <SubmitButton loading={loading} onPress={handleAddUser}>
                    {loading ? (
                        <ActivityIndicator color="#FFF" />
                    ) : (
                        <Icon name="add" size={20} color="#FFF" />
                    )}
                </SubmitButton>
            </Form>
            <List
                ItemSeparatorComponent={Separator}
                data={users}
                keyExtractor={(user) => user.id}
                renderItem={renderUser}
            />
        </Container>
    );
};

export default Main;
