import {
  Container,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container maxW={"container.xl"}>
      <Stack
        minH={"10vh"}
        w={"full"}
        align={"center"}
        justify={"center"}
        direction={"column"}
        borderTop={"1px solid"}
        borderTopColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Text> Baptiste Verdier © {new Date().getFullYear()} </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
