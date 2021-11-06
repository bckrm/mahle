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

export default function Hero() {
  return (
  	<StaticQuery
      query={graphql`
        query sanityHero {
        	title
        }
      `}
      render={data => (
      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto', fontWeight: 'bold', border: 1 }}>
	    	<Card sx={{ maxWidth: '100%' }}>
		      <CardMedia
		        component="img"
		        height="140"
		        alt="green iguana"
		      />

		      <CardContent>
		        <Typography gutterBottom variant="h5" component="div">
		          {data.title}
		        </Typography>
		        <Typography variant="body2" color="text.secondary">
		          Lizards are a widespread group of squamate reptiles, with over 6,000
		          species, ranging across all continents except Antarctica
		        </Typography>
		      </CardContent>
		      <CardActions>
		        <Button size="small">Share</Button>
		        <Button size="small">Learn More</Button>
		      </CardActions>
		    </Card>
	    </Box>
      )}
    />
    
  );
};
