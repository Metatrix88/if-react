// import React, { createContext, useContext, useState } from 'react';
//
// const FilterCountersContext = createContext();
//
// export const useFilterCountersContext = () => {
//   return useContext(FilterCountersContext);
// };
//
// export const FilterCountersContextProvider = ({ children }) => {
//   const [adultsCounter, setAdultsCounter] = useState(1);
//   const [roomsCounter, setRoomsCounter] = useState(1);
//   const [childrenCounter, setChildrenCounter] = useState(0);
//   const [childrenAges, setChildrenAges] = useState(Array(10).fill(0));
//
//   return (
//     <FilterCountersContext.Provider
//       value={{
//         adultsCounter,
//         setAdultsCounter,
//         roomsCounter,
//         setRoomsCounter,
//         childrenCounter,
//         setChildrenCounter,
//         childrenAges,
//         setChildrenAges,
//       }}
//     >
//       {children}
//     </FilterCountersContext.Provider>
//   );
// };
