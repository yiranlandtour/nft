const WALLET = Keypair.fromSecretKey(new Uint8Array(secret));
const MINT_ADDRESS = '6cuiqk2VubzAgtUvFjBvosjCJUWG81EvW1F28qtX4EDn';

const METAPLEX = Metaplex.make(SOLANA_CONNECTION)
    .use(keypairIdentity(WALLET))
    .use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: 'https://api.mainnet-beta.solana.com',
        timeout: 60000,
    }));

const NEW_METADATA = {
    imgType: 'image/png',
    imgName: 'QuickPix New MetaName',
    description: 'New description!',
    attributes: [
        {trait_type: 'Speed', value: 'Quicker'},
        {trait_type: 'Type', value: 'Pixelated'},
        {trait_type: 'Background', value: 'QuickNode Blue 2'}
    ]
};



