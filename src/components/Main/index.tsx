import * as Styled from "./styles";

const Main = ({
	title = "React Avançado",
	description = "TypeScript, React.js, Next.js e Styled Components"
}) => {
	return (
		<Styled.Wrapper>
			<Styled.Logo
				src="/img/logo.svg"
				alt="Imagem de um atomo e React Avançado escrito ao lado."
			/>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Description>{description}</Styled.Description>
			<Styled.Illustration
				src="/img/hero-illustration.svg"
				alt="Um desenvolvedor de frente para tela com codigo"
			/>
		</Styled.Wrapper>
	);
};

export default Main;
