import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/listItem.less';
const ListItem: React.FC = (props: any) => {
  const listitem = () => {
    const type = props.textType;
    if (type == '1') {
      return (
        <div className={styles.listitem}>
          <div className={styles.title}>{props.titles}</div>
          <div className={styles.manInfo}>
            <img src={props.userImg}></img>
            <div>{props.userName}</div>
            <div>{props.work}</div>
          </div>
          <div className={styles.textcontent}>{props.content}</div>
          <div className={styles.bottom}>
            <div>{props.agree} 赞成 · </div>
            <div>{props.comment} 评论</div>
          </div>
        </div>
      );
    } else if (type == '2') {
      return (
        <div className={styles.listitem_t}>
          <div className={styles.title}>{props.titles}</div>
          <div className={styles.manInfo}>
            <img src={props.userImg}></img>
            <div>{props.userName}</div>
            <div>{props.work}</div>
          </div>
          <div className={styles.imgContent}>
            <div className={styles.text_type_img}>
              <img src={props.frontImg}></img>
            </div>
          </div>
          <div className={styles.flexcontent}>
            <div>{props.content}</div>
          </div>
          <div className={styles.bottom}>
            <div>{props.agree} 赞成 · </div>
            <div>{props.comment || 10} 评论</div>
          </div>
        </div>
      );
    }
  };
  return <>{listitem()}</>;
};

ListItem.propTypes = {
  titles: PropTypes.string,
  userImg: PropTypes.string,
  userName: PropTypes.string,
  work: PropTypes.string,
  content: PropTypes.string,
  agree: PropTypes.number,
  comment: PropTypes.number,
};

export default ListItem;
