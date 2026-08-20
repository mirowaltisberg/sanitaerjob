import assert from "node:assert/strict";
import test from "node:test";
import {
  DIRECT_HIRE_FEED_TARGET,
  buildDirectHireOpportunities,
} from "@/lib/direct-hire-opportunities";

const BASE_INPUT = {
  query: "Sanitärinstallateur EFZ",
  location: "Zürich, ZH",
  workload: "80-100%",
  remote: "any" as const,
};

for (const [realJobCount, expected] of [
  [0, 12],
  [1, 11],
  [11, 1],
  [12, 0],
  [500, 0],
] as const) {
  test(`fills ${realJobCount} real rows with ${expected} controlled opportunities`, () => {
    const opportunities = buildDirectHireOpportunities({ ...BASE_INPUT, realJobCount });
    assert.equal(opportunities.length, expected);
    assert.equal(realJobCount + opportunities.length >= DIRECT_HIRE_FEED_TARGET, true);
  });
}

test("is deterministic and honours a controlled role and Swiss location", () => {
  const first = buildDirectHireOpportunities({ ...BASE_INPUT, realJobCount: 0 });
  const second = buildDirectHireOpportunities({ ...BASE_INPUT, realJobCount: 0 });
  assert.deepEqual(first, second);
  assert.equal(new Set(first.map((item) => item.title)).size, 12);
  assert.equal(first[0]?.title, "Sanitärinstallateur/in EFZ");
  assert.equal(first.every((item) => item.location === "Zürich, ZH"), true);
});

test("does not reflect an unreviewed query or location into public opportunity copy", () => {
  const opportunities = buildDirectHireOpportunities({
    ...BASE_INPUT,
    realJobCount: 0,
    query: "<script>invented executive</script>",
    location: "Not-A-Swiss-Place<script>",
  });
  const serialized = JSON.stringify(opportunities);
  assert.equal(serialized.includes("<script>"), false);
  assert.equal(serialized.includes("invented executive"), false);
  assert.equal(serialized.includes("Not-A-Swiss-Place"), false);
});

test("never creates a job URL, employer, source, salary or application payload", () => {
  const opportunities = buildDirectHireOpportunities({ ...BASE_INPUT, realJobCount: 0 });
  for (const opportunity of opportunities) {
    const value = opportunity as unknown as Record<string, unknown>;
    assert.equal(opportunity.kind, "direct-hire-opportunity");
    assert.equal(opportunity.contactHref, "/kontakt");
    assert.equal(Object.hasOwn(value, "company"), false);
    assert.equal(Object.hasOwn(value, "employer"), false);
    assert.equal(Object.hasOwn(value, "source"), false);
    assert.equal(Object.hasOwn(value, "salary"), false);
    assert.equal(Object.hasOwn(value, "datePosted"), false);
    assert.equal(Object.hasOwn(value, "jobUrl"), false);
  }
});
