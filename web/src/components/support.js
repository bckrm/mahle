import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Img from "gatsby-image";
import BlockContent from '../components/block-content';

const Product = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        sanitySupport {
	          title
	          _rawDescription
	          details {
	          	id
	          	title
	          	_rawDescription
	          	islink
	          	link
	          	image {
		          	asset{
		          		url
		          	}
		          }
	          }
	        }
	      }
	    `}
      render={data => (
      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto'}}>
      		<Grid container spacing={2}>
      			<Grid item md={8}>
      				<Typography variant="h5" component="div" style={{fontWeight: 'bold'}}>{data.sanitySupport.title}</Typography>
      				<Typography variant="body" component="div">
					         {data.sanitySupport._rawDescription && <BlockContent blocks={data.sanitySupport._rawDescription || []} />}
				      </Typography>
      			</Grid>
      			<Grid item md={4} xs={4}>
      				{data.sanitySupport.details &&
				        data.sanitySupport.details.map(detail => (
				        	<>
					          <img style={{color: 'red'}} height="50" src={detail.image ? detail.image.asset.url : ''} />
					          <Typography>{detail.title}</Typography>
					          <Typography variant="body" component="div">
						         {detail._rawDescription && <BlockContent blocks={detail._rawDescription || []} />}
					      		</Typography>
					      	</>
				      ))}
      			</Grid>
      		</Grid>
		    </Box>
      )}
    />
    
  );
};

export default Product;