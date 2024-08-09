import React from 'react';

const DocumentViewer = ({ src, title}:{src: string, title: string}) => {
  return (
    <div className='w-full h-screen'>
      <iframe
        src={src}
        className='w-full h-full'
        title={title}
        frameBorder="0"
      />
    </div>
  );
};

export default DocumentViewer;
