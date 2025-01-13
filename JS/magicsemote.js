// emojis to go through
var faces = [
    "     ٩(◕‿◕)٩     ",
    "     ۶(◕‿◕)۶     ",
    "     (/◕‿◕)/     ",
    "     (╯◕‿<)╯     ",
    "     (/◕‿◕)/     ",
    "     (╯◕‿<)╯     ",
    "     ٩(◕‿◕)٩     ",
    "     (╯◕‿<)╯     ",
    "     ۶(◕‿◕)۶     ",
    "     (╯◕‿<)╯     ",
    "     ٩(◕▽◕)۶     ",
    "     (ﾉ◕▿◕)ﾉ     ",
    "     (╯◕ヮ◕)╯     ",
    "    ✧(ﾉ◕ヮ◕)ﾉ✧    ",
    "   ✧ﾟ(ﾉ◕ヮ◕)ﾉﾟ✧   ",
    "  ✧ﾟ･(ﾉ◕ヮ◕)ﾉ･ﾟ✧  ",
    " ✧ﾟ･:(ﾉ◕ヮ◕)ﾉ:･ﾟ✧ ",
    "✧ﾟ･:*(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "ﾟ･:* (ﾉ◕ヮ◕)ﾉ *:･ﾟ",
    "･:*  (╯◕ヮ◕)╯  *:･",
    ":*   (╯◕ヮ◕)╯   *:",
    "*    (╯◕⩊◕)╯    *",
    "     (╯◕⩊◕)╯     ",
    "     (๑◕⩊◕๑)     ",
    "     (๑O⩊O๑)     ",
    "     (๑>⩊<๑)     ",
    "     (๑O⩊O๑)     ",
    "     (｡>⩊<｡)     ",
    "     (｡O⩊O｡)     ",
    "     (｡>⩊<｡)     ",
    "     (｡O⩊O｡)     ",
    "     (｡O⩊<｡)     ",
    "     (｡O⩊O｡)     ",
    "     (๑O⩊O๑)     ",
    "     (๑>⩊<๑)     ",
    "     (๑O⩊O๑)     ",
    "     (๑◕⩊◕๑)     ",
    "     (/◕‿◕)/     ",
    "     (╯◕‿◕)╯     ",
    "     ۶(◕‿◕)۶     "
];

var i = 0; //start fresh
var magics = document.getElementById('magicsemote') //hunt for ID from the page

var t = setInterval(function() {
  magics.innerText = faces[i] ; //post the emoji
  i++
  if (i >= faces.length) i=0;
}, 1000); //speed
