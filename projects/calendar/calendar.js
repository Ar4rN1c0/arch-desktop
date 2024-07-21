import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"


const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
const filePath = path.join(__dirname, "calendar.txt")


fs.readFile(filePath, "utf8", (err, data) => {
  if(err) {
    console.error(err)
  }

  const lines = data.split("\n")
  const days = []
  let day = []
  for (let i of lines) {
    if(i !== "") {
      day.push(i)
    }else {
      days.push(day.join("\n"))
      day = [] 
    }
  }
  const planning = days.map(day => {
    const date = []
    for (let i of day) {
      if(i !== " ") {
        date.push(i)
      }else break
    }
    const formatDate = date.join("").split("/")
    formatDate[1] = formatDate[1] - 1
    let actualDate = new Date(...formatDate.reverse())  

    return {date: actualDate, }
  })
  dates.forEach(date => {
    console.log(date.toLocaleString())
  })
})
