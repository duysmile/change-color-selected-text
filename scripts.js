const textEle = document.getElementById('text');

textEle.addEventListener('mouseup', function(e){  
  const range = window.getSelection().getRangeAt(0);  
  const startContainer = range.startContainer;
  const endContainer = range.endContainer;
  
  const content = range.extractContents();
  const span = document.createElement('SPAN');
  
  span.classList = "key";
  span.textContent = content.textContent;

  range.insertNode(span);
  let parent = startContainer.parentElement;
  if (startContainer === endContainer && parent.tagName === 'SPAN') {
  		parent.outerHTML = parent.innerHTML;
  } else {
    if (parent.tagName === 'SPAN') {
      parent.outerHTML = startContainer.textContent;  
    }
    parent = endContainer.parentElement;
    if (parent.tagName === 'SPAN') {
      parent.outerHTML = endContainer.textContent;  
    }
  }
});
