    function isEven(value){
        if (value%2 == 0)
            return true;
        else
            return false;
    }

    function cutter(str) {
        if (isEven(str.length))
        {
            var firstHalf = str.slice(0, str.length / 2);
            var secondHalf = str.slice(str.length /2, str.length)
            return secondHalf + firstHalf
        }
        return str;
    }

/*
    function showBorder(ctx) {
        let visibleBorder = String.fromCharCode(36);
        if (ctx.startsWith(String.fromCharCode(36))
        {
            for (var i = 1; i < skin.length; i++)
            {
                var chr = skin.charAt(i);
                var dchr = ``;
                
                if ('abcde'.includes(chr.toLowerCase()))
                {
                    dchr = chr.toUpperCase();
                }
                    
                else
                {
                    var code = chr.charCodeAt(0) - 97;
                    if (isEven(code))
                    {
                        dchr = String.fromCharCode(97 + code+1) + String.fromCharCode(97 + code)
                    }
                    else dchr = String.fromCharCode(97 + code-1)
                }
                visibleBorder = visibleBorder + dchr
                
            }
        if (isEven(visibleBorder))
        {
            visibleBorder = cutter(visibleBorder);
        }
        return visibleBorder
        }
    }
*/

    function hideBorder(ctx) {
        let hiddenBorder = ``;
        if (ctx.startsWith(String.fromCharCode(36)))
        {
            for (var i = 1; i < ctx.length; i++)
            {
                var chr = ctx.charAt(i);
                var cchr = ``;
                
                if ('abcde'.includes(chr.toLowerCase()))
                {
                    cchr = chr.toUpperCase();
                }
                    
                else
                {
                    var code = chr.charCodeAt(0) - 97;
                    if (isEven(code))
                    {
                        cchr = String.fromCharCode(97 + code -4) + String.fromCharCode(97 + code-1)
                    }
                    else cchr = String.fromCharCode(97 + code+1)
                }
                hiddenBorder = hiddenBorder + cchr
                
            }
        if (isEven(hiddenBorder.length))
        {
            hiddenBorder = cutter(hiddenBorder);
        }
        return String.fromCharCode(36) + hiddenBorder
        }
    }
