
export default class EnhancedSet extends Set {
    

    union(s) {
    	return new EnhancedSet([...this.values(), ...s.values()]);
    }

    intersection(s) {
        let result = new EnhancedSet();
        for (const item of this.values()) {
            if (s.has(item)) {
                result.add(item);
            }
        }
        return result;
        /*return new EnhancedSet([...this.values()].reduce((prev, curr, item, array) => {
          if(s.has(item)) {
          	console.log(item);
          	return [...prev, item];
          }
          return prev;
        }, []));*/
    }

    difference(s) {
    	let result = new EnhancedSet([...this.values()]);
    	for (const item of s.values()) {
    		if (result.has(item)) {
    			result.delete(item);
    		}
    	}
    	return result;
    }

    symmetricDifference(s) {
    	let result = new EnhancedSet([...this.values()]);
    	for (const item of s.values()) {
    		if (result.has(item)) {
    			result.delete(item);
    		} else {
    			result.add(item);
    		}
    	}
    	return result;
    }

    isSuperset(s) {
        return [...s.values()].every((item) => this.has(item));
    }

    isSubset(s) {
    	return [...this.values()].every((item) => s.has(item));
    }
}
