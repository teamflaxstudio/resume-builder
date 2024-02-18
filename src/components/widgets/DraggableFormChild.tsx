import React from "react";
import { DragIcon, ArrowHeadLeft, DeleteIcon } from "../icons";
import "@/styles/widgets/draggable-form-child.css";

export default function DraggableFormChild({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="draggable-child">
      <div className="draggable-header" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <DragIcon />
          <span>Untitled</span>
        </div>
        <div>
          <ArrowHeadLeft className={isOpen ? "arrow active" : "arrow"} />
          <DeleteIcon className="delete" />
        </div>
      </div>
      <div className={isOpen ? "draggable-body" : "draggable-body hide"}>
        {children}
      </div>
    </div>
  );
}
