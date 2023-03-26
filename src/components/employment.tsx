import React, {FC} from "react";
import {Tabs, Col, Divider, Row} from "antd";
import {employmentList} from "../constants/employmentHistory";
import '../styles/antd/tabs.css';
import { EmploymentItem, EmploymentProps } from "./types/Employment";

const Employment: FC<EmploymentProps> = ({isMobile}) => {
    return (
        <Row justify="center" id="employment" className='bg-gray-800 pb-10'>
            <Col>
                <Divider style={{color: 'white', borderColor: 'white'}}>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-4xl py-10">Professional Experience</h2>
                </Divider>
                <Row justify="center">
                    <Col xs={20} sm={20} md={22} lg={20} xl={20}>
                        <Tabs
                            tabPosition={isMobile ? 'top' : 'right'}
                            style={{color: 'white'}}
                            items={employmentList.map((employment: EmploymentItem) => {
                                return {
                                    label: employment.company,
                                    key: employment.company,
                                    children: (
                                        <Row>
                                            <Col className={'text-lg text-gray-300'}>
                                                <h4>{employment.title}</h4>
                                                <p>{employment.company}, {employment.location}</p>
                                                <p>{employment.duration}</p>
                                                <div className={'text-md leading-8 text-gray-300'}>
                                                    <ul className="list-disc pl-14">
                                                        {employment.job}
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                }
                            })
                        }
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
)
}

export default Employment;