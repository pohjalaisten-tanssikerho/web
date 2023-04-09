import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

export async function loadCourses() {
  // Load course data
  const courseData = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/courses.json').then(res => res.json());
  const courses = courseData.courses;
  console.log(courseData); //log the loaded course data

  // Get container element
  const container = document.getElementById('courses-container');

  // Create table element
  const table = document.createElement('table');

  // Create table headers
  const headerRow = document.createElement('tr');
  const emptyHeaderCell = document.createElement('th');
  headerRow.appendChild(emptyHeaderCell);
  const courseDates = courses.slice(0, 3).map(course => {
    const date = dayjs.utc(course.date).tz(timezoneName);
    const dateHeaderCell = document.createElement('th');
    dateHeaderCell.textContent = date.format('ddd, MMM D, YYYY h:mm A');
    headerRow.appendChild(dateHeaderCell);
    return date;
  });
  table.appendChild(headerRow);

  // Create table rows for each course
  const courseTypes = ['Alkeet', 'AlkeisJatko', 'Jatko'];
  courseTypes.forEach(courseType => {
    const courseRow = document.createElement('tr');
    const courseTypeCell = document.createElement('th');
    courseTypeCell.textContent = courseType;
    courseRow.appendChild(courseTypeCell);
    courseDates.forEach(date => {
      const course = courses.find(course => dayjs.utc(course.date).tz(timezoneName).isSame(date));
      const courseCell = document.createElement('td');
      courseCell.textContent = course ? course[courseType.toLowerCase()] : '';
      courseRow.appendChild(courseCell);
    });
    table.appendChild(courseRow);
  });

  // Add table to container
  container.appendChild(table);
}
