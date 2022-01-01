import React, { useEffect, useState } from 'react';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import API from '../../services/api';

import { Loading, Owner, ButtonBack } from './styles';

import Container from '../../Components/Container/index';

function Repository() {
    const [StateRepsitory, setRepository] = useState({});
    const [StateIssues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    const { repository } = useParams();
    useEffect(async () => {
        const repoName = decodeURIComponent(repository);

        // Solicitação juntas, porem em paralelo
        const [infoRepo, issues] = await Promise.all([
            API.get(`/repos/${repoName}`),
            API.get(`/repos/${repoName}/issues`),
        ]);
        setRepository(infoRepo.data);
        setIssues(issues.data);
        setLoading(false);
    }, []);
    if (loading) {
        return (
            <Loading>
                <h1>Carregando</h1>
                <FaSpinner size={60} />
            </Loading>
        );
    }
    return (
        <Container>
            <ButtonBack>
                <Link to="/">
                    <FaArrowLeft size={30} />
                </Link>
            </ButtonBack>
            <Owner>
                <img
                    src={StateRepsitory.owner.avatar_url}
                    alt={StateRepsitory.owner.login}
                />
                <div>
                    <h1>{StateRepsitory.name}</h1>
                    <p>{StateRepsitory.description}</p>
                </div>
            </Owner>
        </Container>
    );
}

export default Repository;
