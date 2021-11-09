import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StaticQuery, graphql } from "gatsby";
import {mapEdgesToNodes} from "../lib/helpers";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <StaticQuery
      query={graphql`
        {
          allSanityFaq(sort: {order: DESC, fields: id}) {
            edges{
              node {
                id
                title
                _rawDescription
              }
            }
          }
        }
      `}


      render={data => (
        <div>
          <Box sx={{flexGrow: 1, marginTop: 20}}>
            {mapEdgesToNodes(data.allSanityFaq) &&
              mapEdgesToNodes(data.allSanityFaq).map(node => (
                <Accordion expanded={expanded === node.id} onChange={handleChange(node.id)}>
                  <AccordionSummary
                    expandIcon={expanded ? <RemoveIcon/> : <AddIcon />}
                    aria-controls={node.id + "-content"}
                    id={node.id + "-header"}
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>{node.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {data.allSanityFaq._rawDescription && <BlockContent blocks={data.allSanityFaq._rawDescription || []} />}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </Box>
        </div>
      )}
    />
  )
};

export default FAQs;