import { Link } from 'react-router-dom';
import {
  ownedStudies_container,
  ownedStudies_contents,
  ownedStudies_link,
  ownedStudies_title,
  ownedStudies_wrapper,
} from './OwnedStudies.style';

const OwnedStudies = ({
  ownedStudies,
}: {
  ownedStudies: Study[] | undefined;
}) => {
  return (
    <div style={ownedStudies_container}>
      <div style={ownedStudies_title}>소유중인 스터디</div>
      <div className="ownedStudies_wrapper" style={ownedStudies_wrapper}>
        {ownedStudies &&
          ownedStudies.map(({ id, name, recruit: { isRecruit } }) => (
            <Link to={`/study/detail/${id}`} key={id} style={ownedStudies_link}>
              <div>
                <div style={ownedStudies_contents}>
                  <div># {id}</div>
                  <div>{isRecruit ? '모집중' : '모집종료'}</div>
                </div>
                <div>{name}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OwnedStudies;
