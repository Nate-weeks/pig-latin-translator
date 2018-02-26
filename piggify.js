// document.body.style.border = "5px solid brown";
//console.log("hello world");
//var p = document.createElement("p");
//p.textContent = "This paragraph was added by a page script.";
//p.setAttribute("id", "page-script-para");
//document.body.appendChild(p);

//console.log("Done1.");
//var theText = document.body.innerText;
//
//console.log("Done2.");
//console.log(theText);
//
//console.log("Done3.");

// Taken from
// https://stackoverflow.com/questions/18474497/replace-text-in-a-website

function piggifyText(text){
  fetch("http://localhost:5000/piglatin", {
    method: 'POST',
    body: text,
    headers: {'Content-Type':'text/plain'}
  });
  console.log("fetch")
  .then(response => {
    console.log("vimresponse?");
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.text())
  .then(body => {
    console.log(body);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

function piggifyNode(node){
  if(node.childNodes.length)
    for(var i = 0; i < node.childNodes.length; i++)
      piggifyNode(node.childNodes[i]);
  else if(node.nodeType == Node.TEXT_NODE)
    node.textContent = piggifyText(node.textContent);
}

piggifyNode(document.body);

/*
                                      -";^.
                                     -=<>?(_            `''`
                                     r?>><)\`       -;)iL]]L<+,`
                                    '=Lc<>=|-    .^?}CCJtJfsYCj)'
                                    .?7L?><=:   "ifFYsfJJsYCsxF{~
                                    '>v]c>>>"  ;j1IIYCJzsxxCCxFt"
                                    _ltvl?>?|`"}FenFszCYueFssFY{~
                                    ~7Jt*i??=+]seeIsCYxn%I1sYn1v,
                                   `\{sJj]iic[Tx%nIFuue4nFFxuxJi`
                                   -<JYf{*LL[{Ju%eeeoyS%oIuno1T(
                                   :Lzst}v*]}TzI3SS33VSS%enIFsj,
                                  '\7TTj}}77Tz1n2VV25a2Synx11z<
                                  :?[7v7}}[{zC1I4Vh5k5S%oFC1Cv:
                                 `\l[7{}{[7{JzzY3aaPEh3u1s11T/`
                              ``-~=c?cillL[v}tJsywGm5yYs1F1{r`
                           `'_:~^";;+r\\(>[{TffCIZU5xY1sCt>,
                    ` `'_,:!^^^~^^";+++r/(>]jj{{zS%z{JJtL^`
                  ``',~";"";;++;+r\\\\\||(=>]7jvjJ}*7v](.
                 `'~+\rr\\/|///\/|||((()==>c]jttjvvv7L=^'`
                `_+)=)((()====<>??ccc?cllLL]v}fCft}v*c/~-...--____.'``
               `!|ciii?>>?cciL*{uahys{v}{}j}{{TJfT}v]?/~,_,,:::!!!::,,_.'`
       ``     `,)i][[[]LL]]Ll7}4WNNNBUe1fJT{jvv}TJtvL);!,,,,::!!^^^^^~~!:,_.'`
        `''```:=l]*7vv77*[[]L]jZNNNN@qFJtt}jjv7**77[l<r^::,,,,,,,,,:::::,,,___-'`
     ``````''-|]vjjjjjjv7**[]][JZOpAGxj7*[]LLlliic?>=(/r"~~~!!::,,,,_---___,,,,,_'
         ```."L7vvvj{{{t}j7[]]Llillic?>><<<<>>?ciic><)|/r;"^^~~~~~!!:,__,:!:!:!!!:-`
     ``````'~>vtfzzzzzJ{JfJtj7]c><???><===)))<>?ccic?>=(|\+""""""^"""^~!::~^^~~~~~!,-`
         ``.)*JfsCJTTTJtt{fzf{v*Liiiccc?><<<>??>>ciic?<=(|\\r+;;+r++r++;^~~^^^^^^^~~~,-`
        ``',[1FykAZuFY1CJf{tCft}7]llic?ccic?ciic??>><<<<)|\r+++;+rrrrr++++"^^^""^^~~""~_`
      ``'``.i1Vb6$Z3eIYfftt{v}}j7[]]Llliilic???c?>>???>><=)((|/\+++\\r++r\+;"^"";+;""""~-
          `';jYGE2%3yICf{{jjvtT}v7*]]LLLllllLllllLllli?><><==)(|\r\\rrrr\\++;;;;;;++;""^~.
        ```'.+[J1Ys11CT{j}jjv7{{j7*[]LLLLlllLL]][[[]Li?><<<<===)||///////r+r\r+;;+r\\r;"":`
     ``` `'.'.,+<l[*[[**777***v}jv77*[]]LLL]**777*[Llicc?c?><===((|\/||//\rrr\\\\///||r+;^,`
       ``'`''`'`._"\;+/>illlil]LLLLLL]]]][*vjjjv7*[Lllic???><=))(||/\/|((/\rr////||||/r+;;~.
       ````` `' ``''`'.-^>iiiciliillL][*vjjjjv7***[[]Llllic?>>><=)(|//|||/\\r\////|()(|\r+",`
             `` ```'``` -/l]]]][[[[[***77vvv77*[[]]][]]Lllllic??>=)((((((((||//|()=<<=)/r+;!.
             `   ```'`  `_(L][***7**7********[[**[[[[[***]LLllicc?><=)))==))(||(=<??<=(/r+"_`
                 `  `    `,(L[***7*******[[[**[**77**[**[]]]]Lliccc?><=)===)(((()<>?><)|\+",`
                     `    '~>]][[******7**77777vv7vj}v777*[]]]]LLLlic?<<==<=)(())=>>><)|\+^_`
                          `-;?][[****7777777vvvvvv77j{jv77***[]Llllli??><)(((()<<<>?<=(|\+!'
                            .^<]**7v7v77vvvvjjjjj}}jvjjjjjj77vv*[LlllLLc><(||)=>?cc>=)(|/;_
                            `-rl**vjvvvv}}}jj}}}{{}{}vjjvvvvvvv7*]LLLllc<(|/|)<>?cc>=(||\~'
                             .:;c*7vjj}}{{{ttt{{t{}{{}}j}jvvvvv}jv*]Llc?<)||(<??cic>=))|"'
                             ``.\L7j}}{{ttTTTTTttttTTTttt{{}}}}jvvv7]lc><)(|)>cccc?<==|"-
                               `_~=vtJffffffffzzzCCzCCC11zfJTJTt{jv[Li?><)(=?illic?</;,`
                                `,=jfYxuunuuIIIIIuIIIIunuxxx1CfTT{7[]i?><))=lvjvjv[)_``
*/
