import React, {PropTypes}  from 'react';
import {Link} from 'react-router';

const NavigatorPageLinkItem = ({pageTab}) => {
  console.log(pageTab)
  let link;
/*
  if(pageTab.link){
    link = (<li>
              <Link to={pageTab.link}>{pageTab.navName}</Link>
            </li>);
  } else {*/
    link = (<li key={index}><a href={'#' + pageTab.navID}>{pageTab.navName}</a></li>);
  //}
  return (
    link
  );
};

NavigatorPageLinkItem.propTypes = {
  pageTab: PropTypes.object.isRequired
};

export default NavigatorPageLinkItem;