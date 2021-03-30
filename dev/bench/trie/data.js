window.BENCHMARK_DATA = {
  "lastUpdate": 1617100178261,
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
          "distinct": false,
          "id": "e8099f1ad8ee2380af3ac912700affd1e2b62c73",
          "message": "Merge pull request #1146 from ethereumjs/monorepo-add-util\n\nUtil monorepo transition",
          "timestamp": "2021-03-11T19:33:41+01:00",
          "tree_id": "8a2067237718c1b0590181364c47e2e6bb814dd9",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/e8099f1ad8ee2380af3ac912700affd1e2b62c73"
        },
        "date": 1615516613846,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14375,
            "range": "±15.89%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16633,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15723,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14592,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5942,
            "range": "±27.15%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1155,
            "range": "±6.71%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±88.59%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 110,
            "range": "±23.98%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.15,
            "range": "±120.62%",
            "unit": "ops/sec",
            "extra": "25 samples"
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
          "id": "2c455a7666708955827d2f1fbe7c929a9d568ff9",
          "message": "Merge pull request #1067 from ethereumjs/client-bootstrap\n\nClient: Save node key",
          "timestamp": "2021-03-12T10:07:34+01:00",
          "tree_id": "d4c60700df986ef03bb2fcff6c6bdca2eb7718e2",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/2c455a7666708955827d2f1fbe7c929a9d568ff9"
        },
        "date": 1615560714606,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13993,
            "range": "±13.62%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16058,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16226,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15139,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5618,
            "range": "±27.68%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1218,
            "range": "±5.96%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 116,
            "range": "±111.15%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±31.02%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.82,
            "range": "±102.99%",
            "unit": "ops/sec",
            "extra": "18 samples"
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
          "distinct": false,
          "id": "2c455a7666708955827d2f1fbe7c929a9d568ff9",
          "message": "Merge pull request #1067 from ethereumjs/client-bootstrap\n\nClient: Save node key",
          "timestamp": "2021-03-12T10:07:34+01:00",
          "tree_id": "d4c60700df986ef03bb2fcff6c6bdca2eb7718e2",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/2c455a7666708955827d2f1fbe7c929a9d568ff9"
        },
        "date": 1615562624710,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16347,
            "range": "±14.44%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18939,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18132,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12358,
            "range": "±17.72%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10881,
            "range": "±21.73%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1149,
            "range": "±6.66%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 119,
            "range": "±100.80%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 123,
            "range": "±11.00%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.62,
            "range": "±130.73%",
            "unit": "ops/sec",
            "extra": "25 samples"
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
          "id": "8c656dad4d4c5618bce2d1c13a5ddead834d3076",
          "message": "Merge pull request #1147 from ethereumjs/local-client-connectivity\n\nClient: local client connections for debugging",
          "timestamp": "2021-03-13T10:38:15+01:00",
          "tree_id": "2b6fdf9b6beb86772691f61dfc34feb1933c522b",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/8c656dad4d4c5618bce2d1c13a5ddead834d3076"
        },
        "date": 1615650087818,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13289,
            "range": "±12.67%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10876,
            "range": "±24.74%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14357,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12748,
            "range": "±4.04%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8692,
            "range": "±19.42%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 694,
            "range": "±31.34%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 231,
            "range": "±8.05%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 61.49,
            "range": "±77.91%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.4,
            "range": "±11.21%",
            "unit": "ops/sec",
            "extra": "35 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christophergewecke@gmail.com",
            "name": "cgewecke",
            "username": "cgewecke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71c54f6917c79465fc1025f009a9e0d45c2cbf36",
          "message": "Merge pull request #1172 from ethereumjs/disable-e2e-temporarily\n\nTemporarily disable e2e tests (due to intermittent failures)",
          "timestamp": "2021-03-29T10:27:54-07:00",
          "tree_id": "5fb7e021d5fdc79bab2899c3162c0bc05de646f7",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/71c54f6917c79465fc1025f009a9e0d45c2cbf36"
        },
        "date": 1617051569820,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15058,
            "range": "±14.92%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15716,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17567,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14598,
            "range": "±8.78%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5461,
            "range": "±26.52%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1215,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±98.07%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±14.51%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 29.41,
            "range": "±12.37%",
            "unit": "ops/sec",
            "extra": "19 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christophergewecke@gmail.com",
            "name": "cgewecke",
            "username": "cgewecke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfc250629758f24e4b8e2e46baf75ad8c5633215",
          "message": "util -> return false (instead of throwing) for non-hex-prefixed addresses for \"isValid..\" methods (#1173)",
          "timestamp": "2021-03-29T19:58:42-07:00",
          "tree_id": "b2b14c585b42fa57a6fcf7a910677cc8fe3bd1fe",
          "url": "https://github.com/MastaBook/ethereumjs-vm/commit/cfc250629758f24e4b8e2e46baf75ad8c5633215"
        },
        "date": 1617100177457,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13886,
            "range": "±12.12%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10604,
            "range": "±27.63%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14504,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13179,
            "range": "±4.39%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9371,
            "range": "±16.57%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 791,
            "range": "±21.84%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 243,
            "range": "±8.43%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 35.91,
            "range": "±112.50%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.2,
            "range": "±9.27%",
            "unit": "ops/sec",
            "extra": "34 samples"
          }
        ]
      }
    ]
  }
}