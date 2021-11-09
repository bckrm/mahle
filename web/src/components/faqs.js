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
import BlockContent from '../components/block-content';

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
        <div style={{margin: 20}}>
          {mapEdgesToNodes(data.allSanityFaq) &&
            mapEdgesToNodes(data.allSanityFaq).map(node => (
              <Accordion expanded={expanded === node.id} onChange={handleChange(node.id)} style={{backgroundColor: '#3f51b5', color: 'white', marginBottom: 10}}>
                <AccordionSummary
                  expandIcon={expanded ? <RemoveIcon style={{color: 'white'}}/> : <AddIcon style={{color: 'white'}}/>}
                  aria-controls={node.id + "-content"}
                  id={node.id + "-header"}
                >
                  <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>{node.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{color: 'white'}}>
                    {node._rawDescription && <BlockContent style={{color: 'white'}} blocks={node._rawDescription || []} />}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          }
        </div>
      )}
    />
  )
};

export default FAQs;