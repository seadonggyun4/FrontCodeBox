<template>
	<v-container fluid>
		<v-card class="pa-3">
			<v-card-title>Typography</v-card-title>
			<v-container class="grey lighten-3">
				<v-card class="pa-3" outlined>
					<p class="text-subtitle-1 text-sm-h1 font-weight-thin">Heading 1</p>
					<p class="text-subtitle-2 text-sm-h2 font-weight-bold">Heading 2</p>
					<p
						class="text-subtitle-2 text-sm-h3 font-weight-medium text-center text-sm-left"
					>
						Heading 3
					</p>
					<!-- Heading 2
                    Heading 3
                    Heading 4
                    Heading 5
                    Heading 6
                    Subtitle 1
                    Subtitle 2
                    Body 1
                    Body 2
                    BUTTON
                    Caption
                    OVERLINE -->
				</v-card>
				<v-card class="pa-3 primary" outlined> 컨텐츠 </v-card>
				<v-card class="pa-3 secondary" outlined> 컨텐츠 </v-card>
				<v-card class="pa-3 error lighten-3" outlined> 컨텐츠 </v-card>
				<v-card class="pa-3 error" outlined> 컨텐츠 </v-card>
				<v-card class="pa-3 error darken-3" outlined> 컨텐츠 </v-card>
				<v-card class="pa-3 primary--text" outlined> 컨텐츠 </v-card>
				<v-card class="pa-3 primary--text d-none d-md-block" outlined>
					컨텐츠
				</v-card>
			</v-container>
		</v-card>
	</v-container>
</template>
