import { Box, Typography } from '@material-ui/core';
import Layout from '../../components/Layout/Layout';
import TypeRatingForm from '../../components/TypeRatingForm/TypeRatingForm';

const LandingPage = (props) => {
    const something = (
        <Box>
            <Typography variant="h2">Welcome to the Curse Generator! </Typography>
            <Typography variant="body">Have fun cursing!</Typography>
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