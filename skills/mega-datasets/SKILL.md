---
name: mega-datasets
description: Find, inspect, download, upload, version, and process datasets on MEGA Hub. Use when a request mentions MEGA datasets, dataset repositories, subsets/splits, dataset cards, parquet/data files, bulk transfer, or dataset preparation for Jobs and inference.
---

# MEGA datasets

Use MCP `docs` and `search` for current dataset API discovery. Use `execute` for
bounded metadata and file-list calls. Use the CLI whenever data must cross the
local filesystem or the response may exceed 1 MB.

```bash
mega datasets list --search QUERY --format json
mega datasets info OWNER/DATASET --format json
mega download OWNER/DATASET --type dataset --revision REVISION --local-dir ./data
mega datasets upload OWNER/DATASET ./data
```

Before processing:

1. Identify the repository, revision, relevant files, and expected size.
2. Read the dataset card and license or access constraints.
3. Prefer a pinned revision and record it in generated scripts.
4. Use `mega jobs` for remote batch processing when local compute is
   insufficient; use the Jobs skill for cost and secret handling.

Use `repo:write` for upload/publishing. Do not request inference permission for
ordinary dataset work. Keep private data out of logs and prompts, and never
publish derived data without preserving the source license and provenance.
