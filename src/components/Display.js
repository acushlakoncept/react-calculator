import React from 'react';

export default function Display({ result = 0 }) {
  return (
    <div className="display">
      <h2>{ result }</h2>
    </div>
  );
}
