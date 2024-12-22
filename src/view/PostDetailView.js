import React from 'react';

const PostDetailView = ({ post, onClose }) => (
  <div className="post-details">
    <h2>Post Details</h2>
    {post ? (
      <>
        <p><strong>Title:</strong> {post.title}</p>
        <p><strong>Body:</strong> {post.body}</p>
        <button onClick={onClose}>Close</button>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

export default PostDetailView;