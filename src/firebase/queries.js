export const showItems=(db)=>{
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


export const getAllOrdersWaiter=(db,waiterId)=>{
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


export const getCollectionByCondition=(db,collName,condition)=>{

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

export const getCollectionById=(db,nameColl)=>{
    return db.collection(nameColl)
    .get()
    .then(
        querySnapshot => {
                const data =querySnapshot.docs.map(doc => doc.data());
                return data;
        }
    ).catch(error=>{console.log(error); return [];});
}

export const getUidsCollectionById=(db,nameColl)=>{
    return db.collection(nameColl)
    .get()
    .then(
        querySnapshot => {
                const data =querySnapshot.docs.map(doc => doc.id);
                return data;
        }
    ).catch(error=>{console.log(error); return [];});
}

export const getDocFromCollectionById=(db,nameColl,docId)=>{
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

export const getPropertyOfCollection=(db,nameColl,docId,nameProperty)=>{
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

export const deleteDocById=(db,nameColl,element)=>{
    var ref=db.collection(nameColl).doc(element);
    var batch = db.batch();
    console.log('hola');
    batch.delete(ref);
    batch.commit().then(function () {
        console.log("deleted commited");
    });
}


/*Real Time */
export const getCategories=(db)=>{
    var arr=[];
     db.collection('restaurants')
    .doc('opimWyCY5tNKY7ZdQqsN')
    .collection('categories')
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            arr.push({id:doc.id,...doc.data()});
        });
        return arr;
    });
}