export const MixArrWithIdToInsert = (array, newField, newFieldValue) => { 
	return array.map(o => {
		return Object.assign(o, {[newField]: newFieldValue})
	})
}

export const MixArrWithIdToInsertUpdate = (array, fieldToDelete, newField, newFieldValue) => { 
	return array.map(o => {
		delete o[fieldToDelete];
		return Object.assign(o, {[newField]: newFieldValue})
	})
}