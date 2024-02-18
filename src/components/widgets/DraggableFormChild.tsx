import React from "react";
import { DragIcon, ArrowHeadLeft, DeleteIcon } from "../icons";
import "@/styles/widgets/draggable-form-child.css";

export default function DraggableFormChild({
  title,
  children,
  onRemove,
}: {
  title: string;
  children: React.ReactNode;
  onRemove?: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  function onRemoveChild() {
    if (onRemove) onRemove();
  }
  return (
    <div className="draggable-child">
      <div className="draggable-header" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <DragIcon />
          <span>{title ? title : "Untitled"}</span>
        </div>
        <div>
          <ArrowHeadLeft className={isOpen ? "arrow active" : "arrow"} />
          <div onClick={onRemoveChild}>
            <DeleteIcon className="delete" />
          </div>
        </div>
      </div>
      <div className={isOpen ? "draggable-body" : "draggable-body hide"}>
        {children}
      </div>
    </div>
  );
}
