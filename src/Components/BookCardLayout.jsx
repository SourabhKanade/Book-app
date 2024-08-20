import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
// import book from '../../Images';
// import {IconComponent as book} from '../../Images/book.jpg';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, Grid } from "@mui/material";
// import { Book } from '@mui/icons-material';

export default function BookCardLayout({ title, author, country, pages, year }) {

  return (
      <Grid  item xs={12} sm={4} ms={4} key={"index"}>
        <Card
          sx={{ maxWidth: 495 }}
          style={{ padding: "10px", marginBottom: "30px" }}
        >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title.length > 15 ? title.slice(0, 13) + '...' : title}
            subheader={author === "" || author === undefined || author === null ? null : author}
          />
          <CardMedia
            component="img"
            height="254"
            sx={{ width: "99%", padding: "16px" }}
            image="https://shorturl.at/K1glD"
            // image={"https://aniportalimages.s3.amazonaws.com/media/details/__sized__/Concussionjune2820210903073948-thumbnail-154x87-70.jpg"}
            alt="Book"
          />
          <Grid
            sx={{
              display: "flex",
              padding: "16px",
              alignItems: "baseline",
              alignContent: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Typography color="text.secondary">
          {pages === "" || pages === undefined || pages === null ? null : `This book has ${pages} pages.`}
            </Typography>

            <Typography color="text.secondary">{country} - {year}</Typography>
          </Grid>
        </Card>
      </Grid>
  );
}
