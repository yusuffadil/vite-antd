import React, { useState } from 'react';
import { Space, Table, Tag, Popconfirm } from 'antd';
import Drawer from './drawer';

const index = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            title: 'First Post',
            status: 'draft',
            description: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            title: 'Jim Green',
            status: 'reject',
            description: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
    ]);
    const [open, setOpen] = useState(false);

    const color = (val) => {
        let color = val.length > 5 ? 'green' : 'geekblue';
        if (val === 'reject') {
            color = 'volcano';
        }

        return color;
    };

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => (
                <Tag color={color(status)} key={status}>
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        return <Tag key={tag}>{tag.toUpperCase()}</Tag>;
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size='middle'>
                    <a onClick={() => showDrawer(record)}>Edit</a>
                    {dataSource.length >= 1 ? (
                        <Popconfirm
                            title='Sure to delete?'
                            onConfirm={() => handleDelete(record.key)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null}
                </Space>
            ),
        },
    ];

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='contentInner'>
            <Table columns={columns} dataSource={dataSource} />

            <Drawer onClose={onClose} open={open} />
        </div>
    );
};

export default index;
