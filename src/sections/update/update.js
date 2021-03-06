import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

// data
import data from '../../data/latest.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import ProjectTile from '../../components/projectTile/projectTile';
import MiniNav from '../../components/miniNav/miniNav';

const Update = () => {

    const [activeTab, setActiveTab] = useState(data.companies[0]);

    const projects = data[activeTab] || [];

    console.log(projects);

    const handleMiniNavButtonClick = (e) => {
       setActiveTab(e.target.innerText)
    }

    return (
        <Container className='projects mt-5 pt-5 mt-md-0 pt-md-0'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                    <Row>
                        <Col>
                            <SectionHeading title='Latest'/>
                        </Col>
                    </Row>
                   
                    
                    <MiniNav activeTab={activeTab} onClick={handleMiniNavButtonClick} navItems={data.companies} />
                            
                    <div className='project-list'>
                        
                            {projects.map(project => <ProjectTile {...project} />)}
                            
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Update;