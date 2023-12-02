export const TruncateText = (str:string) =>{
if (str.length< 25) return str;
return str.substring(0,25) + '...';
}

//this is a helper function to help shorten the text