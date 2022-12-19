import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NoPage = () => (
    <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
            <Link to='/'>
                <Button type='primary'>Back Dashboard</Button>
            </Link>
        }
    />
);

export default NoPage;
