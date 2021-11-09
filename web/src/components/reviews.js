import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Img from "gatsby-image";
import BlockContent from '../components/block-content';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FAQs from "./faqs";
import EducationalResources from "./educational_resources";
import Support from "./support";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  boxShadow: 'none'
}));

const Review = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        allSanityReview {
		        edges {
		          node {
		            publishedAt
		            popularity
		            jobtitle
		            title
		            _rawComment
		          }
		        }
		      }
	      }
	    `}
      render={data => (
      	<>
	      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto'}}>
	      		<Box sx={{ flexGrow: 1, width: '100%', backgroundColor: '#002984', marginTop: 50, paddingTop: 20, paddingBottom: 10}}>
	      			<Grid container spacing={4} style={{marginTop: 50}}>
	      				<Grid item md={8}>
	      					<Typography variant="h4" component="div" style={{color: 'white', fontWeight: 'bold', margin: 20}}>FAQs</Typography>
	      					<FAQs/>
	      				</Grid>
	      				<Grid item md={3} style={{margin: '80px 0'}}>
	      					<Typography variant="h7" component="div" fontWeight="bold" color="white">Educational Resources</Typography>
	      					<EducationalResources/>
	      				</Grid>
	      			</Grid>
	      			<Support />
			    	</Box>
			    </Box>
			  </>
      )}
    />
    
  );
};

export default Review;