import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import {
  studyRoomAnnouncement_container,
  studyRoomAnnouncement_contents_wrapper,
  studyRoomAnnouncement_contents_wrapper_left,
  studyRoomAnnouncement_contents_wrapper_right,
  studyRoomAnnouncement_title,
} from '../StudyRoomMainContainer.style';
import { useFetchAnnouncementQuery } from '../../hooks/queries/useQueries';
import useCacheInstance from '../../../../../common/utils/cache';
import { useRef, useState } from 'react';
import { Input, InputRef, Skeleton } from 'antd';
import { createAnnouncement, updateAnnouncement } from '../../../api';

const StudyRoomAnnouncement = ({
  studyId,
  owner,
}: {
  studyId: number | undefined;
  owner: User;
}) => {
  const { data, isLoading } = useFetchAnnouncementQuery(studyId);
  const { cache } = useCacheInstance();
  const user = cache.getQueryData<User>(['userProfile']);
  const [openInput, setOpenInput] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  const inputRef = useRef<InputRef>(null);

  const onClickOpenCreateInput = () => setOpenInput(true);
  const onClickOpenUpdateInput = () => {
    setOpenInput(true);
    setIsCreate(false);
  };
  const onClickCloseInput = () => {
    setOpenInput(false);
    setIsCreate(true);
  };

  const onClickSendAnnouncement = () => {
    if (!inputRef.current?.input?.value) return;
    const contents = { contents: inputRef.current?.input?.value };
    const announcementId = Number(data?.id);
    isCreate
      ? createAnnouncement(studyId, contents)
      : updateAnnouncement(studyId, announcementId, contents);
    alert('정상적으로 반영되었습니다.');

    setOpenInput(false);
  };

  return (
    <>
      {!isLoading ? (
        <div style={studyRoomAnnouncement_container}>
          <h2 style={studyRoomAnnouncement_title}>공지사항</h2>
          <div style={studyRoomAnnouncement_contents_wrapper}>
            <div style={studyRoomAnnouncement_contents_wrapper_left}>
              <FontAwesomeIcon
                icon={faThumbtack}
                style={{ color: '#ffffff' }}
              />
              {openInput ? (
                <Input
                  placeholder="공지를 작성해주세요."
                  maxLength={30}
                  showCount
                  ref={inputRef}
                  style={{ height: '100%', margin: '0px' }}
                  defaultValue={isCreate ? '' : data?.contents}
                />
              ) : (
                <div>
                  {data?.contents ? data?.contents : '공지를 작성해주세요.'}
                </div>
              )}
            </div>
            <div>
              {/* TODO: 클릭이벤트 구현 및 스터디장만 수정으로 보이기*/}
              {owner.id === user?.id ? (
                <>
                  {openInput ? (
                    <>
                      <button
                        style={studyRoomAnnouncement_contents_wrapper_right}
                        onClick={onClickSendAnnouncement}
                      >
                        전송
                      </button>
                      <button
                        style={studyRoomAnnouncement_contents_wrapper_right}
                        onClick={onClickCloseInput}
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={studyRoomAnnouncement_contents_wrapper_right}
                        onClick={onClickOpenCreateInput}
                      >
                        작성
                      </button>
                      <button
                        style={studyRoomAnnouncement_contents_wrapper_right}
                        onClick={onClickOpenUpdateInput}
                      >
                        수정
                      </button>
                    </>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default StudyRoomAnnouncement;
