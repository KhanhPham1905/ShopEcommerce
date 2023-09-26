import React, { createContext, useState, useEffect } from 'react';
import { POST } from '@/pages/api/auth';

const ListEpContext = createContext([]);

function ListEpProvider({ children }: { children: any }) {
  const [listEp, setListEp] = useState([]);
  useEffect(() => {
    const loadEp = async () => {
      try {
        const url = `projects/quan-ly-du-an-theo-danh-sach-cong-viec/1?keywords`;
        const response = await POST(url);
        setListEp(response?.data?.listEp);
      } catch (error) {
        console.log(error);
      }
    };
    loadEp();
  }, []);

  return (
    <ListEpContext.Provider value={listEp}>
      {children}
    </ListEpContext.Provider>
  );
}

export { ListEpContext, ListEpProvider };