export const updatePropertyInDocument=(ref,idDoc,payload)=>{
    ref.doc(idDoc).get().then(function(doc) {
        if (doc.exists) {
            ref.doc(idDoc).update(payload);
        } else {
            console.log("Update Error:No such document!");
        }
    }).catch(function(error) {
        console.log("Error updating document:", error);
    });
}