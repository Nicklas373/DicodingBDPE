async function NewJSONParse(){
	let url = 'https://raw.githubusercontent.com/Nicklas373/Hana-Media-Encoder/master/OTA';
    let obj = null;
    
    try {
        obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }

	const changelog = document.querySelector("#changelog");
	const relVer = document.querySelector("#ver_date");
	let joinRelVer = '';
	let splitChangelog = '';
	obj.changelog.map((val => {
			splitChangelog += `<li>${val.replace("-", "")}</li>`
	}))
	joinRelVer = obj.version.replace(".0", "") + " " + "(" + obj.release_date + ")";
	changelog.innerHTML = splitChangelog;
	relVer.innerHTML = "Latest Release v" + joinRelVer;
}

NewJSONParse();