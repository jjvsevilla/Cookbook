import React, {PropTypes}  from 'react';

const NavigatorPageLinks = ({pageTabs}) => {
  return (   
    <div className="toc-wrapper">
      <ul className="section table-of-contents">
        {pageTabs.map((pageTab, index) =>            
          <li key={index}><a href={'#' + pageTab.navID}>{pageTab.navName}</a></li>
        )}
      </ul>
    </div>   
  );
};

NavigatorPageLinks.propTypes = {
  pageTabs: PropTypes.array.isRequired
};

export default NavigatorPageLinks;