import { useExec } from "@raycast/utils";
import { getExecOptions } from "../utils/exec-options";

export const useCCUsageAvailability = () => {
  const { data, isLoading, error, revalidate } = useExec<boolean>("npx", ["ccusage@latest", "--help"], {
    ...getExecOptions(),
    parseOutput: () => true, // If command succeeds, ccusage is available
    keepPreviousData: true,
  });

  return {
    isAvailable: data === true && !error,
    isLoading,
    error,
    revalidate,
  };
};
