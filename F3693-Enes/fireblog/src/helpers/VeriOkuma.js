import { getDatabase, ref, child, get } from "firebase/database";
async function VeriOkuma(container, userId, setUserdata) {
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `${container}/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setUserdata(snapshot.val());
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default VeriOkuma;
