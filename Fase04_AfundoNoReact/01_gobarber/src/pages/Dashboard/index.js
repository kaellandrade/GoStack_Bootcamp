import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {
    format,
    addDays,
    subDays,
    setHours,
    setMinutes,
    setSeconds,
    isBefore,
    isEqual,
    parseISO,
    setMilliseconds
} from 'date-fns';
import {ptBR} from "date-fns/locale";
import {useMemo, useState, useEffect} from "react";
import {utcToZonedTime} from "date-fns-tz";
import {Container, Time} from "./styles";
import api from "../../services/api";

const DashBoard = () => {
    // TODO:  Migrar isso para o backend;
    const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormatted = useMemo(() => format(date, "d 'de' MMMM", {locale: ptBR}), [date]);

    useEffect(() => {
        async function loadSchedule() {
            const response = await api.get('schedule', {
                params: {date}
            });

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;


            const data = range.map(hour => {
                    const checkDate = setMilliseconds(setSeconds(setMinutes(setHours(date, hour), 0), 0),0);
                    const compareDate = utcToZonedTime(checkDate, timezone)
                    console.tron.log(compareDate);
                    return {
                        time: `${hour}:00h`,
                        past: isBefore(compareDate, new Date()),
                        appointment: response.data.find(a => isEqual(parseISO(a.date), compareDate))
                    };
                });
            setSchedule(data);
        }
        loadSchedule();
    }, [date]);

    /**
     * Subtrai um número de dias de uma deternada data.
     * @param numberDays
     */
    const handleSubDays = (numberDays) => {
        const newDate = subDays(date, numberDays);
        setDate(newDate);
    }

    /**
     * Adiciona um número de dias de uma deternada data.
     * @param numberDays
     */
    const handleAddDays = (numberDays) => {
        const newDate = addDays(date, numberDays);
        setDate(newDate);
    }

    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={36} color="#FFF" onClick={_ => handleSubDays(1)}/>
                    <strong>{dateFormatted}</strong>
                    <MdChevronRight size={36} color="#FFF" onClick={_ => handleAddDays(1)}/>
                </button>
            </header>

            <ul>
                { schedule.map(time => (
                    <Time key={time.time} past={time.past} opened={!time.appointment} available={!time.appointment} >
                        <strong>{time.time}</strong>
                        <span>{time.appointment ? `Agendado com ${time.appointment.user.name}` : 'Em aberto'}</span>
                    </Time>
                ))}
            </ul>

        </Container>)
}
export default DashBoard;
