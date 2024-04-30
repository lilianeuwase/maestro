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

export default function SubstanceFM() {
  return (
    <Box>
      <Container maxW={"7xl"} py={0} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContentUp>
              <TestimonialHeading>Myth</TestimonialHeading>
              <TestimonialText>
                Only “hard” drugs like cocaine and heroin are addictive
              </TestimonialText>
            </TestimonialContentUp>
            <TestimonialAvatar
              src={require("../../../assets/bulbicon.jpeg")}
              name={"Myth or Fact"}
              // title={'CEO at ABC Corporation'}
            />
            <TestimonialContentDown>
              <TestimonialHeading>Fact</TestimonialHeading>
              <TestimonialText>
              drugs prescribed by a doctor, like opioid painkillers, can lead to addiction.
              </TestimonialText>
            </TestimonialContentDown>
          </Testimonial>
          <Testimonial>
            <TestimonialContentUp>
              <TestimonialHeading>Fact</TestimonialHeading>
              <TestimonialText>
              When substance abuse turns into drug addiction, it takes a powerful hold over both mind and body.
              </TestimonialText>
            </TestimonialContentUp>
            <TestimonialAvatar
              src={require("../../../assets/bulbicon1.jpeg")}
              name={"Myth or Fact"}
              // title={'CEO at ABC Corporation'}
            />
            <TestimonialContentDown>
              <TestimonialHeading>Myth</TestimonialHeading>
              <TestimonialText>
              People can quit using drugs any time they want 
              </TestimonialText>
            </TestimonialContentDown>
          </Testimonial>
          <Testimonial>
            <TestimonialContentUp>
              <TestimonialHeading>Myth</TestimonialHeading>
              <TestimonialText>
              Addiction can only happen to teenagers 
              </TestimonialText>
            </TestimonialContentUp>
            <TestimonialAvatar
              src={require("../../../assets/bulbicon2.jpeg")}
              name={"Myth or Fact"}
              // title={'CEO at ABC Corporation'}
            />
            <TestimonialContentDown>
              <TestimonialHeading>Fact</TestimonialHeading>
              <TestimonialText>
              Addiction can happen at any age. Even unborn children can get addicted because of their mother's drug use.
              </TestimonialText>
            </TestimonialContentDown>
          </Testimonial>
          
        </Stack>
      </Container>
    </Box>
  );
}
