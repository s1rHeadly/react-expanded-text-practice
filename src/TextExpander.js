import React, { useState } from 'react';
import PropTypes from 'prop-types'

const TextExpander = ({children, expanded, collapsedNumWords, className, collapseButtonText, expandButtonText}) => {
  
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded ? children : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  )
}


TextExpander.defaultProps = {
  expanded: false,
  collapsedNumWords: 10,
  className: 'box',
  collapseButtonText: 'open',
  expandButtonText: 'close',
}


export default TextExpander