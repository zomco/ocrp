import {sql} from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {Registration} from './definitions';


export async function fetchRegistrationsByCourse(course: string): Promise<Registration[]> {
  noStore();
  try {
    const data = await sql<Registration>`
      SELECT *
      FROM registrations
      WHERE registrations.course = ${course}
      ORDER BY registrations.created_at DESC`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the registrations by course.');
  }
}

