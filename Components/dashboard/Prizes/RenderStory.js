import renderHTML from "react-render-html";

const RenderStory = ({ htmlCode }) => {
  return <>{renderHTML(htmlCode)}</>;
};

export default RenderStory;
