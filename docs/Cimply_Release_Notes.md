# Cimply Release Notes

## v1.0 — Private Beta

*Released to invited accounts*

> Writing sample — Cimply is a demonstration scheduling product for creative studios, built to showcase documentation skills. Not a live commercial product.

## Overview

Cimply v1.0 is here — the first release available to our private beta studios. This release delivers the full core loop: create an order, assign it, work it, talk about it, log time against it, and close it out — plus the admin tools studios need to set up their team and manage who's on the account. Everything below is available today for invited accounts.

## What's New

### Order Management

- Create orders with a title, description, estimated time, and a scheduled start and end date/time. Assigning a designer is optional at creation — an order can be created unassigned and stays in New status until someone picks it up.
- Orders move through a seven-stage status lifecycle: New, Assigned, In Progress, On Hold, Needs Review, Complete, and Cancelled.
- Reassign orders while they're in New or Assigned status; cancel any order that hasn't already reached Complete or Cancelled.
- Past-due orders — those whose scheduled end has passed without reaching a final status — are flagged automatically, no manual checking required.
- Orders are also flagged when their scheduled start has passed with no work begun — a separate Late Start flag that clears the moment work starts or the order closes out.

### Communication

- Every order has its own message thread, visible to the scheduler and assigned designer, timestamped and attributed.

### Time Tracking

- The assigned team member logs actual hours before an order can be marked Complete, creating a time record tied to every finished order.

### Dashboards

- Schedulers see every order on the account, filterable by designer and status.
- Designers see only their own orders, sorted by scheduled end date, with status, past-due, and late-start flags front and center.

### Notifications

- In-app notifications keep both sides current: designers are notified on new assignments, status changes, and new messages on their orders; schedulers are notified on status changes and new messages across all orders, and when ownership of an order is reassigned to them.
- Designers receive an email the moment they're first assigned to an order.
- Invited users receive an email with a link to set a password and activate their account.

### Access & Roles

- Two roles — Scheduler and Designer — with an Admin flag layered on top of Scheduler for team management. Accounts support multiple schedulers and multiple admins.

### Admin & Team Management

- Admins invite new users by email with a role assignment (Scheduler or Designer), and can resend or cancel a pending invite.
- Admins suspend a user — this blocks login while keeping all of that user's order and message history intact and attributed.
- Admins change a user's role between Scheduler and Designer.
- Admins can grant Admin privileges to another active Scheduler — accounts support more than one Admin.
- Orders are automatically flagged when the assigned designer or primary scheduler is suspended or moved off their role, so it's clear where someone needs to step in.

## Known Limitations

- v1.0 is limited to invited beta accounts while we validate the core workflow — open signup isn't available yet.
- Equipment and room scheduling aren't included; Cimply currently manages people's work, not physical resources.
- There's no drag-and-drop calendar view in this release — orders are managed through the dashboard and order detail views.
- Cancelled and Complete orders can't currently be reopened. If work needs to resume, create a new order.
- In-app payments to designers aren't available in v1.0.
- Orders can be created without an assigned designer, but designers can't browse or self-claim unassigned work — assignment always comes from a scheduler.
- Cimply doesn't detect or warn about scheduling overlaps for a designer — two orders with overlapping time windows are allowed with no warning.
- Self-service profile editing isn't available yet — only an Admin can update a user's name or email.

## Coming Next

Our next release focuses on making Cimply sticky enough to fully replace your existing scheduling tools, including custom status configuration, copy/clone order for faster reassignment, order templates, a full audit log, and expanded email notifications. Beta studios will be notified as these roll out.
