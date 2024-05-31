
  // Update time and date
  function updateTimeAndDate() {
    const now = new Date();
    const options = { hour12: false, hour: '2-digit', minute: '2-digit' };
    const timeString = now.toLocaleString([], options);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const dayOfWeek = now.toLocaleString([], { weekday: 'long' });
    const dateString = `${dayOfWeek}, ${day} ${month} ${year}`;
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }

   // Update time and date every second
   setInterval(updateTimeAndDate, 1000);

  // Toggle search provider
  const searchProvider = document.getElementById("searchProvider");
  const searchProviders = ["Google", "Perplexity", "Exa.ai"];
  let currentProviderIndex = 0;
  searchProvider.addEventListener("click", () => {
    currentProviderIndex = (currentProviderIndex + 1) % searchProviders.length;
    searchProvider.textContent = searchProviders[currentProviderIndex];
  });

  // Define the handleSearchInput function first
function handleSearchInput(event) {
  if (event.key === "Enter") {
    const searchQuery = event.target.value.trim();
    const searchProvider = document.getElementById("searchProvider").textContent;
    if (searchQuery) {
      let searchUrl;
      if (searchProvider === "Google") {
        searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      } else if (searchProvider === "Perplexity") {
        searchUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(searchQuery)}`;
      } else if (searchProvider === "Exa.ai") {
        searchUrl = `https://www.exa.ai/search?q=${encodeURIComponent(searchQuery)}`;
      }
      if (searchUrl) {
        window.open(searchUrl, "_blank");
      }
    }
  }
}

// Attach the event listener for the search input once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keydown', handleSearchInput);
});

  