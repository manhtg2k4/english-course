export type CourseLevel = 'S' | 'Pres' | 'TC' | 'MTC';
export type KindOfCourse = 'IELTS' | 'TOEIC' | '4SKILLS' | 'VSTEP';
export type LessonStatus = 'not-started' | 'completed';
export type CourseStatus = 'not-started' | 'in-progress' | 'completed';

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: number; // phút
  url: string;
  description: string;
  status: LessonStatus;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  level: CourseLevel;
  kindOfCourse: KindOfCourse;
  totalLessons: number;
  progress: number;
  status?: CourseStatus;
  lessons: Lesson[];
}
