import Button from "./button";

export default {
  title: "Component/Button",
  component: Button,
};

export const Default = () => {
  const task = {
    content: "하하하",
    complete: false,
  };
  return <Button>버튼</Button>;
};
