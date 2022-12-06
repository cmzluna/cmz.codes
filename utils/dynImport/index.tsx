import dynamic from "next/dynamic";

const dynamicImport = (library: string, module: string) => {
  return dynamic(
    () =>
      import(library).then((mod: any) => mod[module]) as Promise<React.FC<any>>
  );
};

export { dynamicImport };
