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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  boxShadow: 'none'
}));

const Hero = () => {
  return (
  	<StaticQuery
      query={graphql`
	      {
	        sanityHero {
	          title
	          subtitle
	          herodescriptiontitle
	          herodescriptionsubtitle
	          _rawDescription
	          heroimage {
	            asset {
	              url
	            }
	          }
	          herodescriptionimage {
	            asset {
	              url
	            }
	          }
	        }
	      }
	    `}
      render={data => (
      	<Box sx={{ flexGrow: 1, width: '50%', margin: 'auto', fontWeight: 'bold'}}>
		    	<Card sx={{ maxWidth: '100%', boxShadow: 'none', borderRadius: 0, marginTop: 10 }}>
			      <CardMedia
			        component="img"
			        height="100%"
			        alt="hero image"
			        image={data.sanityHero.heroimage.asset.url}
			      />

			      <CardContent style={{textAlign: 'center'}}>
			        <Typography gutterBottom variant="h4" component="div">
			          {data.sanityHero.title}
			        </Typography>
			        <Typography variant="h4" component="div" color="primary" fontWeight="bold">
			          {data.sanityHero.subtitle}
			        </Typography>
      				
      				<Box sx={{ flexGrow: 1, marginTop: 10 }}>
								<Grid container spacing={2}>
									<Grid item xs={6} md={6}>
										<Item style={{fontSize: '3rem', color: 'primary', fontWeight: 'bold'}}>{data.sanityHero.herodescriptiontitle}</Item>
										<Item style={{fontSize: '2rem'}}>{data.sanityHero.herodescriptionsubtitle}</Item>
										<Item style={{fontSize: '2rem', marginTop: 5}}>
											<Typography>
                    		{data.sanityHero._rawDescription && <BlockContent blocks={data.sanityHero._rawDescription || []} />}
                  		</Typography>
                  	</Item>
									</Grid>
									<Grid item xs={6} md={6}>
										<Card sx={{ maxWidth: '100%', boxShadow: 'none', borderRadius: 0}}>
											<CardMedia
												component="img"
												height="100%"
												alt="green iguana"
												image={data.sanityHero.herodescriptionimage.asset.url}
											/>
										</Card>
									</Grid>
								</Grid>
      				</Box>

			      </CardContent>
			    </Card>
		    </Box>
      )}
    />
    
  );
};

export default Hero;