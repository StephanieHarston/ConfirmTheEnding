function confirmEnding(str, target) {
  for (let n = 1; n < str.length; n++) {
      let substring = str.substr(n,str.length);
      if(substring === target) {
      return true 
  }
  }
      return false
  }

confirmEnding("Bastian", "n");