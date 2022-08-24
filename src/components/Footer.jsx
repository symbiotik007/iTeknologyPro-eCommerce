import styled from "styled-components"
import { Facebook, Instagram, Twitter } from "@material-ui/icons"

const Container = styled.div`
display: flex;


`

const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;

`

const Logo = styled.div`
`


const Description = styled.div`
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex; 

`


// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`





const Center = styled.div`
    flex: 1;
    padding: 20px;

`

const Title = styled.h3`
    margin-bottom: 30px; 

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap; 
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>iTeknology</Logo>
                <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit inventore assumenda repellendus quis perspiciatis temporibus ipsa enim, ut cum itaque adipisci officiis tempore architecto maiores eligendi voluptatum vel dignissimos!</Description>
                <SocialContainer>
                    <SocialIcon color="0050FF">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="00d0ff">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="ff0050">
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Links utiles
                </Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Hombres</ListItem>
                    <ListItem>Mujeres</ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Mi Cuenta</ListItem>
                    <ListItem>Seguimiento de mi Pedido</ListItem>
                    <ListItem>Lista de deseos</ListItem>
                    <ListItem>Términos y Condiciones</ListItem>
                </List>

            </Center>
            <Right>

            </Right>
        </Container>
    )
}

export default Footer