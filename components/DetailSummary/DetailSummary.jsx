import React from "react";
import style from "./DetailSummary.module.css";
import { Grid, Container} from "@mui/material";

import Image from "next/image";
function DetailSummary(props) {
  return (
    <Container maxWidth="lg">
    <Grid
      container
      className={style.structure}
      key={props.id}
      justifyContent="space-evenly"
      alignItems="center"
      columnSpacing={{ xs: 0, md: 8 }}
      direction={props.id % 2 == 0 ? "row" : "row-reverse"}>
      <Grid item xs={12} md={6}>
        <Image
          className={style.img}
          src={props.images}
          alt={props.heading}
          width={300}
          height={300}
        />
      </Grid>
      <Grid item xs={12} md={6} className={style.details}>
        <h2>{props.heading}</h2>
        <p className={style.dash} />
        <p>{props.description}</p>
      </Grid>
    </Grid>
    </Container>
  );
}

export default DetailSummary;
