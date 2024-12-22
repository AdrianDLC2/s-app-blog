import React from 'react';

const PostListView = ({ posts, onSelect, onDelete }) => (
  <div className="post-list">
    <h2>Posts</h2>
    {posts.map((post) => (
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => onSelect(post.id)}>Details</button>
        <button onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default PostListView;
