import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import Content from './Content';
// import Image from './Image';
// import Tag from './Tag';
import {CardContainer, ContentContainer, ButtonContainer} from './styles/Container.styles';
import {Tag, H1, P, Image} from './styles/Elements.styles';
import { StyledTitle } from './styles/Custom.styles';

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">Exclusive</Tag>
        <H1><StyledTitle text="React Styled Components" color="#fff"/></H1>
        <P>Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.</P>
        <ButtonContainer>
          <Button link="https:mahmudalam.com" text="Watch now" />
          <Button link="https://github.com/Mahmud-Alam/react-styled-components" text="Github-repo" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="Nerd" width="300px"/>
    </CardContainer>
  );
};