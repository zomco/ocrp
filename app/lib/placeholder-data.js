// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const courses = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: '2024 佛山剪纸',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: '2024 佛山狮头',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: '2024 佛山狮头',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: '2024 金箔锻造技艺',
  },
];

const registrations = [
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120001',
    course_id: courses[0].id,
    parent: "张三",
    phone: '13112345678',
    student: '张三三',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120003',
    course_id: courses[1].id,
    parent: "李四",
    phone: '13112345678',
    student: '李四四',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120004',
    course_id: courses[2].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120005',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120006',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120007',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120009',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120010',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120011',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120012',
    course_id: courses[3].id,
    parent: "刘五",
    phone: '13112345678',
    student: '刘五五',
  },
];


module.exports = {
  courses,
  registrations,
};
