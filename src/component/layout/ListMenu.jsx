import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';

const items = [
    { label: 'Dashboard', key: '/', icon: <PieChartOutlined /> },
    { label: 'Users', key: '/user', icon: <DesktopOutlined /> },
    { label: 'Posts', key: '/posts', icon: <DesktopOutlined /> },
    {
        label: 'Team',
        key: 'teams',
        icon: <TeamOutlined />,
        children: [
            { label: 'Team 1', key: 'teams-1' },
            { label: 'Team 2', key: 'teams-2' },
        ],
    },
    { label: 'Files', key: '/files', icon: <FileOutlined /> },
];

export default items;
