import React, { useEffect, useState } from 'react';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { FaSpinner, FaArrowLeft, FaCalendar } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import API from '../../services/api';

import { Loading, Owner, ButtonBack, IssueList, Label } from './styles';

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
                    </li>
                ))}
            </IssueList>
        </Container>
    );
}

export default Repository;
