// Description
//   A Hubot script that returns the "月刊少女野崎くん" special Twitter icons
//
// Configuration:
//   None
//
// Commands:
//   hubot nozakikun - 月刊少女野崎くん special Twitter icons
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var IMAGE_URLS;
  IMAGE_URLS = ['http://nozakikun.tv/images/special/sd_sakura_01.png', 'http://nozakikun.tv/images/special/sd_nozaki_01.png', 'http://nozakikun.tv/images/special/sd_mikorin_01.png', 'http://nozakikun.tv/images/special/sd_ouji.png', 'http://nozakikun.tv/images/special/sd_horichan_01.png', 'http://nozakikun.tv/images/special/sd_waka.png', 'http://nozakikun.tv/images/special/sd_yuzuki.png', 'http://nozakikun.tv/images/special/sd_tanuki_01.png', 'http://nozakikun.tv/images/special/sd_suzuki.png', 'http://nozakikun.tv/images/special/sd_mamiko.png', 'http://nozakikun.tv/images/special/sd_miyako.png', 'http://nozakikun.tv/images/special/sd_maeno.png', 'http://nozakikun.tv/images/special/sd_miyamae.png', 'http://nozakikun.tv/images/special/sd_tanuki_011.png', 'http://nozakikun.tv/images/special/sd_tanuki_010.png', 'http://nozakikun.tv/images/special/sd_tanuki_009.png', 'http://nozakikun.tv/images/special/sd_tanuki_008.png', 'http://nozakikun.tv/images/special/sd_tanuki_007.png', 'http://nozakikun.tv/images/special/sd_tanuki_006.png', 'http://nozakikun.tv/images/special/sd_tanuki_005.png', 'http://nozakikun.tv/images/special/sd_tanuki_004.png', 'http://nozakikun.tv/images/special/sd_tanuki_003.png', 'http://nozakikun.tv/images/special/sd_tanuki_002.png'];
  return robot.respond(/nozakikun$/i, function(res) {
    return res.send(res.random(IMAGE_URLS));
  });
};
