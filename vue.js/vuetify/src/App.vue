<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			dark
			:src="require('@/assets/sidebar.jpg')"
		>
			<template v-slot:img="props">
				<v-img :gradient="gradient" v-bind="props"></v-img>
			</template>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> Application </v-list-item-title>
					<v-list-item-subtitle> subtext </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					link
					:to="item.to"
					active-class="primary"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<v-container fluid>
				<RouterView />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	components: {},

	data() {
		return {
			gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, 0.7)',
			drawer: true,
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
				{ title: 'GridSystem', icon: 'mdi-view-dashboard', to: '/grid-system' },
				{
					title: 'GridListPage',
					icon: 'mdi-view-dashboard',
					to: '/grid-list-page',
				},
				{
					title: 'Breakpoint',
					icon: 'mdi-view-dashboard',
					to: '/breakpoint',
				},
				{
					title: 'Typography',
					icon: 'mdi-view-dashboard',
					to: '/typography',
				},
				{
					title: 'Icons',
					icon: 'mdi-view-dashboard',
					to: '/icons',
				},
				{
					title: 'Tables',
					icon: 'mdi-view-dashboard',
					to: '/tables',
				},
				{
					title: 'Forms',
					icon: 'mdi-view-dashboard',
					to: '/forms',
				},
				{
					title: 'Buttons',
					icon: 'mdi-view-dashboard',
					to: '/buttons',
				},
			],
			right: null,
		};
	},
};
</script>
