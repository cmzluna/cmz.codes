import dynamic from "next/dynamic";

interface Props {
  library: string;
  module: string;
}

// TODO : solve bug
// not working as library could not be found
const dynamicImport = (props: Props) => {
  return dynamic(() =>
    import(props.library).then((mod: any) => mod[props.module])
  );
};

export { dynamicImport };
