import type * as Kit from '@sveltejs/kit';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;

async function loadCourses(): Promise<{ courses: any[] }> {
  // Load course data
  const courseData = await fetch('https://raw.githubusercontent.com/pohjalaisten-tanssikerho/web-page/master/data/courses.json').then(res => res.json());

  // Filter courses that are in the future
  const courses = courseData.courses.filter((course) => dayjs.utc(course.date).tz(timezoneName).isAfter(dayjs()));
  return { courses };
}

export async function load(page: Kit.LoadPage): Promise<OutputDataShape<typeof page>> {
  const courses = await loadCourses();

  return {
    page,
    courses,
  };
}
