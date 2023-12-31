import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card4 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Fact
        </Text>
        <Text h3 color="white">
         Anxiety disorders are diagnosable medical
          illnesses
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
    src={require("../../../../assets/CardFrame3.jpeg")}
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
               Myth
              </Text>
            </Button>
          </Row>
        </Col>
        <Col>
          <Text color="#000" size={14}>
          Anxiety isn’t an actual illness
          </Text>
        </Col>
        
      </Row>
    </Card.Footer>
  </Card>
);
