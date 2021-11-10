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
import Img from "gatsby-image";
import BlockContent from '../components/block-content';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FAQs from "./faqs";
import EducationalResources from "./educational_resources";
import Support from "./support";
import SingleReviewElement from "./single-review-element";
import Collapse from '@mui/material/Collapse';
import {mapEdgesToNodes} from "../lib/helpers";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import {format} from 'date-fns';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Review = () => {
	
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 40;

  const commonStyles = {
	  bgcolor: 'background.paper',
	  borderColor: 'text.primary',
	  m: 1,
	  border: 1,
	  width: '5rem',
	  height: '2rem'
	};

  return (
  	<StaticQuery
      query={graphql`
	      {
	        allSanityReview {
		        edges {
		          node {
		          	id
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
      		<Typography id="reviews" variant="h4" fontWeight="bold" color="darkblue" component="div" style={{marginTop: 150, paddingBottom: 50}} textAlign="center">REVIEWS</Typography>
      		<Box sx={{ flexGrow: 1 }} style={{padding: 'auto'}}>
	      		<Box sx={{ flexGrow: 1 }} style={{width: '50%', margin: 'auto'}}>
		        	{mapEdgesToNodes(data.allSanityReview).length <= 3 && (
								mapEdgesToNodes(data.allSanityReview).map(node => (
									<SingleReviewElement title={node.title} comment={node._rawComment} popularity={node.popularity} id={node.id} />
					    )))}

							{
						    mapEdgesToNodes(data.allSanityReview).length > 3 && (
									<div style={{ overflow: 'hidden', margin: '-20px auto 50px auto', padding: `0 ${chevronWidth}px`}}>
											<ItemsCarousel
												requestToChangeActive={setActiveItemIndex}
												activeItemIndex={activeItemIndex}
												numberOfCards={3}
												gutter={30}
												leftChevron={<IconButton size="small"><ChevronLeftIcon /></IconButton>}
												rightChevron={<IconButton size="small"><ChevronRightIcon/></IconButton>}
												outsideChevron
												chevronWidth={chevronWidth}
											>
												{mapEdgesToNodes(data.allSanityReview).map(node => (
													<div id={node.id} style={{ height: 'auto', background: 'transparent' }}>
														<SingleReviewElement title={node.title} comment={node._rawComment} popularity={node.popularity} id={node.id} jobtitle={node.jobtitle} />
													</div>
												))}
											</ItemsCarousel>
									</div>
								)
							}
					  </Box>
		    		<Box sx={{ flexGrow: 1, width: '50%', backgroundColor: '#002984', margin: '-180px auto 10px auto', paddingTop: 20, paddingBottom: 5}}>
		    			<Grid container spacing={4} style={{marginTop: 50}}>
		    				<Grid id="faqs" item md={8}>
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