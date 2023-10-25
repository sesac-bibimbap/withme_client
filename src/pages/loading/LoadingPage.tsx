import { useEffect } from 'react';
import useSocketConnect from '../../common/hooks/useSocketConnect';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

const LoadingPage = () => {
  const { data } = useSocketConnect();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate('/main', { state: { data } });
      return;
    }
    navigate('/login');
  }, [data, navigate]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100dvw',
          height: '100dvh',
        }}
      >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    </>
  );
};

export default LoadingPage;
