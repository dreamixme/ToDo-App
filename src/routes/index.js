import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import { map } from './RouteMap';

const TodoApp = lazy(() => import('../components/TodoApp'));

const index = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path={map.routes.todo} element={<TodoApp />} exact />
      </Routes>
    </Suspense>
  );
};

export default index;
