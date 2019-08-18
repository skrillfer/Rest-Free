export const getAllOrders=(db)=>{
    return db.collection('restaurants')
    .doc('opimWyCY5tNKY7ZdQqsN')
    .collection('orders');
}

export const getItemsInOrder=(db,idDoc)=>{
    return getAllOrders(db).doc(idDoc).collection('items');
}

export const getTypesInItemFromOrder=(db,idDoc)=>{
    //return getItemsInOrder(db,idDoc).doc(idDoc).collection('items');
}

export const getAllCategories = (db)=>{
    return db.collection('restaurants')
    .doc('opimWyCY5tNKY7ZdQqsN')
    .collection('categories');
}