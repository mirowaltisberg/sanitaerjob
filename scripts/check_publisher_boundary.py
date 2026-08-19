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
    "salary": "CHF 120000",
    "isRemote": True,
}

row = to_db_row(fixture, date(2026, 8, 20))
assert row["salary"] is None, "unverified salary reached the database row"
assert row["is_remote"] is None, "unverified remote status reached the database row"
assert row["type"] == "Vollzeit", "explicit job type was unexpectedly discarded"
assert row["workload"] == "100%", "explicit workload was unexpectedly discarded"

print("Publisher boundary check passed.")
