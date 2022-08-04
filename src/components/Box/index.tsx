import { ReactElement } from "react";

// Styles
import { BoxStyled } from "./styles";
export interface Props {
  id?: string;
}

const Box = ({ ...props }: Props): ReactElement => {
  return <BoxStyled {...props} />;
};

export default Box;
