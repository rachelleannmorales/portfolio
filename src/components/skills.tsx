import React, {FC} from "react";
import {Col, Divider, Row, List, Image } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {skillsList} from "../constants/skills";
import { SkillsItem, SkillsProps } from "./types/Skills";

const Skills: FC<SkillsProps> = ({isMobile}) => {
    return (
        <Row justify={'center'} id="skills" className='bg-gray-900 pb-10'>
            <Col>
                <Divider style={{color: 'white', borderColor: 'white'}}>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-4xl py-10">Skills and Tools</h2>
                </Divider>
                <Row justify="center">
                    <Col xs={20} sm={20} md={22} lg={20} xl={20}>
                        <List
                            grid={{ gutter: 16, column: isMobile ? 4 : 5 }}
                            dataSource={skillsList}
                            renderItem={(item: SkillsItem) => (
                                <List.Item className={'text-center'}>
                                    {(item.icon) && (
                                        <>
                                            <FontAwesomeIcon icon={item.icon} color={'white'} style={{fontSize: '64px'}}/>
                                            <div className="pb-10 text-lg leading-8 text-gray-300">{item.title}</div>
                                        </>
                                    )}
                                    {(item.image) && (
                                        <>
                                            <Image width={60} src={item.image}/>
                                            <div className="pb-10 text-lg leading-8 text-gray-300">{item.title}</div>
                                        </>
                                    )}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
)
}

export default Skills;