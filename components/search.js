import { useState } from "react";

export default function Search({searchInput, onSearchInputChange}) {    
  return (
    <input
      type="text"
      placeholder="search here"
      value={searchInput}
      onChange={(e) => {onSearchInputChange(e.target.value)}}
    />
  );
}
