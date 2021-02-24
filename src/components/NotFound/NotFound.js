import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound-note">Page not found. Return <Link className="notfound-link" to="/">home</Link></p>
    </div>
  );
}

export default NotFound;
