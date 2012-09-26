var ridict = require('ridict');
var data = "Madam Speaker, Mr. Vice President, Members of Congress, the First Lady of the United States--she's around here somewhere: I have come here tonight not only to address the distinguished men and women in this great Chamber, but to speak frankly and directly to the men and women who sent us here.";
var res = ridict.matches(data);
console.log(res);
