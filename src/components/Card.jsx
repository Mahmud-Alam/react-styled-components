import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import Content from './Content';
import Image from './Image';
import Tag from './Tag';
import {CardContainer} from './styles/Container.styles';

export default function Card() {
  return (
    <CardContainer>
      <Content>
        <Tag text="EXCLUSIVE" />
        <h1>React Styled Components</h1>
        <p>Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.</p>
        <div className="buttons">
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github-repo" />
        </div>
      </Content>
      <Image ingSrc={nerdImage} altTag="Nerd" width="300px"/>
    </CardContainer>
  );
};