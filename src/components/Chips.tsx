import { Chip } from "@mui/material";

const ChipItem = ({ name }: { name: string }) => {
  return <Chip sx={{ ml: 1 }} label={name} />;
};

export default function Chips() {
  return (
    <>
      <ChipItem name="All" />
      <ChipItem name="Mix's" />
      <ChipItem name="Music" />
      <ChipItem name="Live" />
      <ChipItem name="Game" />
      <ChipItem name="Sitcoms" />
      <ChipItem name="Television series" />
      <ChipItem name="Arabic Music" />
      <ChipItem name="Comedy" />
      <ChipItem name="Pop Music" />
      <ChipItem name="Conversation" />
      <ChipItem name="Card" />
      <ChipItem name="Recently uploaded" />
    </>
  );
}
