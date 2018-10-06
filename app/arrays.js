exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return _.indexOf(arr, item);
  },

  sum: function(arr) {
    let retVal = 0;
    function add(val) {
      retVal += val;
    }
    _.forEach(arr, add);
    return retVal;
  },

  remove: function(arr, item) {
    let newArr = [];
    _.forEach(arr, function(itemValue) {
      if (itemValue !== item) {
        newArr.push(itemValue);
      }
    });
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    const size = arr.length;
    for (let index = 0; index < size; index++) {
      let currentValue = arr[index];
      if (currentValue !== item) {
        arr.push(currentValue);
      }
    }
    arr.splice(0, size);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(1);
    return arr;
  },

  concat: function(arr1, arr2) {
    arr1.push(...arr2);
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.unshift(item);
    if (index !== 0) {
      _.forEach(arr, function(currentValue, currentIndex) {
        if (currentIndex > 0 && currentIndex <= index) {
          arr[currentIndex] = arr[currentIndex - 1];
          arr[currentIndex - 1] = currentValue;
        }
      });
    }
    return arr;
  },

  count: function(arr, item) {
    return _.filter(arr, function(currentValue) {
      return currentValue === item;
    }).length;
  },

  duplicates: function(arr) {
    const item = new Set();
    const duplicates = [];
    _.forEach(arr, function(currentValue) {
      if (item.has(currentValue) && !~_.indexOf(duplicates, currentValue)) {
        duplicates.push(currentValue);
      } else {
        item.add(currentValue);
      }
    });
    return duplicates;
  },

  square: function(arr) {
    return _.map(arr, function(currentValue) {
      return currentValue * currentValue;
    });
  },

  findAllOccurrences: function(arr, target) {
    return _.map(arr, function(currentValue, currentIndex) {
      return currentValue === target ? currentIndex : -1;
    }).filter(value => {
      return value !== -1;
    });
  }
};
