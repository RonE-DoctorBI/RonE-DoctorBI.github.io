(function () {
  var form = document.getElementById("fit");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var body = ["Name: " + d.get("name"), "Org: " + d.get("org"), "Country: " + d.get("country"), "Need: " + d.get("job"), "", d.get("problem")].join("\n");
    location.href = "mailto:Ron@RonnieEmamali.com?subject=" + encodeURIComponent("RonE | DoctorBI — " + (d.get("job") || "inquiry")) + "&body=" + encodeURIComponent(body);
  });
})();
