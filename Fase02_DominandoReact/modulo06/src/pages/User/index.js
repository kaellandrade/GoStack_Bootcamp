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
    Label,
    Loading,
} from './styles';
import { ActivityIndicator } from 'react-native';
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
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        getRepos();
    }, [page]);

    const loadMore = (_) => {
        console.tron.log(page);
        setPage(page + 1);
    };

    const getRepos = async () => {
        const response = await API.get(
            `/users/${user.login}/starred?page=${page}`
        );
        setStars(response.data);
        setLoading(false);
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
            {loading ? (
                <Loading>
                    <Label>Carregando...</Label>
                    <ActivityIndicator size={60} color="#b3b3b3" />
                </Loading>
            ) : (
                <Stars
                    data={stars}
                    key={(star) => String(star.id)}
                    renderItem={renderStars}
                    onEndReachedThreshold={0.2}
                    onEndReached={loadMore}
                />
            )}
        </Container>
    );
};

export default User;
