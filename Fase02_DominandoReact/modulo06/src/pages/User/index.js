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
import { ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

const User = ({ route, navigation }) => {
    const handleNavigate = (star) => {
        navigation.navigate('Star', { star });
    };

    const renderStars = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={(_) => handleNavigate(item)}>
                <Starred>
                    <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                    <Info>
                        <Title>{item.name}</Title>
                        <Author>{item.owner.login}</Author>
                    </Info>
                </Starred>
            </TouchableWithoutFeedback>
        );
    };

    const user = route.params.user;
    const [stars, setStars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refre, setRefresh] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        getRepos();
    }, [page]);

    const loadMore = (_) => {
        setPage(page + 1);
    };
    const refresh = (_) => {
        setRefresh(true);
        setPage(1);
    };

    const getRepos = async () => {
        try {
            const response = await API.get(
                `/users/${user.login}/starred?page=${page}`
            );
            setStars(response.data);
            // Fim dos repositórios favoritos
            if (response.data.length === 0) {
                setPage(1);
            }

            setLoading(false);
            setRefresh(false);
        } catch (error) {
            console.log(error);
        }
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
                    onRefresh={refresh}
                    refreshing={refre}
                />
            )}
        </Container>
    );
};

export default User;
