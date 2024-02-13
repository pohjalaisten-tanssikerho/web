import type { PageLoad } from './$types'
export const load: PageLoad = async({params, fetch}) => {
  let raw_url = 'https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/content/tapahtuma/' + params.tapahtumaId + '.md'
  let res = await fetch(raw_url)
  if (res.status !== 200) {
    raw_url = raw_url.replace('tapahtuma', 'tapahtuma-arkisto')
    res = await fetch(raw_url)
  }
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