import React, { Component } from 'react';
import Header from '../../components/HeaderHome'
import MainHome from '../../components/MainHome';
import {Container} from './styled'




class Home extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <MainHome/>
                
            </Container>
        );
    }
}

export default Home;
