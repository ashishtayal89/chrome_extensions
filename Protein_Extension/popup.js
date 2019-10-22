(function() {
  chrome.storage.sync.get(["total", "goal"], item => {
    document.getElementById("total").innerHTML = item.total || 0;
    document.getElementById("goal").innerHTML = item.goal || 0;
  });
  document.getElementById("addAmount").onclick = () => {
    chrome.storage.sync.get(["total", "goal"], item => {
      var amount = document.getElementById("amount").value
        ? document.getElementById("amount").value
        : "0";
      var total = item.total ? parseInt(item.total) : 0;
      total += parseInt(amount);
      var opt = {
        type: "basic",
        title: "Goal Achived",
        message: "You have achieved your goal for today",
        iconUrl: "icon.png"
      };
      if (total > item.goal) {
        chrome.notifications.create("Goal Achived", opt, () => {});
      }
      chrome.storage.sync.set({ total });
      document.getElementById("total").innerHTML = total;
    });
  };
})();
