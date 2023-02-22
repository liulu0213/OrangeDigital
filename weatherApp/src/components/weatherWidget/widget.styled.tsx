import { PropsWithChildren, ReactElement } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const CardStyled = styled(Card)<{ city: string }>`
  background: url(${(props) =>
      props.city &&
      "https://source.unsplash.com/random/320x250/?" +
        props.city.replace(/\s/g, "")})
    no-repeat center;
`;

const CardContentStyled = styled(CardContent)`
  margin: 20px;
  background-color: rgb(255, 255, 255, 0.7);
`;

const CardActionsStyled = styled(CardActions)`
  background: rgb(255, 255, 255, 0.9);
`;

const weatherCard = function ({
  children,
  city,
  actions,
}: PropsWithChildren<{ city: string; actions: ReactElement }>) {
  return (
    <CardStyled city={city}>
      <CardContentStyled>{children}</CardContentStyled>
      <CardActionsStyled>{actions}</CardActionsStyled>
    </CardStyled>
  );
};

export default weatherCard;
