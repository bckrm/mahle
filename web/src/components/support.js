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
    		<Grid container spacing={2} style={{color: 'white', margin: 20}}>
    			<Grid item md={6}>
    				<Typography variant="h5" component="div" style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{data.sanitySupport.title}</Typography>
    				<Typography variant="body" component="div">
				         {data.sanitySupport._rawDescription && <BlockContent blocks={data.sanitySupport._rawDescription || []} />}
			      </Typography>
    			</Grid>
    			<Grid item md={5} xs={4}>
    				{data.sanitySupport.details &&
			        data.sanitySupport.details.map(detail => (
			        	<>
			        		<Grid container spacing={2} style={{marginLeft: 40}}>
			        			<Grid item md={1}>
					          	<img style={{color: 'red'}} height="50" src={detail.image ? detail.image.asset.url : ''} />
					          </Grid>
					          <Grid item md={11}>
						          <Typography display="block" variant="caption" gutterBottom>
							          <div style={{marginTop: 5}}>{detail.title}</div>
							          {detail._rawDescription && (
							          	detail._rawDescription && <BlockContent blocks={detail._rawDescription || []} />
							          )}
							        </Typography>
						         </Grid>
					      	</Grid>
				      	</>
			      ))}
    			</Grid>
    		</Grid>
      )}
    />
    
  );
};

export default Product;