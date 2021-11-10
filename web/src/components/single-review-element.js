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

  	 // style={{minHeight: 300, maxHeight: 'auto', height: '100%'}}>
	return (
		<Card style={{zIndex: '2'}}>
			<CardHeader
			title={<Rating name="read-only" value={props.popularity} size="large" style={{color: "white"}} precision={0.5} readOnly />}
			style={{backgroundColor: '#bd4378', textAlign: 'center'}}
			/>
			<CardContent>
				{
					!expanded && (
						props.comment[0].children[0].text.length > 100 && (
							<Typography variant="h6" color="text.secondary">{props.comment[0].children[0].text.substring(0, 100) + "..."}</Typography>		
				))}
				
				{
					props.comment[0].children[0].text.length < 100 && (
						<Typography variant="h6" style={{padding: 0, margin: '-25px 0'}} color="text.secondary">{props.comment && <BlockContent blocks={props.comment || []} />}</Typography>
					)
				}

				{
					expanded && (
						<Typography variant="h6" style={{padding: 0, margin: '-25px 0'}} color="text.secondary">{props.comment && <BlockContent blocks={props.comment || []} />}</Typography>
					)
				}
			</CardContent>
			<CardActions disableSpacing>
				<Typography variant="caption" style={{fontWeight: 'bold'}} gutterBottom>{props.title} {<br/>} <span style={{fontWeight: 'normal'}}>{props.jobtitle}</span></Typography>
				{
					props.comment[0].children[0].text.length > 100 && (
					<ExpandMore
						id={props.id}
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				)}
			</CardActions>
			
		</Card>
	)
}