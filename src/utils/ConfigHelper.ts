export interface ConfigHelper {
    network: string
    url: string
    factoryAddress: string
    oceanTokenAddress: string
    metadataStoreUri: string
    providerUri: string
}

const configs = [
    {
        network: 'development',
        url: 'http://localhost:8545',
        factoryAddress: null,
        metadataStoreUri: 'http://127.0.0.1:5000',
        providerUri: 'http://127.0.0.1:8030'
    },
    {
        network: 'pacific',
        url: 'https://pacific.oceanprotocol.com',
        factoryAddress: '0x1234',
        oceanTokenAddress: '0x012578f9381e876A9E2a9111Dfd436FF91A451ae',
        metadataStoreUri: null,
        providerUri: null
    },
    {
        network: 'rinkeby',
        url: 'https://rinkeby.infura.io/v3/YOUR-PROJECT-ID',
        factoryAddress: '0xcDfEe5D80041224cDCe9AE2334E85B3236385EA3',
        oceanTokenAddress: '0x8967BCF84170c91B0d24D4302C2376283b0B3a07',
        metadataStoreUri: 'https://aquarius.rinkeby.v3.dev-ocean.com/',
        providerUri: 'https://provider.rinkeby.v3.dev-ocean.com/'
    },
    {
        network: 'mainnet',
        url: 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',
        factoryAddress: '0x1234',
        oceanTokenAddress: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41',
        metadataStoreUri: null,
        providerUri: null
    }
]

export class ConfigHelper {
    public getConfig(network: string): ConfigHelper {
        const confighelp = new ConfigHelper()
        // fill unknown values
        confighelp.factoryAddress = null
        confighelp.url = null
        confighelp.network = network
        confighelp.oceanTokenAddress = null
        confighelp.metadataStoreUri = null
        confighelp.providerUri = null

        const knownconfig = configs.find((c) => c.network === network)
        if (knownconfig) {
            confighelp.factoryAddress = knownconfig.factoryAddress
            confighelp.oceanTokenAddress = knownconfig.oceanTokenAddress
            confighelp.url = knownconfig.url
            confighelp.network = knownconfig.network
            confighelp.metadataStoreUri = knownconfig.metadataStoreUri
            confighelp.providerUri = knownconfig.providerUri
        }
        return confighelp
    }
}
