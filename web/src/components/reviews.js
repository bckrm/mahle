import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
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
import Collapse from '@mui/material/Collapse';
import {mapEdgesToNodes} from "../lib/helpers";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import {format} from 'date-fns'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Review = () => {
	const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
	      		<Grid container spacing={3} style={{margin: '200px auto 0 auto', width: '90%'}}>
	      			<Grid item md={12}><Typography variant="h4" fontWeight="bold" color="darkblue" textAlign="center">REVIEWS</Typography></Grid>
		      		{mapEdgesToNodes(data.allSanityReview) &&
				        mapEdgesToNodes(data.allSanityReview).map(node => (
				        	<Grid item md={4}>
					        	<Card>
								      <CardHeader
								        title={<Rating name="read-only" value={node.popularity} size="large" style={{color: "white"}} precision={0.5} readOnly />}
								        style={{backgroundColor: '#bd4378', textAlign: 'center'}}
								      />
								      <CardContent>
								        <Typography variant="body2" color="text.secondary">
								          {node._rawComment && (
							          		node._rawComment && <BlockContent blocks={node._rawComment || []} />
							          	)}
								        </Typography>
								      </CardContent>
								      <CardActions disableSpacing>
								      	<Typography variant="caption" style={{fontWeight: 'bold'}} gutterBottom>{node.title}</Typography>
								      	<Typography variant="caption" gutterBottom>{node.jobtitle}</Typography>
								        <ExpandMore
								          expand={expanded}
								          onClick={handleExpandClick}
								          aria-expanded={expanded}
								          aria-label="show more"
								        >
								          <ExpandMoreIcon />
								        </ExpandMore>
								      </CardActions>
								      <Collapse in={expanded} timeout="auto" unmountOnExit>
								        <CardContent>
								          <Typography paragraph>Method:</Typography>
								          <Typography paragraph>
								            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
								            aside for 10 minutes.
								          </Typography>
								        </CardContent>
								      </Collapse>
								    </Card>
								  </Grid>
				      ))}
				    </Grid>
	      		<Box sx={{ flexGrow: 1, width: '100%', backgroundColor: '#002984', marginTop: -20, paddingTop: 20, paddingBottom: 10}}>
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