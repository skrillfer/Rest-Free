const showItems=(db)=>{
    return  db.collection("items")
    .where("name", "==", "Coca Cola")
    .get()
    .then(
        querySnapshot => {
                const data =querySnapshot.docs.map(doc => doc.data());
                return data;
        }
    ).catch(error=>{console.log(error); return [];});
}


const getAllOrdersWaiter=(db,waiterId)=>{
    return db.collection("restaurants")
    .doc(waiterId)
    .collection("data")
    .get()
    .then(
        doc=>{
            console.log(doc.docs[0].data());
        }
    ).catch(error=>{console.log(error); return [];});;
}


const getCollectionByCondition=(db,collName,condition)=>{

    return  db.collection(collName)
    .where(condition.field,condition.operator,condition.value)
    .get()
    .then(
        querySnapshot => {
                const data =querySnapshot.docs.map(doc => doc.data());
                return data;
        }
    ).catch(error=>{console.log(error); return [];});
}

const getCollectionById=(db,nameColl)=>{
    return db.collection(nameColl)
    .get()
    .then(
        querySnapshot => {
                const data =querySnapshot.docs.map(doc => doc.data());
                return data;
        }
    ).catch(error=>{console.log(error); return [];});
}

const getDocFromCollectionById=(db,nameColl,docId)=>{
    return db.collection(nameColl)
    .doc(docId)
    .get()
    .then(
        doc=>{
            if(doc){
                return doc.data();
            }
            return {};
            
        }
    ).catch(error=>{console.log(error); return {};});
}

const getPropertyOfCollection=(db,nameColl,docId,nameProperty)=>{
    return db.collection(nameColl)
    .doc(docId)
    .get()
    .then(
        doc=>{
            if(doc){
                
                if(doc.data()[nameProperty]){
                    return doc.data()[nameProperty];
                }
            }
            return {};
        }
    ).catch(error=>{console.log(error); return {};});
}



export {
    showItems,
    getAllOrdersWaiter,
    getDocFromCollectionById,
    getPropertyOfCollection,
    getCollectionByCondition,
    getCollectionById
};