/* Designer dashboard: render just Maya Chen's assigned orders, sorted by end datetime. */

const DESIGNER_NAME = "Maya Chen";

function designerFlagHtml(flags) {
  return flags
    .map(f => {
      if (f === "pastdue") return '<span class="flag flag-pastdue">Past Due</span>';
      if (f === "latestart") return '<span class="flag flag-latestart">Late Start</span>';
      return "";
    })
    .join("");
}

function designerRender() {
  const mine = CIMPLY_ORDERS
    .filter(o => o.designer === DESIGNER_NAME)
    .sort((a, b) => new Date(a.end) - new Date(b.end));

  const container = document.getElementById("order-card-list");
  container.innerHTML = "";

  mine.forEach(o => {
    const meta = STATUS_META[o.status];
    const flags = cimplyComputeFlags(o);
    const isTerminal = TERMINAL_STATUSES.includes(o.status);

    const card = document.createElement("div");
    card.className = `order-card status-border-${o.status}`;
    card.innerHTML = `
      <div class="order-card-top">
        <h3>${o.title}</h3>
        <span class="status-pill ${meta.cls}">${meta.label}</span>
      </div>
      <p class="brief">${o.brief}</p>
      <div class="meta-row">
        <span>Scheduler: <strong>${o.scheduler}</strong></span>
        <span>Starts: <strong>${cimplyFormatDate(o.start)}</strong></span>
        <span>Due: <strong>${cimplyFormatDate(o.end)}</strong></span>
      </div>
      <div class="flags-row">
        ${designerFlagHtml(flags)}
        <button class="log-time-btn" disabled title="Prototype only">Log Time</button>
      </div>
    `;
    if (isTerminal) {
      card.querySelector(".log-time-btn").remove();
    }
    container.appendChild(card);
  });

  document.getElementById("result-count").textContent =
    `${mine.length} order${mine.length === 1 ? "" : "s"} assigned to ${DESIGNER_NAME}`;
}

document.addEventListener("DOMContentLoaded", designerRender);
