import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();
  const effectRan = useRef(false); // to remove twice loading issue
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (effectRan.current === false) {
      if (postStatus === "idle") {
        dispatch(fetchPosts());
      }
    }

    return () => {
      effectRan.current= true
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading...."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
