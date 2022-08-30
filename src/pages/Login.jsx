import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://ecommercepngs.s3.amazonaws.com/nathan-dumlao-LTDuGUByp6Y-unsplash.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  &: hover {
    background-color: #7dc2e8;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Bienvenido, inicia sesión.</Title>
        <Form>
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" />
          <Button>Iniciar sesión</Button>
          <Link>¿Olvidaste tu contraseña?</Link>
          <Link>Crea tu cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
