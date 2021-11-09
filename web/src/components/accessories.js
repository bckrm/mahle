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
import {mapEdgesToNodes} from "../lib/helpers";

const Product = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        allSanityAccessory {
	        	edges{
	        		node {
	        			id
			        	sku
			          title
			          image {
			            asset {
			              url
			            }
			          }
			        }
		        }
	        }
	      }
	    `}
      render={data => (
      	<Box id="accessories" sx={{ flexGrow: 1, width: '50%', margin: 'auto', marginTop: 10}}>
		    	<Typography variant="h4" component="div" color="#ce467b" fontWeight="bold">
			      Accessories
			    </Typography>
			    <Grid container spacing={10} style={{marginTop: 10}}>
			    	{mapEdgesToNodes(data.allSanityAccessory) &&
			        mapEdgesToNodes(data.allSanityAccessory).map(node => (
			          <Grid item key={node.id} md={4} xs={4}>
			          	<Card sx={{ maxWidth: 345, boxShadow: 'none', textAlign: 'center' }}>
							      <CardMedia
							        component="img"
							        image={node.image.asset.url}
							        alt={node.sku}
							      />
							      <CardContent textAlign="center">
							        <Typography gutterBottom variant="h7" component="div">{node.sku}</Typography>
							        <Typography variant="h7" component="div">{node.title}</Typography>
							      </CardContent>
							    </Card>
			          </Grid>
			        ))}
				    	
			    </Grid>
      				
		    </Box>
      )}
    />
    
  );
};

export default Product;