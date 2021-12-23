import "./styles.css";
import {
  Flex,
  Grid,
  Text,
  Heading,
  Container,
  IconButton
} from "@chakra-ui/react";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";

export default function App() {
  const list = [
    {
      id: 12345,
      title: "Meat Balls",
      category: "meat"
    },
    {
      id: 13345,
      title: "Bolognese",
      category: "veggi"
    },
    {
      id: 12335,
      title: "Sahne Torte",
      category: "vegan"
    },
    {
      id: 12335,
      title: "Sahne Torte",
      category: "vegan"
    },
    {
      id: 12335,
      title: "Sahne Torte",
      category: "vegan"
    },
    {
      id: 12335,
      title: "Sahne Torte",
      category: "vegan"
    }
  ];

  return (
    <Grid gridTemplateColumns="2fr 6fr" gridTemplateRows="100vh">
      <Flex backgroundColor="gray" flexDir="column" height="100vh">
        <Heading m="10">Chefs Table</Heading>
        <ul className="nav-list">
          <li>
            <Text>Recipes</Text>
          </li>
          <li>Calculation</li>
          <li>Shopping List</li>
        </ul>
      </Flex>
      <div className="main">
        <Container maxW="container.lg">
          <Flex flexDir="column">
            <Flex py="10" justifyContent="space-between" alignItems="baseline">
              <Heading>Recipes</Heading>
              <Flex>
                <IconButton
                  mr="5"
                  isRound="true"
                  aria-label="configuration"
                  icon={<SettingsIcon />}
                />
                <IconButton
                  isRound="true"
                  aria-label="add recipe"
                  icon={<AddIcon />}
                />
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" gap="20px" justifyContent="center">
              {list.map((item) => {
                return (
                  <Flex
                    key="{item.id}"
                    maxWidth="180px"
                    minWidth="180px"
                    flex="30%"
                    boxShadow="xl"
                    rounded="lg"
                    flexDir="column"
                    p="5"
                    alignItems="center"
                    bg="white"
                  >
                    <Heading as="h3" size="md" mb="2">
                      {item.title}
                    </Heading>
                    <Text
                      casing="uppercase"
                      letterSpacing="0.05rem"
                      fontWeight="medium"
                      fontSize="xs"
                      color="gray.500"
                    >
                      {item.category}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Container>
      </div>
    </Grid>
  );
}
