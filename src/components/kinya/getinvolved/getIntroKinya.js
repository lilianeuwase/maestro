"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import {
  BuildingOfficeIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Inkunga y’Amafaranga",
    description:
      ": inkunga yawe ikoreshwa mugukomeza gutanga ibizatuma abagenerwabikorwa bacu bagira urwego bageraho kubuzima ndetse ninkunga nto hari icyo yongera gitanga impinduka.",
    icon: RectangleGroupIcon,
  },
  {
    name: "Gutera Inkunga& Kugira Imikoranire",
    description:
      ": niba uhagarariye ikigo runaka binyuze mumikoranire namasezerano twagirana cyangwa ugutera inkunga kwawe kominote yungukiramo byinshi.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Gusangira Amakuru:",
    description:
      ": Koresha imbuga zawe cyangwa ubundi buryo kugirango abantu bamenye icyo Maestro mind lab ikora, ubuvugizi bwawe budufasha guhura n’abandi benshi bashobora gukoresha serivisi zacu.",
    icon: SquaresPlusIcon,
  },
];

const theme = extendTheme({
  fonts: {
    heading: `'Josefin Sans', sans-serif`,
    body: `'Josefin Sans', sans-serif`,
  },
});

export default function GetIntroKinya() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={"7xl"} className="pt-8">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 2, md: 5 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "orange.400",
                  zIndex: -1,
                }}
              >
                Fatanya
              </Text>
              <br />
              <Text as={"span"} color={"orange.400"}>
                Natwe
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Abantu bafite uruhare rukomeye mu gushyigikira urubuga rwa Maestro
              Mind Lab ndetse nimishinga ishamikiyeho, inkunga yawe izamura
              urwego rw’ubuzima bwo mumutwe n’imibireho myiza yabagenerabikorwa
              bacu.
              <br />
              <br />
              Ubu nibwo buryo wakoresha utanga inkunga yawe y’ingirakamaro:
              <dl className="mt-6 max-w-xl space-y-4 text-base leading-6 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("orange.50", "orange.400")}
            />
            <Box
              position={"relative"}
              height={"550px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={require("../../../assets/GetInvolved2.jpg")}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <hr
        style={{
          borderColor: "orange",
        }}
      />
    </ChakraProvider>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
