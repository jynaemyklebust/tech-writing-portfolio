# Cimply User Stories — Order Status Configuration (P1)

> Writing sample — Cimply is a demonstration scheduling product for creative studios, built to showcase documentation skills. Not a live commercial product.

This document describes the P1 custom status configuration feature referenced in the Cimply PRD and API Reference — where the P0 constraint of exactly one status per type is lifted, letting account admins (Schedulers with the Admin flag) define multiple named statuses under a single type (for example, several flavors of Hold). The Status data model already supports this so this could ship as a UI unlock, with no migration required.

## Epic — Custom Status Configuration (P1)

**Objective:** Lift the P0 constraint of exactly one status per type, letting account admins define, manage, and choose among multiple named statuses under a single type.

**Context:** The Status data model already supports this — type, sort_order, and is_default were built into the v1 schema specifically so this feature could be unlocked without a migration. This epic covers the UI and permission work only.

**Scope:** A view/manage-statuses screen for admins; an admin-gated entry point on the Scheduler dashboard; the ability to add, duplicate, rename/recolor, reorder, set default, and delete statuses; and status picker updates so Schedulers and Designers can choose among multiple statuses within a type.

**Success criteria:** All nine stories below are implemented and accepted.

**Risks and dependencies:** Depends on the Foundation epic's Status data model (already in place). No schema changes required.

## Story 1 — View and manage statuses in one place

*As an account admin, I want a single place to view and edit all the statuses configured on my account, so that I can manage the full status list without hunting for each control separately.*

**Acceptance Criteria:**

- Displays all statuses across all types, grouped or sorted by type.
- Each status shown with its name, color, type, default flag, and sort position.
- Serves as the entry point for the add, duplicate, rename/recolor, reorder, set-default, and delete actions covered in the following stories.
- Accessible only to users with the Admin flag, consistent with other account-management functions.

## Story 2 — Surface the status configuration entry point to admins only

*As an account admin, I want a link to status configuration inside my Scheduler dashboard, so that I can reach it as part of my normal workflow — and so that Schedulers without the Admin flag never see an entry point for something they can't use.*

**Acceptance Criteria:**

- Entry point (nav link, menu item, or button) appears in the Scheduler dashboard only for users with the Admin flag.
- Schedulers without the Admin flag see no trace of it anywhere in their dashboard.
- Entry point links directly to the status view/edit screen from Story 1.
- Never shown on the Designer dashboard, since Designers cannot hold the Admin flag.

## Story 3 — Add a custom status

*As an account admin, I want to add a new status under an existing type, so that my team can track more granular stages of work than the default seven allow.*

**Acceptance Criteria:**

- New status requires a type assignment from the fixed seven-value taxonomy.
- Name and color are required fields. Name defaults to the selected Status Type's name (e.g., choosing Hold pre-fills "Hold"); color defaults to a neutral placeholder. Both are editable before save.
- Status name must be unique across the account. If the name — default or edited — already exists, save is blocked and the admin is prompted to change it.
- Color has no uniqueness constraint — multiple statuses, including ones under different types, may share the same color.
- Status appears immediately in dashboards and order-detail status pickers for that type.
- Type cannot be changed after creation.

## Story 4 — Duplicate an existing status to create a new one

*As an account admin, I want to duplicate an existing status as the starting point for a new one, so that I don't have to rebuild similar statuses — like several flavors of Hold — from scratch.*

**Acceptance Criteria:**

- Duplicate action is available from the status list (Story 1's screen) on any existing status.
- Duplicate pre-fills Type and Color from the source status. Name auto-suffixes with "-1" (e.g., "Hold" → "Hold-1") to avoid an immediate collision; if "-1" is also taken, the same duplicate-name prompt from Story 3 applies as a backstop.
- The new status is otherwise fully independent — editing or deleting the duplicate has no effect on the original, and vice versa.
- New status still goes through the same required-fields and uniqueness validation as Story 3.

## Story 5 — Set a status as default for its type

*As an account admin, I want to mark one status as the default for a given type, so that the system knows which status to auto-apply when a type has multiple options.*

**Acceptance Criteria:**

- Marking a new default automatically unmarks the previous default for that type.
- Exactly one default per type per account is enforced at save time.
- If a type has only one status, it is implicitly default and no default-selection control is shown.

## Story 6 — Reorder statuses

*As an account admin, I want to reorder statuses in whatever sequence I choose, so that they display in the order that matches my team's actual workflow.*

**Acceptance Criteria:**

- Reordering updates each status's sort_order value.
- sort_order is a single global ordering per account, not scoped or restricted by type — statuses can be arranged in any sequence, including across types.
- New order is reflected immediately in status pickers and filters on both Scheduler and Designer dashboards.
- Reordering does not affect a status's type or default assignment.

## Story 7 — Rename or recolor an existing status

*As an account admin, I want to rename a status or change its color, so that the label and visual cue match how my team talks about that stage of work.*

**Acceptance Criteria:**

- Name and color changes apply immediately to all orders currently on that status.
- Type and all business-rule behavior tied to type (permissions, terminal locking, flag logic) are unaffected by the rename.
- Renamed status must still be unique across the account, same rule as Story 3 — if the new name already exists, save is blocked and the admin is prompted to change it.

## Story 8 — Delete a non-default status

*As an account admin, I want to delete a status my team no longer uses, so that the status list stays relevant and uncluttered.*

**Acceptance Criteria:**

- Deletion is blocked if the status is the current default for its type, with a message prompting the admin to assign a new default first.
- Deletion is blocked only if a status is currently assigned to any order — status references in an order's past history don't block deletion, since that history persists in the order's own record independent of the status object itself. A reassignment or migration path for currently-assigned orders is out of scope here and can be addressed as a future feature.
- Deletion is logged with the acting user and timestamp.

## Story 9 — Choose among multiple statuses of the same type

*As a scheduler or designer, I want to see and choose from all the statuses configured under a type, so that I can reflect the exact stage of work instead of a generic bucket.*

**Acceptance Criteria:**

- Status picker visually groups or distinguishes statuses that share a type, regardless of each status's underlying sort_order position.
- Permission rules for who can set which status are enforced based on type, not the specific named status.
- Past-Due and Late-Start flag logic keys off type and is unaffected by which named status within that type is selected.

*These stories assume the Status data model and P0/P1 scope defined in the Cimply PRD, and the Orders resource documented in the Cimply API Reference.*
