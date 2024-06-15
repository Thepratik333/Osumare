import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme, expanded }) => ({
  backgroundColor: expanded ? 'blue' : 'white', // Conditional background color
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "&.Mui-expanded": {
    backgroundColor: expanded ? '#0086ff' : 'white', // Ensure the background color is maintained when expanded
    color: expanded ? 'white' : 'black',
    boxShadow: expanded ? '0 4px 8px rgba(0, 0, 255, 0.5)' : 'none', // Conditional box shadow
    
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="mt-28 mb-52">
      <h1 className="font-bold text-center text-3xl my-5">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Pinpoint your audience with precision, ensuring your marketing efforts
        reach those most likely to engage with your brand.
      </p>
      <div className="md:mx-56 mx-12">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="shadow-xl"
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expanded={expanded === "panel1"}
          >
            <Typography>1. How does Osumare measure campaign success?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-500">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and refined
              for optimal outcomes. We provide regular reports that detail key
              metrics, giving you clear insights into how our strategies are
              driving growth for your brand.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            expanded={expanded === "panel2"}
          >
            <Typography>2. How does Osumare measure campaign success?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-500">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and refined
              for optimal outcomes. We provide regular reports that detail key
              metrics, giving you clear insights into how our strategies are
              driving growth for your brand.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            expanded={expanded === "panel3"}
          >
            <Typography>3. How does Osumare measure campaign success?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-500">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and refined
              for optimal outcomes. We provide regular reports that detail key
              metrics, giving you clear insights into how our strategies are
              driving growth for your brand.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
