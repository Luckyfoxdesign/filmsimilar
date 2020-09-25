import fetch from "node-fetch"

export async function get(req, res) {
	const response = await fetch("http://kino.luckyfr6.beget.tech/api.php?pager=0")
	const films = await response.json().then((e) => {
		deleteUnnecessaryEntries(e)
		res.end(JSON.stringify(e))
	})
}

function deleteUnnecessaryEntries(obj) {
	obj.forEach((r) => {
		delete r.id
		delete r.country
		delete r.desc
		delete r.director
	})
}
