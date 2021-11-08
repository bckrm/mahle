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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  boxShadow: 'none'
}));

const Product = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        sanityProduct {
	          title
	          _rawDescription
	          link
	          productImage {
	            asset {
	              url
	            }
	          }
	          features {
	          	id
	          	title
	          }
	          specifications {
	          	id
	          	title
	          }
	        }
	      }
	    `}
      render={data => (
      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto'}}>
		    	<Card sx={{ maxWidth: '100%', border: 0, boxShadow: 5, borderRadius: 0, marginTop: -35 }}>
			      <CardMedia
			        component="img"
			        height="100%"
			        alt="hero image"
			        image={data.sanityProduct.productImage.asset.url}
			      />

			      <CardContent style={{textAlign: 'left', fontWeight: 'normal'}}>
			      	<Grid container spacing={2}>
			      		<Grid item xs={6} md={12}>
					        <Typography gutterBottom variant="h4" component="div" color="primary">{data.sanityProduct.title}</Typography>
			      		</Grid>
			      	</Grid>
			      	<Grid container spacing={2}>
			      		<Grid item xs={6} md={6}>
					        <Typography variant="body" component="div">
					          {data.sanityProduct._rawDescription && <BlockContent blocks={data.sanityProduct._rawDescription || []} />}
					        </Typography>
					      </Grid>
					      <Grid item xs={6} md={6}>
					        <Typography variant="h5" component="div" color="darkblue" fontWeight="bold">Features:</Typography>
					        	<ul>
								      {data.sanityProduct.features &&
								        data.sanityProduct.features.map(feature => (
								          <li key={feature.id}>
								            {feature.title}
								          </li>
								        ))}
								    </ul>					        
					      </Grid>
					    </Grid>    
			      	<Grid container spacing={2} style={{marginTop:20}}>
			      		<Grid item xs={6} md={6}>
					        <Typography variant="h4" component="div" style={{marginTop: 20, color: '#ce467b', fontWeight: 'bold'}}>
					        	Want it try out?
					        	<Stack direction="row" spacing={1}>
								      <Chip label="DOWNLOAD" style={{backgroundColor: "#ce467b", color: 'white', padding: 20, width: 290, marginTop: 20, fontSize: '1.5rem'}}/>
								    </Stack>
					        </Typography>
					      </Grid>
					      <Grid item xs={6} md={6}>
					        <Typography variant="h5" component="div" color="darkblue" fontWeight="bold">Specifications:</Typography>
					        	<ul>
								      {data.sanityProduct.specifications &&
								        data.sanityProduct.specifications.map(specification => (
								          <li key={specification.id}>
								            {specification.title}
								          </li>
								        ))}
								    </ul>					        
					      </Grid>
				      </Grid>
			      </CardContent>
			    </Card>
		    </Box>
      )}
    />
    
  );
};

export default Product;