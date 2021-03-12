window.BENCHMARK_DATA = {
  "lastUpdate": 1615512365526,
  "repoUrl": "https://github.com/MastaBook/ethereumjs-vm",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53150c159b559b31b6b7c321d784dbb11b082fb9",
          "message": "Merge pull request #1130 from ethereumjs/add-new-rpc-methods\n\nClient: Add 6 new RPC methods",
          "timestamp": "2021-03-09T11:56:38+01:00",
          "tree_id": "fa1f03b097c5cb8d1669f94e7e06b44967f86647",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/53150c159b559b31b6b7c321d784dbb11b082fb9"
        },
        "date": 1615294180657,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13591,
            "range": "±14.27%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15416,
            "range": "±4.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14937,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14117,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6801,
            "range": "±26.54%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1007,
            "range": "±16.44%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 135,
            "range": "±81.73%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 98.59,
            "range": "±37.94%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.18,
            "range": "±120.54%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "892d332e7253679c3e517b9a6bd7dea95f124da3",
          "message": "Merge pull request #1145 from ethereumjs/client-split-cli-transport-options\n\nClient: split CLI transports options for bootnodes and multiaddrs",
          "timestamp": "2021-03-11T08:57:10+01:00",
          "tree_id": "e4e8160e8d6e82a324ddc5958e2f57d45a8045fe",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/892d332e7253679c3e517b9a6bd7dea95f124da3"
        },
        "date": 1615463734344,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13788,
            "range": "±11.52%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12982,
            "range": "±17.06%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13527,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12792,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9809,
            "range": "±18.57%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 688,
            "range": "±29.36%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 232,
            "range": "±8.29%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 29.42,
            "range": "±119.42%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.6,
            "range": "±8.06%",
            "unit": "ops/sec",
            "extra": "43 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8099f1ad8ee2380af3ac912700affd1e2b62c73",
          "message": "Merge pull request #1146 from ethereumjs/monorepo-add-util\n\nUtil monorepo transition",
          "timestamp": "2021-03-11T19:33:41+01:00",
          "tree_id": "8a2067237718c1b0590181364c47e2e6bb814dd9",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/e8099f1ad8ee2380af3ac912700affd1e2b62c73"
        },
        "date": 1615512364331,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19232,
            "range": "±15.08%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22181,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18456,
            "range": "±3.86%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7268,
            "range": "±21.63%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17102,
            "range": "±5.05%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1237,
            "range": "±6.16%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 88.93,
            "range": "±132.55%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 117,
            "range": "±18.06%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 28.64,
            "range": "±12.73%",
            "unit": "ops/sec",
            "extra": "19 samples"
          }
        ]
      }
    ]
  }
}