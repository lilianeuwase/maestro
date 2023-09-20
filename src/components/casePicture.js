import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  rem,
  BackgroundImage,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
// import Background from "../../assets/Colorflag.png";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: rem(700),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(32),
    fontWeight: 900,
    lineHeight: 1.2,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
    fontFamily: "Josefin Sans",
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
    color: "dark",
  },
}));

export function CasePicture(props) {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <BackgroundImage
        src={props.image}
        // radius="sm"
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>{props.description}</Title>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              size="xl"
              className={classes.control}
            >
              Get back
            </Button>
          </NavLink>
        </Container>
      </BackgroundImage>
    </div>
  );
}
