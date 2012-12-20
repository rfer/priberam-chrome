function searchPriberam(text) {
  var query = "http://www.priberam.pt/dlpo/default.aspx?pal=" + text.selectionText;
  chrome.tabs.create({url: query});
}
 
chrome.contextMenus.create({
  "title": "Qual o significado de '%s'?",
  "contexts":["selection"],
  "onclick": searchPriberam
});
