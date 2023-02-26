// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import capitalData from "lib/data";

// export const useStore = create(
//   persist(
//     (set, get) => ({
//       answer: capitalData[0].capital,
//       guesslists: [
//         {
//           id: Date.now(),
//           userGuess: "berlin",
//         },
//         {
//           id: Date.now(),
//           userGuess: "belfast",
//         },
//         {
//           id: Date.now(),
//           userGuess: "london",
//         },
//       ],
//       addGuess: (guess) => {
//         set((state) => ({
//           guessLists: [...state.guestLists, guess],
//         }));
//       },
//     }),
//     {
//       name: "matt-on-a-map-storage", // unique name
//     }
//   )
// );

export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
