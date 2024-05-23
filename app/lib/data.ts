import {sql} from '@vercel/postgres';
import {Registration} from './definitions';


export async function fetchRegistersByCourseId(courseId: string): Promise<Registration[]> {
  try {
    const data = await sql<Registration>`
      SELECT *
      FROM registrations
      WHERE registrations.course_id = ${courseId}
      ORDER BY registrations.created_at DESC`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the registrations by course id.');
  }
}

