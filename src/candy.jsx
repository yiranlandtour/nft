import { generateSigner } from '@metaplex-foundation/umi'

const myCustomAuthority = generateSigner(umi)
console.log(myCustomAuthority)
const candyMachineSettings = {
  authority: myCustomAuthority,
}