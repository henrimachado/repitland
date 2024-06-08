import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalStorage";

interface HeadProps {
  title: string;
}
const Head = ({ title }: HeadProps) => {
  const global = useContext(GlobalContext);

  React.useEffect(() => {
    document.title = "Reptilândia | " + title;
    global.setTitle(title);
  }, [title]);

  return true;
};

export default Head;
