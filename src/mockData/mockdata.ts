export const data = {
  commitmentData: {
    tapTweakedResultPrefix: "03",
    cmtTxLocktimeByteLength: "00000000",
    outputCount: 6,
    inputCount: 2,
    inputs: [
      {
        txid: "5a64e248e757822594b7cd0f06e5af81e29d4620762486e9d648625ab46ef43e",
        vout: 3,
        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
      {
        txid: "5a64e248e757822594b7cd0f06e5af81e29d4620762486e9d648625ab46ef43e",
        vout: 4,
        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
    ],
    outputs: [
      {
        value: 0,
        asset: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
      {
        value: 0.00000701,
        asset: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
      {
        value: 12,
        asset: "f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958",
        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
      {
        valuecommitment: "08be637a065efc7b4ab1a14a397e3fc05a49aa9addc6e5097c8ac62cab0d17b6ec",
        assetcommitment: "0bca9b89acc5c15b89d77aa20272a8aaceef4d79b4df9f6e054681cde0ae2d41f9",
        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
      {
        value: 3244.815,
        asset: "f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958",

        scriptPubKey: {
          asm: "0 1bbb838a17dc4082275684bc12da0a54ce4df249",
          hex: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
        },
      },
      {
        value: 0.00000707,
        asset: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
        commitmentnonce: "",
        commitmentnonce_fully_valid: false,
        n: 5,
        scriptPubKey: {
          asm: "",
          hex: "",
          type: "fee",
        },
        assetcommitment: "",
      },
    ],
    nsequenceValue: "ffffffff",
    cmtTxInOutpoints: [
      {
        index: 0,
        data: "3ef46eb45a6248d6e986247620469de281afe5060fcdb794258257e748e2645a03000000",
      },
      {
        index: 1,
        data: "3ef46eb45a6248d6e986247620469de281afe5060fcdb794258257e748e2645a04000000",
      },
    ],
    cmtOutput1Value: "0100000000000002bd",
    output2PairValue: "01",
    cmtOutput2Value: "010000000047868c00",
    cmtOutputFeeHexValue: "0100000000000002c3",
    cmtOutput3PairValue: "00",
    changeOutputFinal: [
      {
        index: 1,
        assetValue: "0bca9b89acc5c15b89d77aa20272a8aaceef4d79b4df9f6e054681cde0ae2d41f908be637a065efc7b4ab1a14a397e3fc05a49aa9addc6e5097c8ac62cab0d17b6ec",
        noncScpkey: "02681d36c9c697e8be74f162ac714c490446892f333b567524d440757c1d46aff21600141bbb838a17dc4082275684bc12da0a54ce4df249",
      },
      {
        index: 2,
        assetValue: "015809820eff114b7c2f54bc742cd7dbf6c64938be7c27aed28c39118867ecd1f3010000004b8c9ac360",
        noncScpkey: "001600141bbb838a17dc4082275684bc12da0a54ce4df249",
      },
    ],
    poolId: "0b427dc1862dc6d658ccd109b8d54cf0dcd8848626c2bdb5e0ddce0f17383ff7",
    methodCall: "02",
    slippageTolerance: "0e05000000000000",
    orderingFee: "01000000",
    transaction: {
      txid: "a9058e8d5d393e12e6ca5307c710edf655c75dfb3787b3a827acfea28d00fb7a",
      version: 2,
      locktime: 0,
      vin: [
        {
          txid: "5a64e248e757822594b7cd0f06e5af81e29d4620762486e9d648625ab46ef43e",
          vout: 3,
          prevout: {
            scriptpubkey: "0014ce30006921314ec1c307f17a10a5fe7280e107ff",
            scriptpubkey_asm: "OP_0 OP_PUSHBYTES_20 ce30006921314ec1c307f17a10a5fe7280e107ff",
            scriptpubkey_type: "v0_p2wpkh",
            scriptpubkey_address: "tex1qeccqq6fpx98vrsc879appf07w2qwzpllmzyps3",
            valuecommitment: "080ad886f7e940093af13a1d81dfca2316fbb72061f730ef10ad67921ea9bf0334",
            assetcommitment: "0ae993af639ead1933652483eb3e44f65aa637aa8d601e9e7374a625f22126b788",
            pegout: null,
          },
          scriptsig: "",
          scriptsig_asm: "",
          witness: [
            "3044022073e16f13d38ebc07d2444cd2d69613c41df22bac09890d49499e1d869be88a1a022019f0756ae554590c4b4d15521494a96077f6c56d3d895aeaa7f4483b798e65d801",
            "0341d59cff5602bc2fd0589c4947b4814ca960f4bd5b0b2230fae7a106d4c3ce36",
          ],
          is_coinbase: false,
          sequence: 4294967295,
          is_pegin: false,
          is_pegin_input: false,
        },
        {
          txid: "5a64e248e757822594b7cd0f06e5af81e29d4620762486e9d648625ab46ef43e",
          vout: 4,
          prevout: {
            scriptpubkey: "0014ce30006921314ec1c307f17a10a5fe7280e107ff",
            scriptpubkey_asm: "OP_0 OP_PUSHBYTES_20 ce30006921314ec1c307f17a10a5fe7280e107ff",
            scriptpubkey_type: "v0_p2wpkh",
            scriptpubkey_address: "tex1qeccqq6fpx98vrsc879appf07w2qwzpllmzyps3",
            value: 325681500000,
            asset: "f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958",
            pegout: null,
          },
          scriptsig: "",
          scriptsig_asm: "",
          witness: [
            "3045022100b15f0530df79890ce4d8c3a97323c9e966aa42c618ab58f43e3f8eafe6c89c9302205665b3fc61e00959ee1788a646196f156b6de7910587018183f06e58915b5c0801",
            "0341d59cff5602bc2fd0589c4947b4814ca960f4bd5b0b2230fae7a106d4c3ce36",
          ],
          is_coinbase: false,
          sequence: 4294967295,
          is_pegin: false,
        },
      ],
      vout: [
        {
          scriptpubkey: "6a4c4ef73f38170fcedde0b5bdc2268684d8dcf04cd5b809d1cc58d6c62d86c17d420b0203acef217bb00f3624b12b181fc6fa59e1aee243bd2d92baf26cfbb2d5891357c30e0500000000000001000000",
          scriptpubkey_asm:
            "OP_RETURN OP_PUSHDATA1 f73f38170fcedde0b5bdc2268684d8dcf04cd5b809d1cc58d6c62d86c17d420b0203acef217bb00f3624b12b181fc6fa59e1aee243bd2d92baf26cfbb2d5891357c30e0500000000000001000000",
          scriptpubkey_type: "op_return",
          value: 0,
          asset: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
          pegout: null,
        },
        {
          scriptpubkey: "51202e2ef1f4f9307616cb45f397d65bb9f355cb64e8dca57ba33d48467a95767b34",
          scriptpubkey_asm: "OP_PUSHNUM_1 OP_PUSHBYTES_32 2e2ef1f4f9307616cb45f397d65bb9f355cb64e8dca57ba33d48467a95767b34",
          scriptpubkey_type: "unknown",
          value: 701,
          asset: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
          pegout: null,
        },
        {
          scriptpubkey: "51202e2ef1f4f9307616cb45f397d65bb9f355cb64e8dca57ba33d48467a95767b34",
          scriptpubkey_asm: "OP_PUSHNUM_1 OP_PUSHBYTES_32 2e2ef1f4f9307616cb45f397d65bb9f355cb64e8dca57ba33d48467a95767b34",
          scriptpubkey_type: "unknown",
          value: 1200000000,
          asset: "f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958",
          pegout: null,
        },
        {
          scriptpubkey: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
          scriptpubkey_asm: "OP_0 OP_PUSHBYTES_20 1bbb838a17dc4082275684bc12da0a54ce4df249",
          scriptpubkey_type: "v0_p2wpkh",
          scriptpubkey_address: "tex1qrwac8zshm3qgyf6ksj7p9ks22n8ymujfgaqess",
          valuecommitment: "08be637a065efc7b4ab1a14a397e3fc05a49aa9addc6e5097c8ac62cab0d17b6ec",
          assetcommitment: "0bca9b89acc5c15b89d77aa20272a8aaceef4d79b4df9f6e054681cde0ae2d41f9",
          pegout: null,
        },
        {
          scriptpubkey: "00141bbb838a17dc4082275684bc12da0a54ce4df249",
          scriptpubkey_asm: "OP_0 OP_PUSHBYTES_20 1bbb838a17dc4082275684bc12da0a54ce4df249",
          scriptpubkey_type: "v0_p2wpkh",
          scriptpubkey_address: "tex1qrwac8zshm3qgyf6ksj7p9ks22n8ymujfgaqess",
          value: 324481500000,
          asset: "f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958",
          pegout: null,
        },
        {
          scriptpubkey: "",
          scriptpubkey_asm: "",
          scriptpubkey_type: "fee",
          value: 707,
          asset: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
          pegout: null,
        },
      ],
      size: 3833,
      weight: 5651,
      fee: 707,
      status: {
        confirmed: true,
        block_height: 456986,
        block_hash: "dd3c2433b7aa784db97892120ead694eb3e17da9a0a6e8520ece5b89b2d3337a",
        block_time: 1659434762,
      },
    },
    pool: {
      id: "0b427dc1862dc6d658ccd109b8d54cf0dcd8848626c2bdb5e0ddce0f17383ff7",
      quote: {
        ticker: "tL-BTC",
        name: "Liquid Bitcoin",
        assetHash: "144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49",
        value: "143778",
        precision: 8,
      },
      token: {
        ticker: "tL-USDt",
        name: "Liquid Tether",
        assetHash: "f3d1ec678811398cd2ae277cbe3849c6f6dbd72c74bc542f7c4b11ff0e820958",
        value: "132396962200",
        precision: 8,
      },
      lp: {
        ticker: "fc65",
        name: "unknown",
        assetHash: "fc65994dc9467dc99f35cbe7382d0adad3519aaade30e023d79d70c41f63a232",
        value: "1999999225",
        precision: 8,
      },
      initialTx: {
        txid: "e3094b74a3db4f83b472531d6564a3e94b956c661fe94296d4da22c7a8624415",
        block_height: 447661,
        block_hash: "7fa6f90f1b8bfe5c9e5aeecda0441cc2814a9374c73ee9e22f8ed1ec6af4bc35",
      },

      lastStateTxId: "e3094b74a3db4f83b472531d6564a3e94b956c661fe94296d4da22c7a8624415",
      active: true,

      maxLeaf: 1,

      pair1_coefficient: {
        hex: "32000000",
        number: 50,
      },
      tokenPrice: 0,
      version: "01",
    },
  },
  poolTxId: "97346db13dc35dc889e4ee5282b74de59dcea8ff8cda40e8cc26fcae2d3a0f4f",
};
