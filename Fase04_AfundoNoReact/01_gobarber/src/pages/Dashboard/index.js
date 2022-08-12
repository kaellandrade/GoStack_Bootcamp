/**
 * Página do DashBoard
 * @returns {JSX.Element}
 * @constructor
 */
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Container, Time} from "./styles";

const DashBoard = () => (
    <Container>
        <header>
            <button type="button">
                <MdChevronLeft size={36} color="#FFF"/>
                <strong>31 Maio</strong>
                <button type="button">
                    <MdChevronRight size={36} color="#FFF"/>
                </button>
            </button>
        </header>

        <ul>
            <Time past>
                <strong>08:00</strong>
                <span>Micael Andrade</span>
            </Time>
            <Time available>
                <strong>09:00</strong>
                <span>Em aberto</span>
            </Time>
            <Time>
                <strong>10:00</strong>
                <span>Daniel</span>
            </Time>
            <Time>
                <strong>11:00</strong>
                <span>Daniel</span>
            </Time>
        </ul>

    </Container>
)
export default DashBoard;
