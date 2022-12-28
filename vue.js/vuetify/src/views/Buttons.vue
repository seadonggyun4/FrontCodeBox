<template>
	<v-container fluid>
		<v-card class="pa-3">
			<v-row>
				<v-col cols="3">
					<v-btn color="primary">Primary</v-btn>
				</v-col>
				<v-col cols="3">
					<v-btn color="success" disabled>success</v-btn>
				</v-col>
				<v-col cols="3">
					<v-btn color="error" fab>error</v-btn>
				</v-col>
				<v-col cols="3">
					<v-btn color="success" fab loading>success</v-btn>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>
