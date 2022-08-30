import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wraper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const ProductImage = styled.img`
  width: 150px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.span`
  width: 30px;
  border-radius: 30%;
  height: 30px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: 0px solid lightgray;
  border-radius: 10px;
  margin: 6px;
  height: 1px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemPrice = styled.span``;

const MainButton = styled.span`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wraper>
        <Title>Tu carrito</Title>
        <Top>
          <TopButton>REGRESAR A BUSCAR MÁS PRODUCTOS</TopButton>
          <TopTexts>
            <TopText>Tu carrito de compras (2)</TopText>
            <TopText>Tu lista de Deseos (0)</TopText>
          </TopTexts>
          <TopButton type="filled">REALIZAR MI COMPRA</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <ProductImage src="https://ecommercepngs.s3.amazonaws.com/210064..png"></ProductImage>
                <Details>
                  <ProductName>
                    <b>Producto:</b> Blusa Crop Top - Verde
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> BLS1904
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Talla:</b> S
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 120.000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <ProductImage src="https://ecommercepngs.s3.amazonaws.com/210131..-400x533.png"></ProductImage>
                <Details>
                  <ProductName>
                    <b>Producto:</b> Blusa Crop Top - Roja
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> BLS1903
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Talla:</b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40.000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <ProductImage src="https://ecommercepngs.s3.amazonaws.com/210131..-400x533.png"></ProductImage>
                <Details>
                  <ProductName>
                    <b>Producto:</b> Blusa Crop Top - Roja
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> BLS1903
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Talla:</b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40.000</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Resumen de tu orden:</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>160.000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Valor del envío:</SummaryItemText>
              <SummaryItemPrice>7.600</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Descuento en el envío:</SummaryItemText>
              <SummaryItemPrice>-7.600</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total:</SummaryItemText>
              <SummaryItemPrice>160.000</SummaryItemPrice>
            </SummaryItem>
            <MainButton>FINALIZAR MI ORDEN</MainButton>
          </Summary>
        </Bottom>
      </Wraper>
      <Footer />
    </Container>
  );
};

export default Cart;
