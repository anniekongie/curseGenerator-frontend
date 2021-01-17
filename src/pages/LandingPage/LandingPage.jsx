import { Box, Typography, Container } from '@material-ui/core';
import Layout from '../../components/Layout/Layout';
import TypeRatingForm from '../../components/TypeRatingForm/TypeRatingForm';
import jonah from '../../jonah-hill.png';
const LandingPage = (props) => {
    const something = (
        <Box>
            <Container> 
                <img src={jonah} style={{height: 292.8, width: 267.2}} alt="jonah-hill-logo"/>
                <Typography variant="h1">The Curse Generator </Typography> 
            </Container>
            <Typography variant="h3">Have fun cursing!</Typography>
        </Box>
    )
    const onSubmit = (type,rating) => {
        console.log('TYPE,RATING HERE',type,rating)
        props.history.push({pathname: '/generate', state: {rating, type}});
    }

    return (
        <Layout>
            {something}
            <TypeRatingForm onSubmit={onSubmit} history={props.history}/>
        </Layout>
    )
}

export default LandingPage;