const fs = require("fs")

const folder = "./videos"

const files = fs.readdirSync(folder)

const videos = files.filter(file =>
    file.endsWith(".mp4") || file.endsWith(".webm")
)

fs.writeFileSync("videos.json", JSON.stringify(videos, null, 2))

console.log("videos.json atualizado!")
