import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon,
  Button,
  Typography,
} from "@mui/material/";

import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  VideoLibrary as VideoLibraryIcon,
  Subscriptions as SubscriptionsIcon,
  History as HistoryIcon,
  LibraryMusic as LibraryMusicIcon,
  EmojiEvents as EmojiEventsIcon,
  SportsEsports as SportsEsportsIcon,
  Newspaper as NewspaperIcon,
  Stream as StreamIcon,
  ThreeDRotation as ThreeDRotationIcon,
  AddCircle as AddCircleIcon,
  AccountCircle as AccountCircle,
} from "@mui/icons-material/";

const ListItems = ({ icon, name }: { icon: JSX.Element; name: string }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default function Menu({ isAuth, setIsAuth }: any) {
  const handleChangeIsAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 210,
        position: "fixed",
        overflow: "inherit",
        bgcolor: "background.paper",
        zIndex: 9999,
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItems icon={<HomeIcon />} name="Home" />
          <ListItems icon={<ExploreIcon />} name="Explore" />
          <ListItems icon={<VideoLibraryIcon />} name="Shorts" />
          <ListItems icon={<SubscriptionsIcon />} name="Subscriptions" />
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItems icon={<VideoLibraryIcon />} name="Library" />
          <ListItems icon={<HistoryIcon />} name="History" />
        </List>
      </nav>
      <Divider />
      {!isAuth && (
        <nav
          style={{ padding: "10px", maxWidth: 250 }}
          aria-label="secondary mailbox folders"
        >
          <List>
            <ListItem>Sign in to like videos, comment, and subscribe.</ListItem>
            <ListItem>
              <Button
                onClick={handleChangeIsAuth}
                startIcon={<AccountCircle />}
                variant="outlined"
              >
                Sıgn In
              </Button>
            </ListItem>
          </List>
        </nav>
      )}
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem>
            <Typography variant="button" display="block" gutterBottom>
              BEST OF YOUTUBE
            </Typography>
          </ListItem>
          <ListItems icon={<LibraryMusicIcon />} name="Music" />
          <ListItems icon={<EmojiEventsIcon />} name="Sports" />
          <ListItems icon={<SportsEsportsIcon />} name="Gaming" />
          <ListItems icon={<NewspaperIcon />} name="News" />
          <ListItems icon={<StreamIcon />} name="Live" />
          <ListItems icon={<ThreeDRotationIcon />} name="360° Video" />
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItems icon={<AddCircleIcon />} name="Browse Channels" />
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
