import "../styles/biografia.css";
import { Title } from "../components/Title";


function Biografia() {
  return (
    <div className="container">
      <Title text="Quem sou eu" />
      <img
        className="fotoVitor"
        src="/images/foto-bio.jpeg"
        alt="Foto de Vítor Hugo"
      />
      <p className="descricao">
        Olá! Meu nome é Vítor Hugo Mendes, nascido em 2005, atualmente trabalho como
        analista de suporte do ERP Protheus, da TOTVS, na empresa Cooprata. Sou
        estudante de análise e desenvolvimento de sistemas e apaixonado pela
        tecnologia. 
        Meu foco é a experiência do usuário, e tenho interesse especial
        em desenvolvimento front-end, onde busco aplicar conceitos de design e
        usabilidade. <br></br><br></br>Tenho uma enorme facilidade em encontrar soluções criativas
        e resolver problemas, o que me motiva a buscar sempre novos desafios na
        área de TI. 
         Este é um projeto simples que fiz para demonstrar minhas
        habilidades no desenvolvimento de aplicativos mobile e web utilizando
        React e React Native, juntamente de frameworks como Vite e Expo. Espero
        que goste! 😉
      </p>
      <div className="RedesSociais"> 
      <a className="linkRedesSociaisLinkedin" href="https://www.linkedin.com/in/v%C3%ADtor-hugo-mendes-163a91336/" target="_blank" rel="noopener noreferrer">
      <button className="btnLinkedin">
        <img
          src="/images/linkedin-icon.png"
          alt="icon"
          className="btnIcon"
        />
        LinkedIn
      </button>
      </a>
      <a className="linkRedesSociaisGit" href="https://github.com/vh-mendes" target="_blank" rel="noopener noreferrer">
      <button className="btnGitHub">
        <img
          src="/images/github-icon.png"
          alt="icon"
          className="btnIcon"
        />
        GitHub
      </button>
      </a>
      </div>
    </div>
  );
}

export default Biografia;
