// import { getSession } from 'next-auth/react';

// export default async (req, res) => {
//   const session = await getSession({ req });

//   if (session) {
//     // Người dùng đã đăng nhập
//     const { username } = req.body;
  
//     // Thực hiện xác thực tài khoản công ty
//     if (username === 'company' ) {
//       res.status(200).json({ id: 1, name: 'Công Ty', role: 'company' });
//     }
//     // Thực hiện xác thực tài khoản nhân viên
//     else if (username === 'employee' ) {
//       res.status(200).json({ id: 2, name: 'Nhân Viên', role: 'employee' });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } else {
//     // Người dùng chưa đăng nhập
//     res.status(401).json({ error: 'User not authenticated' });
//   }
// };