import { Card, Col, Text } from "@nextui-org/react";

export const Card3Kinya = () => (
  <Card css={{ bg: "$black", w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
        Ukuri 
        </Text>
        <Text h4 color="white">
        Ubufasha bwa kinyamwuga burakenewe mu kuvura indwara y’umuhangayiko
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
      Ibinyoma
      </Text>
      <Text h4 color="white">
      Ntabuvuzi bukenewe kumuntu ufite uburwayi bwumuhangayiko, uko ibihe bishira nabyo birashira
      </Text>
    </Card.Body>
  </Card>
);
