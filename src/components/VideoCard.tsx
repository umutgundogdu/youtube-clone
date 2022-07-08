import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material/";

import { MoreVert as MoreIcon } from "@mui/icons-material/";

const VideoCardItem = ({
  avatarName,
  videoName,
  name,
  views,
  date,
}: {
  avatarName: string;
  videoName: string;
  name: string;
  views: number;
  date: number;
}) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGblhawqTlnx2Ynf-JjcHqQ96JgO6HVMzgQ&usqp=CAU"
          alt="green iguana"
          sx={{ minHeight: "220px", minWidth: "185px", cursor: "pointer" }}
        />
        <CardContent sx={{}}>
          <Grid container>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: "orange", width: 34, height: 34 }}>
                U
              </Avatar>
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="h6" component="div">
                Youtube Cloning
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <MoreIcon />
              </IconButton>
            </Grid>
            <div style={{ marginLeft: "50px" }}>
              <Grid item xs={12}>
                <Typography variant="caption" display="block" component="div">
                  Umut Gündoğdu
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" display="block" component="div">
                  2.3M views 2 years ago
                </Typography>
              </Grid>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default function VideoCard() {
  return (
    <>
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
      <VideoCardItem
        avatarName="U"
        videoName="Youtube Clone"
        name="Umut Gündoğdu"
        views={2}
        date={1}
      />
    </>
  );
}
