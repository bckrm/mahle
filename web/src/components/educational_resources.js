import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {mapEdgesToNodes} from "../lib/helpers";

const EducationalResources = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        allSanityEducationalResource {
		        edges {
		          node {
		            id
		            title
		          }
		        }
		      }
	      }
	    `}
      render={data => (
      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto', marginTop: 20}}>
		    	<Typography variant="h7" component="div" color="#ce467b" fontWeight="bold">
			      Educational Resources
			    </Typography>
			    <ul>
			    	{mapEdgesToNodes(data.allSanityEducationalResource) &&
			        mapEdgesToNodes(data.allSanityEducationalResource).map(node => (
			          <li key={node.id}>{node.title}</li>
			        ))}
				    	
			    </ul>
      				
		    </Box>
      )}
    />
    
  );
};

export default EducationalResources;