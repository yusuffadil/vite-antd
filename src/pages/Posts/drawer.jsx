import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    DatePicker,
    Drawer,
    Form,
    Input,
    Row,
    Select,
    Space,
} from 'antd';
const { Option } = Select;

const DrawerPost = (props) => {
    return (
        <>
            <Drawer
                title='Create Post'
                width={720}
                onClose={props.onClose}
                open={props.open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={props.onClose}>Cancel</Button>
                        <Button onClick={props.onClose} type='primary'>
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout='vertical' hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name='title'
                                label='Title'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter title',
                                    },
                                ]}
                            >
                                <Input placeholder='Please enter Title' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name='status'
                                label='Status'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select an status',
                                    },
                                ]}
                            >
                                <Select placeholder='Please select an status'>
                                    <Option value='draft'>Draft</Option>
                                    <Option value='reject'>Reject</Option>
                                    <Option value='approve'>Approve</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name='tags'
                                label='Tags'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select tags',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='Please select tags'
                                    mode='multiple'
                                    allowClear
                                >
                                    <Option value='loser'>Loser</Option>
                                    <Option value='nice'>Nice</Option>
                                    <Option value='developer'>Developer</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name='dateTime'
                                label='DateTime'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the dateTime',
                                    },
                                ]}
                            >
                                <DatePicker.RangePicker
                                    style={{
                                        width: '100%',
                                    }}
                                    getPopupContainer={(trigger) =>
                                        trigger.parentElement
                                    }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name='description'
                                label='Description'
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    rows={4}
                                    placeholder='please enter url description'
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};
export default DrawerPost;
