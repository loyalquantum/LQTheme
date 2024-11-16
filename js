<script>
//<![CDATA[
document.addEventListener("DOMContentLoaded", function() {
  const subContainer = document.querySelector(".digitloyal-sub");
  const joinBtn = document.querySelector(".digitloyal-yt-btn");

  // Check if the user has visited the site more than 5 times in the last 24 hours
  let visitCount = localStorage.getItem("visitCount");
  let lastVisitTime = localStorage.getItem("lastVisitTime");

  const now = Date.now();

  // If the last visit was more than 24 hours ago, reset the visit count
  if (lastVisitTime && now - lastVisitTime > 24 * 60 * 60 * 1000) {
    visitCount = 0;
  }

  visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
  localStorage.setItem("visitCount", visitCount);
  localStorage.setItem("lastVisitTime", now);

  // Show popup if user has visited more than 5 times
  if (visitCount > 5 && !getCookie("popupClosed")) {
    subContainer.classList.add("show-btn");
  }

  // Hide popup for 72 hours after user clicks the join button
  joinBtn.addEventListener("click", function() {
    setCookie("popupClosed", "true", 72); // Set a cookie to hide the popup for 72 hours
    subContainer.classList.add("hide-btn");
    setTimeout(() => subContainer.classList.add("hide"), 2000);
  });

  // Helper functions to set/get cookies
  function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
});
//]]>
</script>
