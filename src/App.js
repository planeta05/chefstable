import "./styles.css";
import { useState } from "react";
import { Flex, Grid, Text, Heading } from "@chakra-ui/react";

export default function App() {
  const list = [
    {
      id: 12345,
      title: "meat balls",
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
        <Grid templateColumns="1fr 1fr 1fr 1fr 1fr" columnGap="20px">
          {list.map((item) => {
            return (
              <Flex
                key="{item.id}"
                boxShadow="lg"
                rounded="lg"
                flexDir="column"
                alignItems="center"
              >
                <p>{item.title}</p>
                <p>{item.category}</p>
              </Flex>
            );
          })}
        </Grid>
      </div>
    </Grid>
  );
}
