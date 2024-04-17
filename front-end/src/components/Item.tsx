import { Box, Link, Typography } from "@mui/material";
import { Document } from "../Types/medicine";
type ItemProps = {
  title: string;
  text?: string;
  isLine?: boolean;
  isMobile?: boolean;
  documents?: Document[];
};

export const Item = ({
  title,
  text = "",
  isLine = false,
  documents,
  isMobile = false,
}: ItemProps) => {
  return (
    <Box display={isLine ? "flex" : undefined} alignItems="center">
      <Typography fontWeight={isMobile ? "400" : "700"}> {title}:</Typography>

      {documents ? (
        documents.map((item) => (
          <Link href={item.url} target="_blank" marginX={1}>
            {item.type}
          </Link>
        ))
      ) : (
        <Typography marginLeft="10px" fontSize={isMobile ? "12px" : "14px"}>
          {text}
        </Typography>
      )}
    </Box>
  );
};
