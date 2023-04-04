import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

export async function loadCourses() {
  const response = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/courses.json');
  const data = await response.json();
  return data.courses;
}

export { timezoneName };