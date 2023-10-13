import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/constants';
import { useProfileQuery } from '../../components/auth/hooks/queries/useQueries.ts';

export const Main = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProfileQuery();

  return (
    <>
      <button
        onClick={() => {
          navigate(ROUTES.LOGIN.PATH);
        }}
      >
        로그인으로 뿅
      </button>
      {!isLoading ? (
        <>
          <div>{data.email}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Main;
