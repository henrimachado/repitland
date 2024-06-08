import React, { ReactNode } from "react";
import { Textos } from "../../pages/SecurityPolicy/Logged/SecurityPolicy.style";
import { Container, Content, Title } from "./FAC.style";
import { IoIosArrowUp } from "react-icons/io";

interface IFacProps {
  title: string;
  children: ReactNode;
}
const FAC = ({ title, children }: IFacProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Title onClick={handleClick} className={open ? "openTitle" : ""}>
        <h3>{title}</h3>
        <IoIosArrowUp className="icon" />
      </Title>
      {open && (
        <Content className={open ? "openContent" : ""}>{children}</Content>
      )}
    </Container>
  );
};

export default FAC;
