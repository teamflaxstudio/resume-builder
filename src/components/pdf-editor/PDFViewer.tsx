import { Caveat } from "next/font/google";
import { PDFPageProxy } from "pdfjs-dist";
import React, { use, useEffect, useRef, useState } from "react";
import { ArrowHeadLeft, ArrowHeadRight } from "@/components/icons";
import "@/styles/editor/pdf-viewer.css";

export default function PDFViewer({
  pages,
  offsetTop,
}: {
  pages: PDFPageProxy[];
  offsetTop: number;
}) {
  const allCanvas = useRef<HTMLCanvasElement[]>([]);
  const canvasHolderElement = useRef<HTMLDivElement>(null);
  const pagerElement = useRef<HTMLDivElement>(null);

  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const canvasSize = useRef({ width: 0, height: 0 });

  function createCanvas(count: number) {
    // remove all previous canvas
    allCanvas.current.forEach((canvas) => {
      canvasHolderElement.current!!.removeChild(canvas);
    });

    allCanvas.current = [];

    for (let index = 0; index < count; index++) {
      const canvas = document.createElement("canvas");
      canvas.height = canvasSize.current.height;
      canvas.width = canvasSize.current.width;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      allCanvas.current.push(canvas);
      canvasHolderElement.current!!.appendChild(canvas);
    }

    setTotalPages(allCanvas.current.length);
  }

  useEffect(() => {
    if (!canvasHolderElement.current) return;

    if (!pages.length) {
      // page is zero
      createCanvas(pages.length);
      setActivePage(0);
      return;
    }

    var scale = 1;
    var viewport = pages[0].getViewport({ scale: scale });
    canvasSize.current = {
      width: viewport.width,
      height: viewport.height,
    };
    createCanvas(pages.length);
    setActivePage(Math.min(activePage, pages.length - 1));

    // render each page
    pages.forEach((page, index) => {
      var viewport = page.getViewport({ scale: scale });
      var canvas = allCanvas.current[index];
      var ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Set canvas dimensions
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      page.render(renderContext);
    });

    onResize();
  }, [pages]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (activePage < 0 || activePage >= allCanvas.current.length) return;

    allCanvas.current.forEach((canvas, index) => {
      canvas.style.display = index === activePage ? "block" : "none";
    });
  }, [activePage]);

  function onResize() {
    if (!pagerElement.current || !canvasHolderElement.current) return;
    // const width = canvasHolder.current.clientWidth;

    // calculate the height and width of canvas holder
    const height =
      window.innerHeight - offsetTop - pagerElement.current.clientHeight;
    canvasHolderElement.current.style.height = `${height}px`;

    const scale = height / canvasSize.current.height;

    canvasHolderElement.current.style.width = `${
      canvasSize.current.width * scale
    }px`;

    allCanvas.current.forEach((canvas) => {
      canvas.style.transformOrigin = "top left";
      canvas.style.scale = scale.toString();
    });
  }

  function changePage(page: 1 | -1) {
    setActivePage((prev) => {
      let newPage = prev + page;
      if (newPage < 0) newPage = 0;
      if (newPage >= allCanvas.current.length)
        newPage = allCanvas.current.length - 1;
      return newPage;
    });
  }

  return (
    <div className="pdf-viewer">
      <div
        className="canvas-holder"
        ref={canvasHolderElement}
      >
        {/* <canvas className="scale-50"></canvas> */}
      </div>
      <div
        ref={pagerElement}
        className="pager"
      >
        <button className="btn icon-btn plain" onClick={() => changePage(-1)}>
          <ArrowHeadLeft/>
        </button>
        <span className="block text-white">
          {activePage + 1}/{totalPages}
        </span>
        <button className="btn icon-btn plain" onClick={() => changePage(1)}>
          <ArrowHeadRight />
        </button>
      </div>
    </div>
  );
}
