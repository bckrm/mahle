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
import Img from "gatsby-image";

const Hero = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        sanityHero {
	          title
	          subtitle
	          heroimage {
	            asset {
	              url
	            }
	          }
	        }
	      }
	    `}
      render={data => (
      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto', fontWeight: 'bold'}}>
		    	<Card sx={{ maxWidth: '100%', boxShadow: 'none', borderRadius: 0, marginTop: 20 }}>
			      <CardMedia
			        component="img"
			        height="100%"
			        alt="green iguana"
			        image={data.sanityHero.heroimage.asset.url}
			      />

			      <CardContent style={{textAlign: 'center'}}>
			        <Typography gutterBottom variant="h4" component="div">
			          {data.sanityHero.title}
			        </Typography>
			        <Typography variant="h4" component="div" color="primary" fontWeight="bold">
			          {data.sanityHero.subtitle}
			        </Typography>
			      </CardContent>
			      
			    </Card>
		    </Box>
      )}
    />
    
  );
};

export default Hero;