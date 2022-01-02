import React, { useState, useEffect } from 'react';
import { BsGithub, BsPlusLg } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import { Form, SubmitButton, List } from './styles';
import Container from '../../Components/Container/index';

const Main = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [haveError, setError] = useState(false);

    /**
     * Semelhante ao componentDidMount
     */
    useEffect(() => {
        const localRepos = JSON.parse(localStorage.getItem('repos')) || [];
        setRepositories(localRepos);
    }, []);

    const saveLocalStorage = (repo) => {
        setRepositories([...repositories, repo]);
        localStorage.setItem('repos', JSON.stringify([...repositories, repo]));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await API.get(`repos/kaellandrade/${newRepo}`);
            const data = {
                name: response.data.full_name,
                description: response.data.description,
                created_at: response.data.created_at,
                id: response.data.id,
            };
            // Verificando se o repo já não foi adicionado.
            const isDuplicated = repositories.some(({id})=>data.id === id)
            if(isDuplicated){
                throw new Error('Repositório duplicado');
            }

            setNewRepo('');
            setLoading(false);
            saveLocalStorage(data);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <Container>
            <h1>
                <BsGithub /> Repositórios
            </h1>
            <Form onSubmit={handleSubmit} error={haveError}>
                <input
                    value={newRepo}
                    type="text"
                    placeholder="Adicionar Repositório"
                    onChange={(e) => {
                        setNewRepo(e.target.value);
                        setError(false);
                    }}
                />
                <SubmitButton loading={loading ? 1 : undefined}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <BsPlusLg className="spinner" color="#FFF" size={14} />
                    )}
                </SubmitButton>
            </Form>
            <List>
                {repositories.map(({ name }, index) => (
                    <li key={index}>
                        <span>{name}</span>
                        <Link to={`/repository/${encodeURIComponent(name)}`}>
                            Detalhe
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    );
};

export default Main;
