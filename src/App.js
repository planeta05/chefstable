import "./styles.css";
import { useState } from "react";
import { Grid, Container, Input } from "@chakra-ui/react";
import RecipeList from "./components/RecipeList";
// import Nav from "./components/Nav";

export default function App() {
  const recipeList = [
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
    },
    {
      id: 12338,
      title: "Sahne Torte",
      category: "vegan"
    }
  ];

  const [list, setList] = useState(recipeList);

  return (
    <Grid gridTemplateColumns="6fr" gridTemplateRows="100vh">
      {/* <Nav /> */}
      <div className="main">
        <RecipeList recipeList={list} />
        <Container></Container>
      </div>
    </Grid>
  );
}
