import fetch from "node-fetch"

export async function get(req, res) {
	const { slug } = req.params
	const response = await fetch(`http://kino.luckyfr6.beget.tech/api.php?pager=0&q=${encodeURIComponent(slug[0])}`)
	const films = await response.json().then((e) => {
		res.end(JSON.stringify(e))
	})
}
