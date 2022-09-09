import style from "./ContainerSmall.module.scss";

const ContainerSmall = (props) => {
  return <div className={style.ContainerSmall}>{props.children}</div>;
};

export default ContainerSmall;

export const ContainerSmallLongText = (props) => {
  return (
    <div className={[style.ContainerSmallLongText]}>
      {props.children}
    </div>
  );
};
