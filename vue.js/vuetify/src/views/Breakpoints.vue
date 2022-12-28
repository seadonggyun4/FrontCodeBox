<template>
	<v-container fluid>
		<v-card>
			<v-card-title>
				$vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
			</v-card-title>
			<v-container class="grey lighten-3">
				<v-card class="pa-3" outlined :height="height"></v-card>
			</v-container>
		</v-card>
		<v-card class="mt-5">
			<v-card-title>
				$vuetify.breakpoint.mobile: {{ $vuetify.breakpoint.mobile }} <br />
				$vuetify.breakpoint.mobileBreakpoint:
				{{ $vuetify.breakpoint.mobileBreakpoint }}
			</v-card-title>
			<v-container class="grey lighten-3">
				<v-dialog
					v-model="dialog"
					width="500"
					:fullscreen="$vuetify.breakpoint.mobile"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
							Click Me
						</v-btn>
					</template>

					<v-card>
						<v-card-title class="text-h5 grey lighten-2">
							Privacy Policy
						</v-card-title>

						<v-card-text class="pt-5">
							모달창 테스트 입니다.모달창 테스트 입니다.모달창 테스트
							입니다.모달창 테스트 입니다. 모달창 테스트 입니다.모달창 테스트
							입니다.모달창 테스트 입니다.모달창 테스트 입니다. 모달창 테스트
							입니다.모달창 테스트 입니다.모달창 테스트 입니다.
						</v-card-text>

						<v-divider></v-divider>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" text @click="dialog = false">
								I accept
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-container>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
		};
	},
	computed: {
		height() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 100;
				case 'sm':
					return 200;
				case 'md':
					return 300;
				case 'lg':
					return 400;
				default:
					return 500;
			}
		},
	},
};
</script>
