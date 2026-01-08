import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = [gameQuery.platform?.name, gameQuery.genre?.name, "Games"]
    .filter(Boolean)
    .join(" ");

  return (
    <Heading as="h1" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
