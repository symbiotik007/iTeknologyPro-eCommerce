import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;

`

const Announcement = () => {
    return (
        <Container>
            Gran ofertazo! Envios gratis a partir de $200.000
        </Container>
    )
}



export default Announcement