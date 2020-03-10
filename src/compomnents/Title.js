import React from 'react';

const Title = ({ record, method }) => {
  return (
    <span>
      {method ? `${method}` : ``}{' '}
      {record.description
        ? `"${record.description}"`
        : record.name
        ? `${record.name}`
        : ''}
    </span>
  );
};

export default Title;
