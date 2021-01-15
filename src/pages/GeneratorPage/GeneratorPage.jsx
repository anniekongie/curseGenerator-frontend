import { Box, Typography } from '@material-ui/core';
import {useEffect, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import GeneratorBox from '../../components/GeneratorBox';

const GeneratorPage = (props) => {
    console.log('props', props.location);
    const {location: {state : {rating, type }}} = props;
    return (
        <Layout>
            <GeneratorBox type={type} rating={rating} />
        </Layout>
    );

}

export default GeneratorPage;