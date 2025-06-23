{// 'use client';

// import { useState } from 'react';
// import RetroTable from '@/app/shared/tables/basic/retro';


// const sampleData = [
//   { id: 1, name: 'Alice', email: 'alice@example.com' },
//   { id: 2, name: 'Bob', email: 'bob@example.com' },
//   // Add more rows as needed
// ];

// export default function DashboardTablePage() {
//   const [search, setSearch] = useState('');
//   const filteredData = sampleData.filter(
//     row =>
//       row.name.toLowerCase().includes(search.toLowerCase()) ||
//       row.email.toLowerCase().includes(search.toLowerCase())
//   );

//    return (
//     <>

//     <div className="p-6">
//       <RetroTable searchAble tableHeader pagination />
//     </div>
//     </>
//   );
// }
}

import SearchTablePage from "./therapist_list/page"

export default function TableLayoutDemo() {
  return(
  <>
    <SearchTablePage/>
  </>
  )
}
