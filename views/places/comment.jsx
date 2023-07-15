const React = require('react');
const Def = require('../default.jsx');

function CommentForm({ placeId }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();
  };

  return (
    <Def>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <label htmlFor="content">Content:</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="author">Author:</label>
              <input
                className="form-control"
                id="author"
                type="text"
                name="author"
                required
              />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="starRating">Star Rating:</label>
              <input
                className="form-control"
                id="starRating"
                type="number"
                name="starRating"
                step="0.5"
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="rant">Rant:</label>
              <input
                type="checkbox"
                className="form-control"
                id="rant"
                name="rant"
              />
            </div>
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = CommentForm;
