"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box  w='100%'>{children}</Box>;
};

const TestimonialContentUp = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialContentDown = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string,
  name: string,
  title: string,
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function SubstanceFMKinya() {
  return (
    <Box>
      <Container maxW={"7xl"} py={0} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContentUp>
              <TestimonialHeading>Ibinyoma</TestimonialHeading>
              <TestimonialText>
              Ibiyobyabwenge bikomeye nibyo byonyine bigira umuntu imbata
              </TestimonialText>
            </TestimonialContentUp>
            <TestimonialAvatar
              src={require("../../../../assets/bulbicon.jpeg")}
              name={"Myth or Fact"}
              // title={'CEO at ABC Corporation'}
            />
            <TestimonialContentDown>
              <TestimonialHeading>Ukuri</TestimonialHeading>
              <TestimonialText>
              Imiti yanditse na muganga ,urugero igabanya ububabare ndetse niyindi ishobora kukugira imbata
              </TestimonialText>
            </TestimonialContentDown>
          </Testimonial>
          <Testimonial>
            <TestimonialContentUp>
              <TestimonialHeading>Ukuri</TestimonialHeading>
              <TestimonialText>
              Iyo kwiyahuza ibiyobyabwenge bihindutse kuba imbata y’ibiyobyabwenge byangiza intekerezo ndetse numubiri
              </TestimonialText>
            </TestimonialContentUp>
            <TestimonialAvatar
              src={require("../../../../assets/bulbicon1.jpeg")}
              name={"Myth or Fact"}
              // title={'CEO at ABC Corporation'}
            />
            <TestimonialContentDown>
              <TestimonialHeading>Ibinyoma</TestimonialHeading>
              <TestimonialText>
              Umuntu ashobora guhagarika gukoresha ibiyobyabwenge igihe cyose abishakiye
              </TestimonialText>
            </TestimonialContentDown>
          </Testimonial>
          <Testimonial>
            <TestimonialContentUp>
              <TestimonialHeading>Ibinyoma</TestimonialHeading>
              <TestimonialText>
              Kubatwa n’ibiyobyabwenge biba kubangavu ndetse ningimbi gusa
              </TestimonialText>
            </TestimonialContentUp>
            <TestimonialAvatar
              src={require("../../../../assets/bulbicon2.jpeg")}
              name={"Myth or Fact"}
              // title={'CEO at ABC Corporation'}
            />
            <TestimonialContentDown>
              <TestimonialHeading>Ukuri</TestimonialHeading>
    

              <TestimonialText>
              Kubatwa n’ibiyobyabwenge bishobora kuba kumuntu, mukigero kimyaka yose ndetse n’abana bato bashobora kubigira bitewe nuko ababyeyi babo babikoresha
              </TestimonialText>
            </TestimonialContentDown>
          </Testimonial>
          
        </Stack>
      </Container>
    </Box>
  );
}
