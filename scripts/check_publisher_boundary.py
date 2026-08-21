"""Verify that unproven artifact claims cannot cross the publisher boundary."""

from datetime import date
from pathlib import Path
import runpy


publisher = runpy.run_path(Path(__file__).with_name("publish-jobs.py"))
to_db_row = publisher["to_db_row"]

fixture = {
    "trade": "sanitaer",
    "id": "scraped-sanitaer-f4e373d4b0d0",
    "title": "Sanitärinstallateur EFZ",
    "company": "Private employer",
    "location": "Zürich, Zürich",
    "type": "Vollzeit",
    "workload": "100%",
    "description": "Controlled test data",
    "datePosted": "2026-08-20",
    "jobUrl": "https://jobs.example.ch/san-1",
    "source": "indeed",
    "salary": "untrusted display text",
    "salaryMin": 72000,
    "salaryMax": 84000,
    "salaryCurrency": "CHF",
    "salaryUnit": "YEAR",
    "isRemote": True,
}

row = to_db_row(fixture, date(2026, 8, 20))
assert row["salary"] == "CHF 72'000 – 84'000", "source salary display was not regenerated"
assert row["salary_min"] == 72000
assert row["salary_max"] == 84000
assert row["salary_currency"] == "CHF"
assert row["salary_unit"] == "YEAR"
assert row["is_remote"] is True, "explicit remote status was unexpectedly discarded"
assert row["type"] == "Vollzeit", "explicit job type was unexpectedly discarded"
assert row["workload"] == "100%", "explicit workload was unexpectedly discarded"

unsafe_salary = to_db_row(
    {**fixture, "salaryCurrency": "EUR", "salaryMin": 999999},
    date(2026, 8, 20),
)
assert unsafe_salary["salary"] is None
assert unsafe_salary["salary_min"] is None
assert unsafe_salary["salary_currency"] is None

print("Publisher boundary check passed.")
