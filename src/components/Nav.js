import { Flex, Text, Heading } from "@chakra-ui/react";

export default function Nav() {
  return (
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
  );
}
