import React from "react";

export default function LeftNav(props) {
  return (
    <button aria-label="previous" {...props} style={{all:'unset',cursor:'pointer'}}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L9 12L15 18" stroke="#00ff6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
