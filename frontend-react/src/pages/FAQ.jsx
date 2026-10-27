import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

export default function FAQ() {
  const id = React.useId();
  return (
    <Box sx={{ display: "grid", gap: 1.5 }}>
      <Accordion
        elevation={0}
        sx={{ border: 1, borderColor: "divider", borderRadius: "12px !important", overflow: "hidden" }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
          sx={{
            px: { xs: 2, sm: 3 },
            minHeight: 64,
            "& .MuiAccordionSummary-content": { my: 2 },
            "& .MuiAccordionSummary-expandIconWrapper": { color: "primary.main" }
          }}
        >
          <Typography component="span" sx={{ fontWeight: 700 }}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ border: 1, borderColor: "divider", borderRadius: "12px !important", overflow: "hidden" }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
          sx={{
            px: { xs: 2, sm: 3 },
            minHeight: 64,
            "& .MuiAccordionSummary-content": { my: 2 },
            "& .MuiAccordionSummary-expandIconWrapper": { color: "primary.main" }
          }}
        >
          <Typography component="span" sx={{ fontWeight: 700 }}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
