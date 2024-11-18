// Deploy script for the "Transactions" smart contract

const main = async () => {
  // Get the contract factory for the "Transactions" contract
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );

  // Deploy the contract
  const transactionsContract = await transactionsFactory.deploy();

  // Wait for the deployment to be mined
  await transactionsContract.deployed();

  // Log the deployed contract address
  console.log(
    "Transactions contract deployed at address:",
    transactionsContract.address
  );
};

const runMain = async () => {
  try {
    // Run the main function to deploy the contract
    await main();

    // Exit the process with success code
    process.exit(0);
  } catch (error) {
    // Log any errors that occur
    console.error("Error occurred during contract deployment:", error.message);
    console.error(error);

    // Exit the process with failure code
    process.exit(1);
  }
};

// Run the deployment script
runMain();
