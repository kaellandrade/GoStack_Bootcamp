import React, { useState } from 'react';
import { BsGithub, BsPlusLg } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import API from '../../services/api';
import { Container, Form, SubmitButton } from './styles';

const Main = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await API.get(`repos/kaellandrade/${newRepo}`);
        const data = {
            name: response.data.full_name,
            description: response.data.description,
            created_at: response.data.created_at,
        };

        setRepositories([...repositories, data]);
        setNewRepo('');
        setLoading(false);
    };

    return (
        <Container>
            <h1>
                <BsGithub /> Repositórios
            </h1>
            <Form onSubmit={handleSubmit}>
                <input
                    value={newRepo}
                    type="text"
                    placeholder="Adicionar Repositório"
                    onChange={(e) => setNewRepo(e.target.value)}
                />
                <SubmitButton loading={loading ? 1 : undefined}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <BsPlusLg className='spinner' color="#FFF" size={14} />
                    )}
                </SubmitButton>
            </Form>
        </Container>
    );
};

export default Main;
