import React from 'react';
import './Careers.css';

const Careers = () => {
  return (
    <div className="carriar-container">
      <div className="carriar-top">
        <h1>Career</h1>
      </div>

      <div className="carriar-down">
        <div className="carriar-content">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            {/* Add recent posts content here */}
          </div>
          <div className="recent-comments">
            <h2>Recent Comments</h2>
            <p>No comments to show.</p>
          </div>
        </div>

        <aside>
          <div className="archives">
            <h2>Archives</h2>
            <p>No archives to show.</p>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <p>No categories</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Careers;
