var hasCycle = function(head) {
  var set = new Set();
  var cur = head;
  while(cur) {
    if(set.has(cur)){
      return true;
    } else {
      set.add(cur);
    }
    cur = cur.next;
  }
  return false 
};