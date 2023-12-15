function byId(id) {
    return document.getElementById(id);
}

function isEven(value) {
    return (value%2 == 0);
}

function cutter(str) {
    var size = str.length;
    var res = str;
    if (isEven(size)) {
        let firstHalf = str.slice(0, size/2);
        let secondHalf = str.slice(size/2, size)
        res = secondHalf + firstHalf
    }
    if (res.length <= 16) {
        let half = size/2
        return res.slice(half-8, half+8);
    }
    return res;
}

function hideBorder(ctx) {
    var hiddenBorder = ``;
    const symbol = String.fromCharCode(36)
    
    if (ctx.startsWith(symbol)) {
        for (var i = 1; i < ctx.length; i++) {
            let chr = ctx.charAt(i);
            let cChr = ``;
            let code = chr.charCodeAt(0) - 97;
            
            if ('abcdexyz'.includes(chr.toLowerCase())) {
                cChr = code;
            }
                
            else {
                if (isEven(code)) {
                    const strA = String.fromCharCode(97 + code -2)
                    const strB = String.fromCharCode(97 + code-1);
                    cChr = strA + strB;
                }
                else cChr = String.fromCharCode(97 + code+1);
            }
            hiddenBorder = hiddenBorder + cChr;
        }
        
    hiddenBorder = cutter(hiddenBorder);
    return String.fromCharCode(36) + hiddenBorder;
    }
}


function edit() {
    byId("encoded").innerText = hideBorder(hideBorder(this.value));
}

byId("skin").addEventListener("keyup", edit)
