"""Fail if the scheduled scraper can publish without explicit approval."""

from pathlib import Path


workflow = Path(".github/workflows/scrape.yml").read_text(encoding="utf-8")
approval = (
    "    if: ${{ github.event_name == 'workflow_dispatch' && "
    "inputs.confirm_publish == 'PUBLISH' && "
    "vars.SANITAER_PUBLISHING_APPROVED == 'true' }}"
)

assert workflow.count("      max-parallel: 2") == 1, "scrape concurrency must be capped at two"
assert "      max-parallel: 5" not in workflow, "unsafe five-worker concurrency remains"
assert workflow.count(approval) == 1, "publish approval guard is missing or duplicated"
assert workflow.count("      confirm_publish:") == 1, "manual confirmation input is missing"
assert workflow.count('        default: ""') == 1, "manual confirmation must default closed"

scrape, separator, publish = workflow.partition("  publish:\n")
assert separator, "publish job is missing"
job_preamble, steps_separator, _ = publish.partition("    steps:\n")
assert steps_separator, "publish steps are missing"
assert approval in job_preamble, "approval guard is not at publish-job scope"
assert "github.event_name == 'workflow_dispatch'" in approval, "scheduled runs can publish"
assert "inputs.confirm_publish == 'PUBLISH'" in approval, "manual confirmation is not exact"
assert "SUPABASE_SERVICE_ROLE_KEY" not in scrape, "scrape job can access the service-role key"
assert publish.count("SUPABASE_SERVICE_ROLE_KEY") == 2, "publisher service-role mapping changed"

print("Workflow boundary check passed: publishing is manual-only, two-factor gated, and concurrency is capped.")
