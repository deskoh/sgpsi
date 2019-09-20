import React from 'react';
import moment from 'moment';

interface ReadingProps {
  value?: number,
  updatedAt: string,
}

const Reading: React.FC<ReadingProps> = ({ value = 0, updatedAt }) => {
  return (
    <>
      <p>PM2.5 reading</p>
      <p>
        <code className="Reading-value">{value}</code>
      </p>
      <p className="Reading-footer">
        {updatedAt && `Updated ${moment(updatedAt).fromNow()}`}
      </p>
    </>
  );
}

export default Reading;
