import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive";
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:20px;
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`




const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>KHANHPHAM.</Logo>
        <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nesciunt dignissimos odit, fugit eos iusto eum alias, est, voluptates mollitia voluptatem ducimus maxime deleniti reiciendis at quisquam itaque numquam quo?</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>            
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>            
            <SocialIcon color ="E60023">
                <YouTube/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/> Ngọc Lãng, Ngọc Lâm, Mỹ Hào, Hưng Yên
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 033 241 3650
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>khanh190521@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
};

export default Footer
