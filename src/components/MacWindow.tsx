import React from 'react';

export default function MacWindow({ children, url }) {
  return (
    <div className="mac-window">
      <div className="mac-header">
        <div className="mac-dots">
          <div className="mac-dot red"></div>
          <div className="mac-dot yellow"></div>
          <div className="mac-dot green"></div>
        </div>
        {url && (
          <div className="mac-address-bar">
            <div className="mac-status-dot"></div>
            <span>{url}</span>
          </div>
        )}
        <div className="mac-spacer"></div>
      </div>
      <div className="mac-content">
        {children}
      </div>
    </div>
  );
}

