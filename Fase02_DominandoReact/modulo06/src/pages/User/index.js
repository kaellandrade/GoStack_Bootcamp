import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import {
    Container,
    Bio,
    Profile,
    Avatar,
    Name,
    Header,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
    Stars,
} from './styles';
// TODO: CARREGAR MAIS ITEM QUANDO CHEGAR AO FIM DA LISTA onEndReached e add um loading e add WEB VIEW

const renderStars = ({ item }) => {
    return (
        <Starred>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
            </Info>
        </Starred>
    );
};

const User = ({ route }) => {
    const user = route.params.user;
    const [stars, setStars] = useState([]);
    useEffect(() => {
        getRepos();
    }, []);

    const getRepos = async () => {
        const response = await API.get(`/users/${user.login}/starred`);
        setStars(response.data);
    };

    return (
        <Container>
            <Header>
                <Avatar source={{ uri: user.avatar }} />
                <Profile>
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Profile>
            </Header>
            <Stars
                data={stars}
                key={(star) => String(star.id)}
                renderItem={renderStars}
            />
        </Container>
    );
};

export default User;
