/* accordion button changing */ 
document.addEventListener('DOMContentLoaded', function() {
    var summaries = document.querySelectorAll('details summary');

    summaries.forEach(function(summary) {
      summary.addEventListener('click', function() {
        var icon = this.querySelector('i');

        if (this.parentElement.open) {
          icon.className = 'fas fa-plus'; /* Change to plus icon when closed */
        } else {
          icon.className = 'fas fa-minus'; /* Change to minus icon when open */
        }
      });
    });
  });

/* footer date */

const d = new Date();
let year = d.getFullYear();
document.getElementById('yr').innerHTML = year;
