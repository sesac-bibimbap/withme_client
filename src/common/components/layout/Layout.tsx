import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { HomeOutlined, BookOutlined, BellOutlined } from '@ant-design/icons';
import { ROUTES } from '../../constants';
import { BlackBtn } from '..';
import useFetchNotifications from '../../../components/notification/hooks/useFetchNotifications';
import {
  layout_container,
  layout_sidebar_studylist,
  layout_sidebar_pageTabs_userInfo,
  layout_sidebar_studylist_circle,
  layout_sidebar_pageTabs_userInfo_circle,
  layout_sidebar_pageTabs_text,
  layout_sidebar_pageTabs_container,
  layout_sidebar_pageTabs_wrap,
  layout_sidebar_pageTabs_link,
  layout_contents_container,
  layout_profile,
  layout_sidebar_icon,
} from './Layout.style';
import useSocketConnect from '../../hooks/useSocketConnect';
import './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSocketConnect();

  const { Text } = Typography;
  useFetchNotifications(); // FIXME: 수정 필요할 수도 있음

  const navigatedList = [
    {
      to: ROUTES.MAIN.PATH,
      icon: <HomeOutlined style={layout_sidebar_icon} />,
      text: 'MAIN_PAGE',
    },
    {
      to: ROUTES.STUDY.PATH,
      icon: <BookOutlined style={layout_sidebar_icon} />,
      text: 'STUDY',
    },
    {
      to: ROUTES.NOTIFICATION.PATH,
      icon: <BellOutlined style={layout_sidebar_icon} />,
      text: 'NOTIFICATION',
    },
  ];

  return (
    <>
      {
        <div style={layout_container}>
          <div
            className="layout_sidebar_studylist"
            style={layout_sidebar_studylist}
          >
            {data?.participatingStudies?.map(({ id, name }, idx) => (
              <Link
                to={`${ROUTES.STUDY.PATH}/room/${id}`}
                key={idx}
                style={{ textDecoration: 'none' }}
              >
                <div style={layout_sidebar_studylist_circle}>
                  {name?.substring(0, 2)}
                </div>
              </Link>
            ))}
          </div>

          <div style={layout_sidebar_pageTabs_container}>
            <div style={layout_sidebar_pageTabs_wrap}>
              <div style={layout_sidebar_pageTabs_text}>
                {navigatedList.map(({ to, icon, text }) => (
                  <Link key={to} to={to} style={layout_sidebar_pageTabs_link}>
                    <p style={{ marginBottom: '20px' }}>
                      {icon}
                      {text}
                    </p>
                  </Link>
                ))}
              </div>
              <BlackBtn htmlType="button" path={ROUTES.CREATE_STUDY.PATH}>
                스터디 만들기
              </BlackBtn>
            </div>
            <Link to={'/profile'} style={layout_sidebar_pageTabs_link}>
              <div style={layout_sidebar_pageTabs_userInfo}>
                <img
                  src={data?.profile.profileImg}
                  alt="프로필이미지"
                  style={layout_sidebar_pageTabs_userInfo_circle}
                />
                <Text ellipsis style={layout_profile}>
                  {data?.profile.nickname}
                </Text>
              </div>
            </Link>
          </div>
          <div style={layout_contents_container}>{children}</div>
        </div>
      }
    </>
  );
};

export default Layout;
