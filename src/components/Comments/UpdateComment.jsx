import React from 'react';

const UpdateComment = ({
  user,
  commentId,
  oldMessage,
  updateComment,
  resetUpdateComment,
}) => {
  let message = '';

  const onMessageChange = event => {
    message = event.target.value;
  };

  const onSubmit = event => {
    event.preventDefault();
    updateComment(user, { commentId, message });
    resetUpdateComment();
  };

  // TODO: update comment message on front after update

  return (
    <form onSubmit={onSubmit} className="card ml-2 mr-2 p-2">
      <div className="">
        <h4 htmlFor="" className="card-title ml-1">
          Update comment
        </h4>
        <textarea
          name="message"
          defaultValue={oldMessage}
          onChange={onMessageChange}
          className="form-control mb-2"
        />
      </div>
      <button type="submit" className="btn btn-dark mr-auto ml-2">
        Update Comment
      </button>
      <button
        onClick={resetUpdateComment}
        className="btn btn-dark mr-auto ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default UpdateComment;
