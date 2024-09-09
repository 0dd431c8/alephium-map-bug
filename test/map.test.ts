import { web3, AssetOutput, DUST_AMOUNT, ONE_ALPH } from "@alephium/web3";
import { getSigner } from "@alephium/web3-test";
import { Bar, Foo } from "../artifacts/ts";

describe("unit tests", () => {
	beforeAll(async () => {
		web3.setCurrentNodeProvider("http://127.0.0.1:22973", undefined, fetch);
	});

	it("test withdraw", async () => {
		const signer = await getSigner();

		const bar = Bar.stateForTest({});
		const foo = Foo.stateForTest({
			bar: bar.contractId,
		});

		await Foo.tests.doSomething({
			address: foo.address,
			initialFields: foo.fields,
			existingContracts: [bar],
			testArgs: {
				payer: signer.address,
			},
			inputAssets: [
				{
					address: signer.address,
					asset: { alphAmount: ONE_ALPH },
				},
			],
		});
	});
});
