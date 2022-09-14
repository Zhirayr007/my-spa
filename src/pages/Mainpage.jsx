import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
height: 100px;
background: #ffffff;
padding-top: 50px;
`
const Welcome = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 77px;
color: #000000;
display: block;
text-align: center;
`

const Main = () => {
	return (
		<Wrapper>
			<Welcome>
				Welcome to my SPA
			</Welcome>
		</Wrapper>
	)
}

export { Main }