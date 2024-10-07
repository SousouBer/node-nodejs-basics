const parseEnv = () => {
  const envVariables = Object.entries(process.env)
    .filter((variable) => variable[0].includes("RSS_"))
    .map((value) => `${value[0]}=${value[1]}`)
    .join("; ");

  console.log(envVariables);
};

parseEnv();
