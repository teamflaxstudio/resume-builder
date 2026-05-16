import { PDFPageProxy } from "pdfjs-dist";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const createCanvas = useCallback((count: number) => {
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
  }, []);

  const onResize = useCallback(() => {
    if (!pagerElement.current || !canvasHolderElement.current) return;
    if (!canvasSize.current.height) return;

    const availableHeight =
      window.innerHeight - offsetTop - pagerElement.current.clientHeight - 32;
    const height = Math.max(360, availableHeight);
    canvasHolderElement.current.style.height = `${height}px`;

    const scale = height / canvasSize.current.height;

    canvasHolderElement.current.style.width = `${
      canvasSize.current.width * scale
    }px`;

    allCanvas.current.forEach((canvas) => {
      canvas.style.transformOrigin = "top left";
      canvas.style.scale = scale.toString();
    });
  }, [offsetTop]);

  useEffect(() => {
    if (!canvasHolderElement.current) return;

    if (!pages.length) {
      // page is zero
      createCanvas(pages.length);
      setActivePage(0);
      return;
    }

    const scale = 1;
    const viewport = pages[0].getViewport({ scale: scale });
    canvasSize.current = {
      width: viewport.width,
      height: viewport.height,
    };
    createCanvas(pages.length);
    setActivePage(Math.min(activePage, pages.length - 1));

    // render each page
    pages.forEach((page, index) => {
      const viewport = page.getViewport({ scale: scale });
      const canvas = allCanvas.current[index];
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Set canvas dimensions
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      page.render(renderContext);
    });

    onResize();
  }, [activePage, createCanvas, onResize, pages]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  useEffect(() => {
    if (activePage < 0 || activePage >= allCanvas.current.length) return;

    allCanvas.current.forEach((canvas, index) => {
      canvas.style.display = index === activePage ? "block" : "none";
    });
  }, [activePage]);

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
    <div className="flex h-full flex-col items-center justify-center px-4 py-5">
      <div
        className="overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-white/10"
        ref={canvasHolderElement}
      >
      </div>
      <div
        ref={pagerElement}
        className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 text-white backdrop-blur"
      >
        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/15 hover:text-white" onClick={() => changePage(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="min-w-12 text-center text-sm font-medium text-white">
          {activePage + 1}/{totalPages}
        </span>
        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/15 hover:text-white" onClick={() => changePage(1)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
