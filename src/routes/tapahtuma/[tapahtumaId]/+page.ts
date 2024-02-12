import type { PageLoad } from './$types'
export const load: PageLoad = async({params, fetch}) => {
  const findEvent = async(url: string) => {
    let response = await fetch(url)
    let data = await response.json()
    let obj = data.find(evt => evt.name === params.tapahtumaId + '.md')
    return obj
  }

  let eventObj = await findEvent('https://api.github.com/repos/pohjalaisten-tanssikerho/web-page/contents/content/tapahtuma')

  if (!eventObj) {
    eventObj = await findEvent('https://api.github.com/repos/pohjalaisten-tanssikerho/web-page/contents/content/tapahtuma-arkisto')
  }

  const raw_url = eventObj.download_url
  const res = await fetch(raw_url)
  const txtData: string = await res.text()
  const lines: string[] = txtData.split(/\r?\n/)
  const getTitleLine = (lines: string[]) => {
    for (let line of lines) {
        if (line.includes('title')) {
            return line
        }
    }
  }
  const titleLine = getTitleLine(lines)
  let eventTitle: string
  if (titleLine) {
    eventTitle = titleLine.split('\"')[1]
  } else {eventTitle = 'Failed to fetch title'}

  const eventContent: string = txtData.split('---')[2]

  return {
      title: eventTitle,
      content: eventContent
  };
}