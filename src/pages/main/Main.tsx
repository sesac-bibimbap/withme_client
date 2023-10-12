import { Layout } from '../../common/components';
// import { useProfileQuery } from '../../components/auth/hooks/queries/useQueries.ts';

export const Main = () => {
  // const { data, isLoading } = useProfileQuery();

  return (
    <>
      <Layout />
      {/* {!isLoading ? (
        <>
          <div>Main</div>
          <div>{data.email}</div>
        </>
      ) : (
        <p>Loading...</p>
      )} */}
    </>
  );
};
