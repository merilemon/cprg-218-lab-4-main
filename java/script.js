document.addEventListener('DOMContentLoaded', function() {
    var details = document.querySelector('details');
    var summary = details.querySelector('summary');
    var icon = summary.querySelector('.icon');

    summary.addEventListener('click', function() {
      if (details.open) {
        icon.innerHTML = '<i class="fas fa-plus"></i>'; // Change to plus icon when open
      } else {
        icon.innerHTML = '<i class="fas fa-minus"></i>'; // Change to minus icon when closed
      }
    });
  });