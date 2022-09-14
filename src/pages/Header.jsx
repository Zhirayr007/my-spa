import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { Main } from './Mainpage';
import Exchange_rate from './Exchange rate';
import Mortgage_credit from './Mortgage credit';
import Notfoundpage from './Notfoundpage';
import TodoList from './TodoList';
const Header = styled.header`
width: 100%;
height: 100px;
background: #000000;
display:flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
margin-left: 50px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 77px;

color: #FF8730;
`
const Menu = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-right: 50px;
`
const Menu__main = styled.div`
a{
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 29px;
	margin-right: 40px;
	color: #FFFFFF;
}
`
const Menu__exchange_rate = styled.div`
a{
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 29px;
	margin-right: 40px;
	color: #FFFFFF;
}
`
const Menu__mortgage_credit = styled.div`
a{
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 29px;
	margin-right: 40px;
	color: #FFFFFF;
}
`
const Menu__TodoList = styled.div`
a{
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 29px;
	
	color: #FFFFFF;
}
`

function HEADER() {
	return (
		<>
			<Header>
				<Logo>
					DZ
				</Logo>
				<Menu>
					<Menu__main> <Link to="/">Главная страница</Link> </Menu__main>
					<Menu__exchange_rate><Link to="/exchange_rate">Курсы валют</Link></Menu__exchange_rate>
					<Menu__mortgage_credit><Link to="/mortgage_credit">Калькулятор ипотеки</Link></Menu__mortgage_credit>
					<Menu__TodoList><Link to="/todolist">Список задач</Link></Menu__TodoList>
				</Menu>
			</Header>
			<Routes >
				<Route path="/" element={<Main />} />
				<Route path="/exchange_rate" element={<Exchange_rate />} />
				<Route path="/mortgage_credit" element={<Mortgage_credit />} />
				<Route path="/todolist" element={<TodoList />} />
				<Route path="*" element={<Notfoundpage />} />
			</Routes>
		</>

	);
}
export default HEADER;