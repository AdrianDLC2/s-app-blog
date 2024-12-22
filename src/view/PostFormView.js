import React from 'react';

const PostFormView = ({ formState, setFormState, onSubmit }) => (
  <div className="form">
    <h2>{formState.id ? 'Update Post' : 'Create Post'}</h2>
    <input
      type="text"
      placeholder="Title"
      value={formState.title}
      onChange={(e) => setFormState({ ...formState, title: e.target.value })}
    />
    <textarea
      placeholder="Body"
      value={formState.body}
      onChange={(e) => setFormState({ ...formState, body: e.target.value })}
    ></textarea>
    <button onClick={onSubmit}>{formState.id ? 'Update' : 'Create'}</button>
  </div>
);

export default PostFormView;
