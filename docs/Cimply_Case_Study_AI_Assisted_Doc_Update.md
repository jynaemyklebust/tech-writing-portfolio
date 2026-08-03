# Case Study: Directing an AI-Assisted Documentation Update Under a Moving Spec

**Jynae Myklebust** | Technical Writer / Documentation & Requirements Specialist

> Writing sample — Cimply is a demonstration scheduling product built to showcase documentation and process skills. Not a live commercial product.

## The Situation

Cimply's User Guide had fallen out of sync with its own product requirements document. The PRD had moved from v1 to v1.3 over the life of the project: due dates became a scheduled start-and-end window, designer assignment became optional at order creation, a new "Late Start" flag joined the existing Past-Due flag, and an entire Admin / User Account Management capability had been added that the guide never mentioned. I had a working list of what I believed had changed. I didn't trust it as complete, and I turned out to be right not to.

## My Approach

Rather than hand off "update the doc to match the PRD" as a single instruction, I had the AI read the full, current PRD before touching a word of the guide, and confirm every item on my list against that source instead of taking my list at face value. I asked for the update to move section by section, surfacing what had changed and why before any rewriting happened — the same discipline I'd expect from a tracked-changes pass, so nothing got quietly rewritten wholesale.

## What Surfaced Beyond My List

Two things came back that weren't on my radar. The guide still used "Freelancer" throughout, despite my assumption that it had already been corrected to "Designer." And the PRD had quietly added a capability — a Scheduler can now also be assigned as the designer on an order — that wasn't reflected anywhere in the existing text.

More importantly, the review caught an outright factual error already living in the guide: the Messaging section stated that the message thread locks once an order reaches Complete or Cancelled. The current PRD is explicit that only the order's fields and status lock — the thread stays open for both parties indefinitely. That's the kind of drift that's easy to miss on a skim and expensive to leave wrong in a live product doc.

## The Decision Point

The new Admin / User Account Management content was the one change too large to fold in automatically. I had it flagged explicitly rather than bolted on as an afterthought, weighed whether Admin content belonged in this guide at all versus a separate document, and made the call to add it here as its own section once the scope was confirmed.

## The Editorial Pass

Once the section-by-section draft was in place, I made my own line edits directly in the file, then asked for a second pass specifically on those edits — not the whole document, just what I'd touched. That caught:

- A wording slip where "designer" had become "designee."
- A sentence I'd tightened that introduced a redundant qualifier working against the point the sentence was making.
- A phrase implying a status change would happen automatically once a Designer logged their hours — it doesn't; the Scheduler still has to move it, and the wording needed to say so.
- A "last remaining Admin" caveat repeated three times across adjacent subsections — twice where it was doing real work (suspension, role changes) and once as an unnecessary recap layering all three rules together where only one new fact needed stating.

I also asked whether terminology I'd corrected earlier in the project — "job" versus "order," two words the PRD had deliberately separated — had crept back in anywhere. It had, twice, in language the AI had drafted.

## Structural Judgment

Beyond content, I made two formatting calls: added page numbers, since this is a four-page reference document meant to be flipped through rather than read start to finish (unlike the shorter Quick Start Guide, which doesn't have them), and skipped a table of contents, since the document's flat, two-level heading structure doesn't need one yet. I also assessed the troubleshooting section for real gaps rather than padding it — added two entries tied specifically to friction points the new Admin section introduced, and left out anything that would have just repeated information already covered in context.

## Why This Matters

None of these catches were about prose quality — they were about accuracy, consistency, and knowing when to raise something rather than just doing it. Directing an AI tool through a documentation update doesn't remove the need for editorial rigor; it moves that rigor from writing the sentence to verifying it. That's the skill on display here: I can produce clean documentation quickly using modern tooling, and I still catch what the tooling gets wrong.
