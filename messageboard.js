document.getElementById('commentForm').addEventListener('submit', function(event) {
  // Prevent the form from being submitted to the server
  event.preventDefault();

  // Get the user's name and comment
  var name = document.getElementById('name').value;
  var comment = document.getElementById('comment').value;

  // Create a new comment div
  var commentDiv = document.createElement('div');
  commentDiv.className = 'comment';

  // Create the name header
  var nameHeader = document.createElement('h2');
  nameHeader.textContent = name;

  // Create the comment paragraph
  var commentParagraph = document.createElement('p');
  commentParagraph.textContent = comment;

  // Add the name and comment to the comment div
  commentDiv.appendChild(nameHeader);
  commentDiv.appendChild(commentParagraph);

  // Add the comment div to the page
  document.getElementById('comments').appendChild(commentDiv);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
});

