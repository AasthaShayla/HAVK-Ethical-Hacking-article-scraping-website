
let codeEditor = ace.edit("editorCode");
codeEditor.setTheme("ace/theme/twilight");
codeEditor.session.setMode("ace/mode/javascript");
codeEditor.insert(`function click(){ \n let input=document.getElementById('#input') \n`);
codeEditor.insert(`document.getElementById('#output').innerHTML=input.value \n }`);
codeEditor.insert(`\nfunction redirect(){window.location.href = "http://instagram.com";} \n `);
codeEditor.setReadOnly(true);
document.querySelector('.editorCode').style.fontSize="22px"