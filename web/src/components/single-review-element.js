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
import { styled } from '@mui/material/styles';
import Img from "gatsby-image";
import BlockContent from '../components/block-content';
import Collapse from '@mui/material/Collapse';
import {mapEdgesToNodes} from "../lib/helpers";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';

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

export default function SingleReviewElement(props) {

	const [expanded, setExpanded] = React.useState(false);

  	const handleExpandClick = () => {
    	setExpanded(!expanded);
  	};


	return (
		<Card>
			<CardHeader
			title={<Rating name="read-only" value={props.popularity} size="large" style={{color: "white"}} precision={0.5} readOnly />}
			style={{backgroundColor: '#bd4378', textAlign: 'center'}}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{props.comment && (
						props.comment && <BlockContent blocks={props.comment || []} />
					)}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Typography variant="caption" style={{fontWeight: 'bold'}} gutterBottom>{props.title} {<br/>} <span style={{fontWeight: 'normal'}}>{props.jobtitle}</span></Typography>
				<ExpandMore
					id={props.id}
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
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	)
}