import React from 'react';

const AddComment = ({ user, topicId, addComment }) => {
  let message = '';

  const onMessageChange = event => {
    message = event.target.value;
  };

  // TODO: add redirect to last page

  const onSubmit = event => {
    event.preventDefault();
    addComment(user, topicId, message);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="">
          <h4 htmlFor="">Add comment</h4>
          <textarea name="message" onChange={onMessageChange} className="" />
        </div>
        <button type="submit" className="">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
