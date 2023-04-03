import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Zamówienia</Heading>
			<FooterLink href="#">Dostawy</FooterLink>
			<FooterLink href="#">Raty</FooterLink>
			<FooterLink href="#">Leasing</FooterLink>
			<FooterLink href="#">Zwroty i reklamacje</FooterLink>
			<FooterLink href="#">FAQ</FooterLink>
		</Column>
		<Column>
			<Heading>Promocje i inspiracje</Heading>
			<FooterLink href="#">Wyprzedaż</FooterLink>
			<FooterLink href="#">Gorący strzał</FooterLink>
			<FooterLink href="#">Promocje</FooterLink>
			<FooterLink href="#">Karty podarunkowe</FooterLink>
			<FooterLink href="#">Aktualności</FooterLink>
		</Column>
		<Column>
			<Heading>X-kom</Heading>
			<FooterLink href="#">O nas</FooterLink>
			<FooterLink href="#">Regulamin</FooterLink>
			<FooterLink href="#">Kontakt</FooterLink>
			<FooterLink href="#">Polityka prywatności</FooterLink>
		</Column>
		<Column>
			<Heading>Media Społecznościowe</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
