export function idToMMObjArrInsert(arrFieldName, idArray, otherFieldName, otherID){
  return idArray.map(function(o)
  {
    let x = {};
    x[arrFieldName]   = o;
    x[otherFieldName] = otherID;
    return x;
  });
}

export function idToMMObjArrUpdate(newIDs, currentIDs, variableFieldName, constFieldName, constantID){
	let i, ii, add = [], del = [], x;

	//Look for ids in newIDs that are NOT in currentIDs. These will be ADDS.  ([] of m:m objects)
	for(i = 0, ii = newIDs.length; i < ii; i++)
	{
		if(currentIDs.indexOf(newIDs[i]) == -1)
		{
			x = {};
			x[variableFieldName] = newIDs[i];
			x[constFieldName]    = constantID;

			console.log(JSON.stringify(x));

			add.push(x);
		}
	}

	//Look for ids in currentIDs that are NOT in newIDs. These will be DELETES.  ([] of ids only)
	for(i = 0, ii = currentIDs.length; i < ii; i++)
	{
		if(newIDs.indexOf(currentIDs[i]) == -1)
		{
			del.push(currentIDs[i]);
		}
	}

	return {add: add, del: del};
}

export function arrToIngredientArr(arr, propField, firstField, secondField){
	let arrAux = [];
	for(var i = 0; i < arr.length; i++)
	{
		let newIng = {
			[firstField]: arr[i][propField][firstField],
			[secondField]: arr[i][propField][secondField]
		}
		arrAux.push(newIng);
	}
	return arrAux;
}