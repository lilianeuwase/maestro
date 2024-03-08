import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card4Kinya = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Ukuri
        </Text>
        <Text h3 color="white">
        Uburwayi bw’umuhangayiko ni uburwayi busuzumwa ndetse bukanabonwa
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
    src={require("../../../../../assets/CardFrame3.jpeg")}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
      <Col>
          <Row justify="flex-start">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
               Ibinyoma
              </Text>
            </Button>
          </Row>
        </Col>
        <Col>
          <Text color="#000" size={14}>
          Uburwayi bw’umuhangayiko ntabwo ari uburwayi nkubundi
          </Text>
        </Col>
        
      </Row>
    </Card.Footer>
  </Card>
);
