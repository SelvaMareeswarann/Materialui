import React from "react";
import { Box, Typography } from "@mui/material";
const Description = ({ description }) => {
  return (
    <div>
      <Box
        sx={{
          fontSize: "15px",
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {description.map((description, index) => (
          <React.Fragment key={index}>
            <Typography variant="p" component="p">
              {description}
            </Typography>
            <br />
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
};

export default Description;
