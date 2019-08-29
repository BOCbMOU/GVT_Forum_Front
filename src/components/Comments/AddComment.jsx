import React from 'react';

const AddComment = ({ user, topicId, addComment }) => {
  let message = '';

  const onMessageChange = event => {
    message = event.target.value;
  };

  // TODO: add redirect to last page

  const onSubmit = event => {
    event.preventDefault();
    addComment(user, { topicId, message });
  };

  return (
    <form onSubmit={onSubmit} className="card ml-2 mr-2 p-2">
      <div className="">
        <h4 htmlFor="" className="card-title ml-1">
          Add comment
        </h4>
        <textarea
          name="message"
          onChange={onMessageChange}
          className="form-control mb-2"
        />
      </div>
      <button type="submit" className="btn btn-dark mr-auto ml-2">
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
