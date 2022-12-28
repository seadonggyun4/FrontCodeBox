<template>
	<div>
		<v-container fluid>
			<v-row>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-spacer></v-spacer>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-spacer></v-spacer>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-container fluid>
			<v-row :style="{ height: '120px' }" class="red" align="center">
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
			</v-row>
			<v-row :style="{ height: '120px' }" class="red">
				<v-col align-self="end">
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col align-self="center">
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
				<v-col>
					<v-card class="pa-3" outlined> GridSystem Page </v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
