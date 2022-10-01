// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: getIcon('octicon:project-24'),
  },
  {
    title: 'Tasks',
    path: '/dashboard/products',
    icon: getIcon('fluent:clipboard-task-list-rtl-24-regular'),
  },
  {
    title: 'Settings',
    path: '/dashboard/products',
    icon: getIcon('ci:settings-filled'),
    
  }
];

export default navConfig;
