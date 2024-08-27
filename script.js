//your code here


document.addEventListener('DOMContentLoaded', () => {
  const parent = document.getElementById('parent');
  let draggedElement = null;

  parent.addEventListener('dragstart', (event) => {
    draggedElement = event.target;
    event.target.style.opacity = 0.5;
  });

  parent.addEventListener('dragend', (event) => {
    event.target.style.opacity = ""; 
  });

  parent.addEventListener('dragover', (event) => {
    event.preventDefault(); 
  });

  parent.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.className === 'image' && event.target !== draggedElement) {
  
      const parent = document.getElementById('parent');
      parent.insertBefore(draggedElement, event.target.nextSibling);
      parent.insertBefore(event.target, draggedElement);
    }
  });
});
