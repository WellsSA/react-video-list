import { Route, Routes } from 'react-router-dom';
import { PublicLayout, Dashboard } from './pages';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><Dashboard /></PublicLayout>} />
      <Route path="*" element={<PublicLayout><Dashboard /></PublicLayout>} />
    </Routes>
  );
}

export default AppRoutes;
