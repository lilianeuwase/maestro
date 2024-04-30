import {
  createStyles,
  Image,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconArrowAutofitUp, IconCandle, IconCheck, IconEar, IconHandGrab, IconHeart, IconHourglassEmpty } from "@tabler/icons-react";
import "../../../styles/lgbtq/lgbtqIntro.scss";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl})`,
    paddingLeft: `calc(${theme.spacing.xl} * 4)`,
    paddingRight: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(580),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Josefin Sans, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  text: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Josefin Sans, ${theme.fontFamily}`,
    fontSize: rem(20),
    lineHeight: 1.2,
    fontWeight: 400,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(3)} ${rem(2)}`,
  },
  highlight1: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: "red",
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(3)} ${rem(2)}`,
  },
  highlight2: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: "yellow",
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(3)} ${rem(2)}`,
  },
}));

export function HomeWelcomeKinya() {
  const { classes } = useStyles();
  return (
    <div className="bg-white">
      <div className="px-4 mx-auto max-w-8xl sm:py-48 lg:py-0">
        <div className={classes.inner}>
          <div className={classes.content}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <Title className={classes.title}>
              Kuri  <span className={classes.highlight}>Maestro</span>{" "}
                <span className={classes.highlight1}>Mind</span>{" "}
                <span className={classes.highlight2}>Lab</span> <br /> Tuguhaye Ikaze
              </Title>
            </h1>
            <div className="mb-12">
              <Text mt="md" className={classes.text}>
              Maestro Mind lab, iguhaye ikaze, tuguha umwanya utuje, aho witabwaho aho ubona ukumva, ugufasha ndetse unagutera imbaraga.
Intego yacu ni ukugufasha mu kurwanya agahinda gakabije. Icyoba(umuhangayiko), no kubatwa n’ibiyobyabwenge dufasha kominote aho buri wese yumva atekanye, yiga ndetse akanagira imbaraga zo gukira.

              </Text>
            </div>
            <List mt={30} spacing="sm" size="sm" className={classes.text}>
              <List.Item
                icon={
                  <ThemeIcon size={20} radius="xl" color="#E03131">
                    <IconEar size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <b>Turumva</b>
              </List.Item>

              <List.Item
                icon={
                  <ThemeIcon size={20} radius="xl" color="#AE3EC9">
                    <IconHeart size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <b>Tukwitaho</b>
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon size={20} radius="xl" color="#1098AD">
                    <IconHandGrab size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <b>Turafasha</b>
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon size={20} radius="xl" color="#66A80F">
                    <IconArrowAutofitUp size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <b>Duteza Imbere </b>
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon size={20} radius="xl" color="#E8590C">
                    <IconCandle size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <b>Turasobanukirwa</b>
              </List.Item>
            </List>
          </div>
          <Image
            src={require("../../../assets/warmwelcome9.png")}
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
}
