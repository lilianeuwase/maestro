import { Card, Col, Text } from "@nextui-org/react";

export const Card3Kinya = () => (
  <Card css={{ bg: "$black", w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Fact
        </Text>
        <Text h4 color="white">
        Professional help is crucial to severe anxiety
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
    src={require("../../../../../assets/CardFrame4.jpeg")}
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
    <Card.Body
      css={{
        position: "absolute",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
      Myth
      </Text>
      <Text h4 color="white">
      You don’t need professional help, With time you can get over anxiety on your own
      </Text>
    </Card.Body>
  </Card>
);
