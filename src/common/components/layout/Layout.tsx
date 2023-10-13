import {
  layout_container,
  layout_sidebar_studylist,
  // layout_header,
  layout_sidebar_container,
  layout_sidebar_pageTabs_userInfo,
  layout_sidebar_studylist_circle,
  layout_sidebar_pageTabs_userInfo_circle,
  layout_sidebar_pageTabs_text,
  layout_sidebar_pageTabs_container,
  layout_sidebar_pageTabs_wrap,
  layout_sidebar_pageTabs_link,
  layout_contents_container,
} from './Layout.style';
import { BlackBtn } from '..';
import { HomeOutlined, BookOutlined, BellOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { ROUTES } from '../../constants';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { Text } = Typography;

  return (
    <>
      <div style={layout_container}>
        {/* <div style={layout_header}>header</div> */}
        <div style={layout_sidebar_container}>
          <div style={layout_sidebar_studylist}>
            <a href="!#">
              <div style={layout_sidebar_studylist_circle}></div>
            </a>
          </div>
          <div style={layout_sidebar_pageTabs_container}>
            <div style={layout_sidebar_pageTabs_wrap}>
              <div style={layout_sidebar_pageTabs_text}>
                <a href="!#" style={layout_sidebar_pageTabs_link}>
                  <p style={{ marginBottom: '20px' }}>
                    <HomeOutlined
                      style={{ fontSize: '22px', marginRight: '10px' }}
                    />
                    MAINPAGE
                  </p>
                </a>
                <a href="!#" style={layout_sidebar_pageTabs_link}>
                  <p style={{ marginBottom: '20px' }}>
                    <BookOutlined
                      style={{ fontSize: '22px', marginRight: '10px' }}
                    />
                    STUDY
                  </p>
                </a>
                <a href="!#" style={layout_sidebar_pageTabs_link}>
                  <p style={{ marginBottom: '20px' }}>
                    <BellOutlined
                      style={{ fontSize: '22px', marginRight: '10px' }}
                    />
                    NOTIFICATION
                  </p>
                </a>
              </div>
              <BlackBtn
                buttonText="스터디 만들기"
                htmlType="button"
                path={ROUTES.CREATESTUDY.PATH}
              />
            </div>
            <a href="!#" style={layout_sidebar_pageTabs_link}>
              <div style={layout_sidebar_pageTabs_userInfo}>
                <div style={layout_sidebar_pageTabs_userInfo_circle}></div>
                <Text
                  ellipsis
                  style={{
                    width: ' 130px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  익명의 스터디원이다dkdkdk
                </Text>
              </div>
            </a>
          </div>
        </div>
        <div style={layout_contents_container}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
