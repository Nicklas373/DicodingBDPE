const OTA = {
    "release_date": "17 September 2022",
	"version": "1.3.6.0",
	"changelog": [
	    "- Automatically rename file container if incompatibility found with file container and selected audio codec",
		"- Automatically write video resolution into video profile after enable it",
		"- Configure default value for WAV codec as PCM_S16LE while bit depth are not selected",
		"- Configure muxing profile to enable while media are not loaded with some condition",
		"- Detect .m2v file as supported media file",
		"- Do not reset profile configuration while user are trying to switching codec",
		"- Do not reset previous loaded media file name if user abort to load new media file",
		"- Do not set minimum image resolution for image snapshots",
		"- Fixup AAC encoding algorithm",
		"- Fixup crash while load new media file continously after complete load first media file",
		"- Fixup chapter add and read algorithm",
		"- Fixup frame mode value that always empty",
		"- Fixup issue with progressbar are not working while encoding audio file only or while enabling debug mode or frame skip from options menu",
		"- Fixup issue with wrong value that was restored from config for max and overal video bitrate",
		"- Introduce Color range, primary and space based from FFMPEG video filter (BT.709 & BT.2020) for video configuration",
		"- Introduce MP2 and OPUS audio codec",
		"- Lock all codec and menu configuration while media file are not loaded",
		"- Reduce almost all unnecessary messagebox notification",
		"- Remove duplicate variable call in other function",
		"- Simplify all process by remove depend with lock profile while want to load, save media and enable some of codec configuration",
		"- Simplify all file container check on all function",
		"- Switch some of notification to using windows native notification UI",
		"- Update some of codec information"
	],
	"update_url": "https://github.com/Nicklas373/Hana-Media-Encoder/releases/download/v1.3.6/HME_Setup.msi"
}

function AltJSONparse(){
	const changelog = document.querySelector("#changelog");
	const relVer = document.querySelector("#ver_date");
	let joinRelVer = '';
	let splitChangelog = '';
	OTA.changelog.map((val => {
		splitChangelog += `<li>${val.replace("-", "")}</li>`
	}))
	joinRelVer = OTA.version.replace(".0", "") + " " + "(" + OTA.release_date + ")";
	changelog.innerHTML = splitChangelog;
	relVer.innerHTML = "Latest Release v" + joinRelVer;
}

AltJSONparse();