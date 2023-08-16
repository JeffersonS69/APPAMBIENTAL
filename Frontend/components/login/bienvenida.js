import React from "react";
import {
  Container,
  Text,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";

export default function bienvenida() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
          <Container>
            <Heading>
              A component library for the
              <Text color="emerald.500"> React Ecosystem</Text>
            </Heading>
            <Text mt="3" fontWeight="medium">
              NativeBase is a simple, modular and accessible component library
              that gives you building blocks to build you React applications.
            </Text>
          </Container>
      </Center>
    </NativeBaseProvider>
  );
}