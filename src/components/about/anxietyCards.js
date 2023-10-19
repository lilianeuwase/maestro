import { Grid } from "@nextui-org/react";
import { Card3 } from "./anxietyCards/Card3";
import { Card4 } from "./anxietyCards/Card4";
import { Card5 } from "./anxietyCards/Card5";

export default function AnxietyCards() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card5 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
    </Grid.Container>
  );
}
