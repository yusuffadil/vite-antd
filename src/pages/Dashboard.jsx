import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    TeamOutlined,
    MessageOutlined,
    DollarCircleOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const Dashboard = () => {
    const cardInfo = (
        <Row glutter={24} className='card-dashboard'>
            <Col xs={24} sm={24} md={12} lg={6}>
                <Card>
                    <Meta
                        avatar={
                            <DollarCircleOutlined
                                style={{ fontSize: '64px', color: '#52c41a' }}
                            />
                        }
                        title='Online Review'
                        description='2,781'
                    />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
                <Card>
                    <Meta
                        avatar={
                            <TeamOutlined
                                style={{ fontSize: '64px', color: '#52c41a' }}
                            />
                        }
                        title='New Customers'
                        description='3,241'
                    />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
                <Card>
                    <Meta
                        avatar={
                            <MessageOutlined
                                style={{ fontSize: '64px', color: '#52c41a' }}
                            />
                        }
                        title='Active Projects'
                        description='253'
                    />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
                <Card>
                    <Meta
                        avatar={
                            <ShoppingCartOutlined
                                style={{ fontSize: '64px', color: '#52c41a' }}
                            />
                        }
                        title='Referrals'
                        description='4,324'
                    />
                </Card>
            </Col>
        </Row>
    );
    return (
        <div className='contentInner'>
            Dashboard
            {cardInfo}
        </div>
    );
};

export default Dashboard;
