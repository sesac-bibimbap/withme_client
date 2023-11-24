import Profile from '../../components/main/profile/Profile';
import BookmarkedStudies from '../../components/main/bookmarkedStudies/BookmarkedStudies';
import Inquires from '../../components/main/inquries/Inquires';
import StudiesSchedules from '../../components/main/studiesSchedules/StudiesSchedules';
import OwnedStudies from '../../components/main/ownedStudies/OwnedStudies';
import useSocketConnect from '../../common/hooks/useSocketConnect';
import {
  mainPage_lower_side,
  mainPage_lower_side_right,
  mainPage_upper_side,
} from './MainPage.style';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/constants';

const MainPage = () => {
  const navigate = useNavigate();
  const { data } = useSocketConnect();

  useLayoutEffect(() => {
    if (data?.emailVerified === 'NOT_YET') navigate(ROUTES.FIRST_LOGIN.PATH);
  }, [data?.emailVerified, navigate]);

  return (
    <>
      <div style={mainPage_upper_side}>
        <BookmarkedStudies bookmarkedStudies={data?.bookmarkedStudies} />
        <Profile user={data} />
      </div>
      <div style={mainPage_lower_side}>
        <StudiesSchedules user={data} />
        <div style={mainPage_lower_side_right}>
          <Inquires inquiries={data?.inquiries} />
          <OwnedStudies ownedStudies={data?.ownedStudies} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
