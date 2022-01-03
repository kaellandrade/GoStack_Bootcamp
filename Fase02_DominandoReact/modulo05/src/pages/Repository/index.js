import React, { useEffect, useState } from 'react';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { FaSpinner, FaArrowLeft, FaCalendar } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import API from '../../services/api';

import {
    Loading,
    Owner,
    ButtonBack,
    IssueList,
    Label,
    Select,
    State,
} from './styles';

import Container from '../../Components/Container/index';

function Repository() {
    const [StateRepsitory, setRepository] = useState({});
    const [StateIssues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    const { repository } = useParams();
    useEffect(async () => {
        const repoName = decodeURIComponent(repository);

        // Solicitação juntas, porem em paralelo
        const [infoRepo, issues] = await Promise.all([
            API.get(`/repos/${repoName}`),
            API.get(`/repos/${repoName}/issues?page=${1}&per_page=10&state=${filter}`),
        ]);
        setRepository(infoRepo.data);
        setIssues(issues.data);
        setLoading(false);
        console.log(issues.data);
        console.log(infoRepo.data);
    }, [filter]);
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
                    <span>
                        <FaCalendar />
                        {format(
                            parseISO(StateRepsitory.created_at),
                            " dd MMMM 'de' YYY ",
                            {
                                locale: pt,
                            }
                        )}
                    </span>
                </div>
            </Owner>
            <Select>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Todas</option>
                    <option value="closed">Fechdas</option>
                    <option value="open">Abertas</option>
                </select>
            </Select>
            <IssueList>
                {StateIssues.map((issue) => (
                    <li key={String(issue.id)}>
                        <img
                            src={issue.user.avatar_url}
                            alt={issue.user.login}
                        />
                        <div>
                            <strong>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={issue.html_url}
                                >
                                    {issue.title}
                                </a>
                                {issue.labels.map((label) => (
                                    <Label
                                        cor={label.color}
                                        key={String(label.id)}
                                    >
                                        {label.name}
                                    </Label>
                                ))}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <State state={issue.state}>
                            {issue.state.toUpperCase()}
                        </State>
                    </li>
                ))}
            </IssueList>
        </Container>
    );
}

export default Repository;
