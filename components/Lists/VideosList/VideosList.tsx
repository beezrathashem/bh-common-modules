import { FlatList } from "react-native";
import { useTime } from "bh-common-modules/index";
// import Firebase from "../../../lib/Firebase";
// import { useTime } from "../../../hooks/useTime";
//
export const VideosList = () => {
  // const {
  //   onPaginateLectures,
  //   onRefresh,
  //   data,
  //   loading,
  //   refreshing,
  //   paginating,
  //   lectureQuery,
  //   updateLectureQuery,
  // } = useLectures(Firebase);
  const d = useTime();
  console.log("d", d);
  // console.log("DATA", data);

  return <FlatList />;
};
