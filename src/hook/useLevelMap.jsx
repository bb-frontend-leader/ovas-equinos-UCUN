// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { onUpdateStateLevel, onUpdateDataLevel, onAddItemLevel } from "@store";
// import { getRouter } from "./../routes/Router";

// export const useLevelMap = (path, addItem = false) => {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   const currentPATH = (path || pathname).replace(/\/$/gi, "");

//   const { levels } = useSelector((state) => state.levelMap);
//   const [level, setLevel] = useState(null);

//   const setUpdateLevelActive = (pathLevel = "", active = true) => {
//     pathLevel = `${pathLevel}`.replace(/\/$/gi, "");
//     const result = levels.find((e) => e.path === `${pathLevel || currentPATH}`);
//     result && dispatch(onUpdateStateLevel({ ...result, active }));
//   };

//   const setUpdateLevelComplete = (pathLevel = "", complete = true) => {
//     pathLevel = `${pathLevel}`.replace(/\/$/gi, "");
//     const result = levels.find((e) => e.path === `${pathLevel || currentPATH}`);
//     result &&
//       dispatch(onUpdateStateLevel({ ...result, active: true, complete }));
//   };

//   const setActivityLoad = (data = {}) => {
//     const result = level || getRoutes().find((e) => e.path === currentPATH);
//     data.activities = data.activities?.map(({ complete = false, ...e }) => ({
//       ...e,
//       complete,
//     }));

//     const levelResult = {
//       ...result,
//       ...data,
//       activities: result.activities || data.activities,
//     };
//     dispatch(onUpdateStateLevel(levelResult));
//   };

//   const setActivityComplete = (data = {}, addAct = false) => {
//     if (level) {
//       let countAct = 0;
//       const result = levels.find((e) => e.path === level.path);
//       let { complete_activate, activities } = result;

//       if (!Array.isArray(data)) {
//         activities = activities?.map((item) => {
//           if (item.key === data.key) {
//             countAct += 1;
//             return { ...item, complete: true, ...data };
//           } else {
//             countAct += item.complete ? 1 : 0;
//             return item;
//           }
//         });
//         if (addAct) {
//           const act = activities.find((e) => e.key === data.key);
//           Object.entries(act || {}).length === 0 && activities.push(data);
//         }
//       } else {
//         activities = activities?.filter(
//           (e) => !data.find((i) => i.key === e.key)
//         );
//         activities = [
//           ...activities,
//           ...data.map((e) => ({ ...e, complete: true })),
//         ];
//         countAct = activities?.filter((e) => e.complete === true)?.length;
//       }
//       const complete = countAct === activities?.length;
//       const levelResult = { ...level, complete, activities };
//       dispatch(onUpdateStateLevel(levelResult));
//       complete_activate && setUpdateLevelActive(complete_activate, true);
//     }
//   };

//   const getRoutes = () => {
//     if (levels?.length > 0) {
//       return levels;
//     } else {
//       const pathRoutes = [];
//       const data = getRouter();
//       data.map((route) => {
//         pathRoutes.push({
//           path: route.to,
//           active: route.active || false,
//           rotate: route.rotate || false,
//           percentage: route.percentage || 0,
//           parent: route.parent || false,
//         });

//         route.items?.map((item) => {
//           pathRoutes.push({
//             path: `${route.to}${item.to}`,
//             active: item.active || false,
//             rotate: item.rotate || false,
//             percentage: item.percentage || 0,
//             parent: item.parent || false,
//           });
//           return item;
//         });
//         return route;
//       });
//       return pathRoutes;
//     }
//   };

//   useEffect(() => {
//     levels?.length <= 0 && dispatch(onUpdateDataLevel(getRoutes()));
//     setLevel(getRoutes().find((e) => e.path === currentPATH));
//   }, []);

//   useEffect(() => {
//     let jsonLevel = getRoutes().find((e) => e.path === currentPATH);
//     if (addItem && !jsonLevel) {
//       jsonLevel = { active: false, complete: false, path: currentPATH };
//       dispatch(onAddItemLevel(jsonLevel));
//     }
//     setLevel(jsonLevel);
//   }, [levels]);

//   return {
//     level: level || {},
//     //* Métodos
//     setUpdateLevelActive,
//     setActivityLoad,
//     setActivityComplete,
//     setUpdateLevelComplete,
//   };
// };
