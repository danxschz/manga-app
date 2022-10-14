import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component used to scroll to the top everytime you click on a react router link
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
