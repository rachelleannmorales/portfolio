import React, {FC} from "react";
import CV from '../assets/RACHELLEANNFLAMENIO.pdf';
import Photo from '../assets/avatar.png';
import {Avatar, Button, Col, Row} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Header: FC<any> = () => {
    return (
        <Row>
            <Col>
                <div id="about-me" className="bg-gray-900 pt-24 pb-0">
                    <Row justify="center">
                        <Col xs={20} sm={20} md={14} lg={12} xl={12}>
                            <div>
                                <p className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Hi,</p>
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-8xl sm:py-6">I am Rachelle</h2>
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">I'm a Fullstack Engineer</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">Experienced Software Engineer with 10 years of expertise in software development and programming, including PHP, NodeJs, ReactJs, Jest, Scrum, SQL and NoSQL. Proven record of successful project implementations and product launches. Applying for a Senior Software Engineer position to utilize my skills and experience to develop innovative software solutions.</p>
                            </div>
                            <div>
                                <Button type="primary" size={'large'}>
                                    <a
                                       href={CV}
                                       color="transparent"
                                       target="_blank"
                                       rel="noreferrer"
                                       download="RACHELLEANNFLAMENIO">
                                        Download CV
                                    </a>
                                </Button>
                                <div className={"py-16"}>
                                    <Button type={'link'}>
                                    <a href="https://www.linkedin.com/in/rachelleannmorales" target={'_blank'} rel="noreferrer">
                                        <FontAwesomeIcon style={{fontSize: '32px'}} icon={faLinkedin}/>
                                    </a>
                                    </Button>
                                    <Button type={'link'}>
                                        <a href="https://github.com/rachelleannmorales"><FontAwesomeIcon style={{fontSize: '32px'}} icon={faGithub}/></a>
                                    </Button>
                                    <Button type={'link'}>
                                        <a href="/#"><FontAwesomeIcon style={{fontSize: '32px'}} icon={faInstagram}/></a>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={6} lg={8} xl={8}>
                            <Avatar size={{ md: 200, lg: 400, xl: 500, xxl: 500 }} src={Photo} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
)
}

export default Header;