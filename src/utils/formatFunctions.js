import { ethers } from "ethers";
import { toast } from "react-toastify";

export const isValidEthereumAddress = (address) => {
  const regex = /^(0x)?[0-9a-fA-F]{40}$/;
  if (!regex.test(address)) {
    toast.error(
      `Address should start with "0x" and have 40 hexadecimal characters (0-9, A-F). It should be 42 characters long in total, including "0x". For example: "0x1a5B9d19C4adBf8C37A59521F2821AaC8E1c11bA".`
    );
    return false;
  }
  try {
    const checksumAddress = ethers.getAddress(address);
    return checksumAddress === address;
  } catch (error) {
    toast.error("Wrong address!");
    return false;
  }
};

export const formatAddress = (address) => {
  const start = address.slice(0, 4);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

export const isValidTokenAmount = (amount) => {
  const parsedAmount = parseFloat(amount);
  if (
    isNaN(parsedAmount) ||
    parsedAmount < 0.000001 ||
    parsedAmount > 100000 ||
    parsedAmount % 10 !== 0
  ) {
    toast.error(
      "Invalid token amount. The amount must be between 0.000001 and 100000 with a multiple of 10."
    );
    return false;
  }
  return true;
};
