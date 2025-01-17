module.exports = {
	Name: "refresh-twitch-app-access-token",
	Expression: "0 0 12 * * *",
	Description: "Refreshes the bot's Twitch app access token.",
	Defer: null,
	Type: "Bot",
	Code: (async function refreshTwitchAppAccessToken () {
		const { access_token: token } = await sb.Got({
			method: "POST",
			url: "https://id.twitch.tv/oauth2/token",
			responseType: "json",
			searchParams: {
				grant_type: "client_credentials",
				client_id: sb.Config.get("TWITCH_CLIENT_ID"),
				client_secret: sb.Config.get("TWITCH_CLIENT_SECRET"),
				scope: ""
			}
		}).json();

		await sb.Config.set("TWITCH_APP_ACCESS_TOKEN", token);

		console.log("Twitch app access token successfuly updated");
	})
};
