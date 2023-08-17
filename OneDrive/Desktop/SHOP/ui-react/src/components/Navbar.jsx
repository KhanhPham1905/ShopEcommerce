import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {mobile} from "../responsive"
import { useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userRedux';
import { useNavigate } from "react-router-dom";

const Container =  styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`
// pading căn lề  top , left 
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding: "5px 0px"})}
`

const Left = styled.div`
    // width: 33.3%
    flex:1;
    display: flex;
    align-items:center;
`

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display: "none"})}
`
const SearchContainer= styled.div`
    border: 2px solid lightgray;
    display: flex;
    align-items:center;
    margin-left:25px; // cho bên ngoài
    padding: 5px; // padding là cho bên trong
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`

const Center = styled.div`
    flex:1;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    text-align:center;

`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`


const Logout = styled.button`
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:2, justifyContent:"center"})}


`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    const dispatch = useDispatch();
    const navigator = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout()); // Gọi hàm xử lý đăng xuất
      navigator("/login"); // Chuyển hướng đến trang đăng nhập
    };
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>KHANH.</Logo>

            </Center>


            <Right>
                <Logout onClick={handleLogout}>LOGOUT</Logout>
                <MenuItem> REGISTER</MenuItem>
                <MenuItem> SIGN IN</MenuItem>
                <Link to ="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
