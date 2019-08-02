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
    return db.collection("waiters")
    .doc(waiterId)
    .get()
    .then(
        doc=>{
            return doc.data().orders;
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

const getCollectionById=(db,nameColl,collId)=>{
    return db.collection(nameColl)
    .doc(collId)
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

const getPropertyOfCollection=(db,nameColl,collId,nameProperty)=>{
    return db.collection(nameColl)
    .doc(collId)
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
    getCollectionById,
    getPropertyOfCollection,
    getCollectionByCondition
};