import {
  Flex,
  Text,
  Heading,
  Container,
  IconButton,
  VStack,
  SimpleGrid,
  GridItem,
  Input,
  FormLabel,
  FormControl,
  Select
} from "@chakra-ui/react";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";

export default function RecipeList({ recipeList }) {
  return (
    <Container maxW="container.sm" py={10}>
      <VStack w="full" h="full" alignItems="stretch" spacing={10}>
        <Flex justifyContent="space-between" alignItems="baseline">
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

        <SimpleGrid columns={3} columnGap={3} rowGap={6}>
          {recipeList.map((item) => {
            return (
              <GridItem colSpan={1}>
                <VStack boxShadow="xl" rounded="lg" p="5">
                  <Heading as="h3" mb="1" size="md">
                    {item.title}
                  </Heading>
                  <Text
                    size="md"
                    casing="uppercase"
                    letterSpacing="0.05rem"
                    fontWeight="bold"
                    color="gray.500"
                  >
                    {item.category}
                  </Text>
                </VStack>
              </GridItem>
            );
          })}
        </SimpleGrid>
        <VStack alignItems="flex-start" spacing="3">
          <Heading>New Recipe</Heading>
          <Text>here you can add a new recipe!</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6}>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Recipe Title</FormLabel>
              <Input placeholder="e.g. Meat balls..." />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Recipe Category</FormLabel>
              <Select>
                <option value="vegan">vegan</option>
                <option value="meat">meat</option>
                <option value="vegetarian">vegetarian</option>
              </Select>
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
