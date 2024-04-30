import { Grid } from "@nextui-org/react";
import { Card3Kinya } from "./anxietyCardsKinya/Card3Kinya";
import { Card4Kinya } from "./anxietyCardsKinya/Card4Kinya";
import { Card5Kinya } from "./anxietyCardsKinya/Card5Kinya";

export default function AnxietyCardsKinya() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card4Kinya />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3Kinya />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card5Kinya />
      </Grid>
    </Grid.Container>
  );
}
