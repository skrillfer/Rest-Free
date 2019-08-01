export const showItems=(db)=>{
    
    return  db.collection("items")
    .where("name", "==", "Coca Cola")
    .get()
    .then(querySnapshot => {
      const data =querySnapshot.docs.map(doc => doc.data());
      return data;
    });
}