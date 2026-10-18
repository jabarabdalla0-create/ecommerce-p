import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function SiteLayout() {
  return <><AnnouncementBar /><Header /><main><Outlet /></main><Footer /></>;
}
