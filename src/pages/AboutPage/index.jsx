import Layout from '../../components/Layout/Layout';
import { Typography, Container } from '@material-ui/core';
import samJ from './samj.png';

const AboutPage = () => {
    return (
        <Layout>
            <Container style={{marginTop: 40, marginBottom: 40}}>
            <Typography variant="h2" >
                Coming Soon!.....ya ninny!
            </Typography>
            <img src={samJ} alt="the-cursing-king" style={{marginBottom:50}}/>
            </Container>
        </Layout>
    )
}

export default AboutPage;