export const getAllOrders=(db)=>{
    return db.collection('restaurants')
    .doc('opimWyCY5tNKY7ZdQqsN')
    .collection('orders');
}

export const getItemsInOrder=(ref,idDoc)=>{
    return ref.doc(idDoc).collection('items');
}

export const getTypesInItemFromOrder=(ref,idDoc)=>{
    return ref.doc(idDoc).collection('types');
}

export const getAllCategories = (db)=>{
    return db.collection('restaurants')
    .doc('opimWyCY5tNKY7ZdQqsN')
    .collection('categories');
}