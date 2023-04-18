import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #cc9767;
position: sticky;
top: 0;
height: 65px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((85vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #262626;
display: flex;
align-items: center;
text-decoration: none;
padding: 2%;
height: 100%;
cursor: pointer;
&.active {
	color: #fde1bd;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #262626;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
