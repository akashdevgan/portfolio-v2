import React from 'react';
import {Container, Row, Col} from 'reactstrap';

// components
import Layout from '../../components/layout/layout';

const Intro = () => {
    return (
        <Layout>
            <Container className='intro'>
                <Row className='full-vh-height align-items-center'>
                    <Col xs={{ size: 10, offset: 1 }}  className='offset-md-2 offset-lg-1'>
                        <h3 className='green-color-text m-0'>Hi, I am</h3>
                        <h1 className='white-color-text mt-2 mb-4'>Akash Devgan</h1>
                        <p className='greay-color-text w-md-50 mb-4'>I am a Web Developer based in Toronto, Canada.My expertise is in building web applications, landing  pages and anything in between.
                        </p>
                        <section className='header-cta'>
                            <button className='green-btn p-2 px-4'>Download CV</button>
                            <a href='#contact' className='green-border-btn mt-4 mt-md-0 ml-md-4 p-2 px-4'>Contact Me</a>
                        </section>
                    </Col>
                    
                </Row>
            </Container>
        </Layout>
    );
}

export default Intro;