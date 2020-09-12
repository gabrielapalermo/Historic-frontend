import React from 'react';
import './Content.css';
import './ConsumeInstantaneous';
import './Historic';
import './Doubts';

function Content() {
    return (
      <div className="content">
        <ConsumeInstantaneous></ConsumeInstantaneous>
        <Historic></Historic>
        <Doubts></Doubts>
      </div>
    );
  }

export default Content;