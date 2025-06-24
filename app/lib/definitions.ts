// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Registration = {
  id: string;
  course: '佛山彩灯' | '广东剪纸' | '佛山秋色' | '佛山狮头';
  parent: string;
  phone: string;
  student: string;
  created_at: string;
  updated_at: string;
};

export interface ResponseMessage {
  success: boolean;
  message: string;
  data: any;
}