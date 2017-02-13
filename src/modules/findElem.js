export default {
	findElem(arrayToSearch, attr, val) {
		for(var i = 0; i < arrayToSearch.length; i++) {
			if(arrayToSearch[i][attr] == val) {
				return i;
			}
		}
		return -1;
	}
}