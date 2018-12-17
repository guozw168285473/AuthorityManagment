var PKGenerator = {};

PKGenerator.generate = function() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() > 8 ? (now.getMonth() + 1).toString() : '0' + now.getMonth();
	var date = now.getDate() > 9 ? now.getDate().toString() : '0' + now.getDate();
	var hour = now.getHours() > 9 ? now.getHours().toString() : '0' + now.getHours();
	var minute = now.getMinutes() > 9 ? now.getMinutes().toString() : '0' + now.getMinutes();
	var second = now.getSeconds() > 9 ? now.getSeconds().toString() : '0' + now.getSeconds();
	var sss = now.getMilliseconds() > 99 ? now.getMilliseconds() : (now.getMilliseconds() > 9 ? '0' + now.getMilliseconds() :  '00' + now.getMilliseconds());
	var rand = ""; // 3位随机数
	for(var i = 0; i < 3; i++){
	    rand += Math.floor(Math.random() * 10);
	}
	
	return year + month + date + hour + minute + second + sss + rand;
}

PKGenerator.GetUUIDCode = function(len, radix) {
    if (!len) len = 32;
    if (!radix) radix = 16;
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}
