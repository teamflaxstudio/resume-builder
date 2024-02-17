import React, { useEffect, createElement, useRef, useState } from "react";
import Dummy from "@/components/pdf-editor/templates/dummy";
import {
  PDFProps,
  ResumeProfile,
  pdfToPages,
  renderPDF,
} from "@/components/pdf-editor/pdf-handler";
import PDFViewer from "./PDFViewer";
import { PDFPageProxy } from "pdfjs-dist";
import "@/styles/editor/pdf-editor.css";
import { GridIcon } from "../icons";

export default function PDFEditor({ pdfData }: { pdfData: ResumeProfile }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [pages, setPages] = useState<PDFPageProxy[]>([]);

  useEffect(() => {
    renderTemplate();
  }, [pdfData]);

  async function renderTemplate() {
    const blob = await renderPDF(() => Dummy(pdfData));

    const url = URL.createObjectURL(blob);
    setPages(await pdfToPages(url));
  }
  return (
    <div className="pdf-editor">
      <div>
        <div className="panel-top">
          <button className="btn plain">
            <GridIcon /> Select template
          </button>
          <div className="center">
            <span className="color-pick c1"></span>
            <span className="color-pick c2"></span>
            <span className="color-pick c3"></span>
            <span className="color-pick c4"></span>
          </div>
          <button className="btn primary">Download</button>
        </div>
        <PDFViewer pages={pages} offsetTop={60} />
      </div>
    </div>
  );
}
