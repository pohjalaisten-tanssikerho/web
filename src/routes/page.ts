import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

export interface Course {
  date: dayjs.Dayjs;
  alkeet: string;
  alkeisJatko: string;
  jatko: string;
}

export async function loadCourses(): Promise<Course[]> {
  const courseData = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/courses.json').then(res => res.json());

  const courses = courseData.courses.map((course: any) => {
    const date = dayjs.utc(course.date).tz(timezoneName);
    return { date, alkeet: course.alkeet, alkeisJatko: course.alkeis_jatko, jatko: course.jatko };
  }).filter((course: Course) => course.date.isAfter(dayjs()));

  return courses;
}
