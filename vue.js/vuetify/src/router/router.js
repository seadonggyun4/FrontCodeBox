import Vue from 'vue';
import Router from 'vue-router';

//components
import Dashboard from '@/views/Dashboard.vue';
import GridSystem from '@/views/GridSystem.vue';
import GridListPage from '@/views/GridListPage.vue';
import Breakpoint from '@/views/Breakpoints.vue';
import Typography from '@/views/Typography.vue';
import Tables from '@/views/Tables.vue';
import Buttons from '@/views/Buttons.vue';
import Icons from '@/views/Icons.vue';
import Forms from '@/views/Forms.vue';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/grid-system',
		name: 'GridSystem',
		component: GridSystem,
	},
	{
		path: '/grid-list-page',
		name: 'GridListPage',
		component: GridListPage,
	},
	{
		path: '/breakpoint',
		name: 'Breakpoint',
		component: Breakpoint,
	},
	{
		path: '/typography',
		name: 'Typography',
		component: Typography,
	},
	{
		path: '/tables',
		name: 'Tables',
		component: Tables,
	},
	{
		path: '/buttons',
		name: 'Buttons',
		component: Buttons,
	},
	{
		path: '/forms',
		name: 'Forms',
		component: Forms,
	},
	{
		path: '/icons',
		name: 'Icons',
		component: Icons,
	},
];

const router = new Router({
	mode: 'history',
	routes,
});

export default router;
