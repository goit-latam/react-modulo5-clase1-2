import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPostComments } from '../../shared/api/posts';
import styles from './comments-page.module.scss';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await getPostComments(id);
        setComments(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchComments();
  }, [id]);

  const elements = comments.map(({ id, name, body }) => (
    <li className={styles.postsItem} key={id}>
      <p>Author: {name}.</p>
      <p>{body}</p>
    </li>
  ));

  return <ol className={styles.postsList}>{elements}</ol>;
};

export default CommentsPage;
