import "../styles/subTitleStyles.css";

interface SubTitleProps {
  text: string;
}

export function SubTitle({ text }: SubTitleProps) {
  return <h2 className="subTitle">{text}</h2>;
}
