/* ============================================================
   Sample order data for the Cimply dashboard mockups.
   "Today" for flag logic is fixed to 2026-07-28 so the prototype
   always reads consistently regardless of when it's viewed.
   Status keys/colors/flags match Cimply_PRD_v1.md's status
   system (New, Assigned, In Progress, On Hold, Needs Review,
   Complete, Cancelled) and Past-Due / Late-Start flag rules.
   ============================================================ */

const CIMPLY_TODAY = new Date("2026-07-28T12:00:00");

const STATUS_META = {
  new:         { label: "New",           cls: "status-new" },
  assigned:    { label: "Assigned",      cls: "status-assigned" },
  inprogress:  { label: "In Progress",   cls: "status-inprogress" },
  hold:        { label: "On Hold",       cls: "status-hold" },
  review:      { label: "Needs Review",  cls: "status-review" },
  complete:    { label: "Complete",      cls: "status-complete" },
  cancelled:   { label: "Cancelled",     cls: "status-cancelled" },
};

const CIMPLY_ORDERS = [
  {
    id: 1,
    title: "Homepage Hero Banner — Refresh",
    brief: "Redesign hero banner assets for the homepage relaunch, three responsive sizes.",
    designer: "Maya Chen",
    scheduler: "Elena Torres",
    status: "inprogress",
    start: "2026-07-24T09:00",
    end: "2026-07-30T14:00",
  },
  {
    id: 2,
    title: "Q3 Social Campaign — Instagram Carousel",
    brief: "5-slide carousel set for the Q3 product push, using brand-safe templates.",
    designer: "Derek Okafor",
    scheduler: "Elena Torres",
    status: "assigned",
    start: "2026-07-25T09:00",
    end: "2026-07-29T17:00",
  },
  {
    id: 3,
    title: "Client Onboarding Deck — Redesign",
    brief: "Refresh the onboarding slide deck with new client logo placements.",
    designer: "Priya Nair",
    scheduler: "Elena Torres",
    status: "review",
    start: "2026-07-22T10:00",
    end: "2026-07-27T12:00",
  },
  {
    id: 4,
    title: "Trade Show Booth Signage — 10x10",
    brief: "Full signage set for the August trade show booth, print-ready files.",
    designer: "Jordan Vega",
    scheduler: "Elena Torres",
    status: "hold",
    start: "2026-07-28T09:00",
    end: "2026-08-05T09:00",
  },
  {
    id: 5,
    title: "Fall Catalog — Print Ad Layout",
    brief: "Full-page print ad for the fall seasonal catalog insert.",
    designer: "Maya Chen",
    scheduler: "Elena Torres",
    status: "new",
    start: "2026-07-29T09:00",
    end: "2026-08-01T10:00",
  },
  {
    id: 6,
    title: "Newsletter Template — August Edition",
    brief: "Monthly email newsletter template, updated to match the new brand palette.",
    designer: "Derek Okafor",
    scheduler: "Elena Torres",
    status: "complete",
    start: "2026-07-15T09:00",
    end: "2026-07-20T15:00",
  },
  {
    id: 7,
    title: "Logo Refresh — Acme Corp",
    brief: "Client-requested logo refresh, cancelled after a scope change.",
    designer: "Priya Nair",
    scheduler: "Elena Torres",
    status: "cancelled",
    start: "2026-07-18T09:00",
    end: "2026-07-22T13:00",
  },
  {
    id: 8,
    title: "Product Launch Teaser — Reel Storyboard",
    brief: "Storyboard and shot list for the 15-second launch teaser reel.",
    designer: "Jordan Vega",
    scheduler: "Elena Torres",
    status: "inprogress",
    start: "2026-07-26T09:00",
    end: "2026-08-03T16:00",
  },
  {
    id: 9,
    title: "Vendor Booth Banner — Reprint",
    brief: "Reprint of the standard vendor banner with an updated tagline.",
    designer: null,
    scheduler: "Elena Torres",
    status: "new",
    start: "2026-07-20T09:00",
    end: "2026-08-10T11:00",
  },
  {
    id: 10,
    title: "Client Website — Icon Set",
    brief: "Custom icon set for the client site's services page.",
    designer: "Maya Chen",
    scheduler: "Elena Torres",
    status: "review",
    start: "2026-07-20T09:00",
    end: "2026-07-26T17:00",
  },
];

const TERMINAL_STATUSES = ["complete", "cancelled"];

function cimplyComputeFlags(order) {
  const flags = [];
  const start = new Date(order.start);
  const end = new Date(order.end);
  const isTerminal = TERMINAL_STATUSES.includes(order.status);

  if (!isTerminal && end < CIMPLY_TODAY) {
    flags.push("pastdue");
  } else if (
    !isTerminal &&
    start < CIMPLY_TODAY &&
    (order.status === "new" || order.status === "assigned")
  ) {
    flags.push("latestart");
  }
  return flags;
}

function cimplyFormatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
