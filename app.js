const ids = ["need", "budget", "authority", "timeline", "audience"];
const els = Object.fromEntries(
  ids.map((id) => [id, document.getElementById(id)]),
);
const score = document.getElementById("score"),
  gauge = document.querySelector(".gauge"),
  status = document.getElementById("status"),
  recommendation = document.getElementById("recommendation");
function value(id) {
  return Number(els[id].value) || 0;
}
function calculate() {
  const need = value("need"),
    budget = value("budget"),
    authority = value("authority");
  const delivery = Math.min(
    25,
    Math.round(value("timeline") * 0.65 + value("audience") * 0.35),
  );
  const total = need + budget + authority + delivery;
  score.textContent = total;
  gauge.style.setProperty("--score", total);
  [
    ["need", need],
    ["budget", budget],
    ["authority", authority],
    ["delivery", delivery],
  ].forEach(([id, val]) => {
    document.getElementById(`${id}Bar`).value = val;
    document.getElementById(`${id}Value`).textContent = `${val}/25`;
  });
  status.className = "status";
  if (total >= 75) {
    status.textContent = "Strong potential";
    status.classList.add("strong");
    recommendation.textContent =
      "Recommend a discovery call after representative review.";
  } else if (total >= 50) {
    status.textContent = "Further discovery needed";
    status.classList.add("medium");
    recommendation.textContent =
      "Clarify the weakest fit factors before advancing.";
  } else if (total > 0) {
    status.textContent = "Low current fit";
    status.classList.add("low");
    recommendation.textContent =
      "Nurture the relationship or revisit when readiness improves.";
  } else {
    status.textContent = "Incomplete assessment";
    status.classList.add("neutral");
    recommendation.textContent =
      "Complete the fit factors to see a recommendation.";
  }
  document.getElementById("confirmation").hidden = true;
}
ids.forEach((id) => els[id].addEventListener("change", calculate));
document
  .getElementById("reviewCheck")
  .addEventListener(
    "change",
    (e) =>
      (document.getElementById("qualifyButton").disabled = !e.target.checked),
  );
document.getElementById("qualifyButton").addEventListener("click", () => {
  document.getElementById("confirmation").hidden = false;
  document
    .getElementById("confirmation")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
});
document.getElementById("sampleButton").addEventListener("click", () => {
  document.getElementById("organization").value = "Northstar Manufacturing";
  document.getElementById("industry").value = "Manufacturing";
  els.need.value = "25";
  els.audience.value = "25";
  els.budget.value = "18";
  els.authority.value = "18";
  els.timeline.value = "25";
  document.getElementById("challenge").value =
    "Improve frontline data skills so teams can reduce downtime and make faster operational decisions.";
  calculate();
});
document.getElementById("intakeForm").addEventListener("reset", () =>
  setTimeout(() => {
    document.getElementById("reviewCheck").checked = false;
    document.getElementById("qualifyButton").disabled = true;
    calculate();
  }, 0),
);
calculate();
