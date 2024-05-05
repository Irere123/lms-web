/* eslint-disable no-unused-expressions */
import React, { forwardRef } from "react";

export const Input = forwardRef(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-slate-700`;
    const ring = error ? `ring-1 ring-secondary` : "";
    const cn = `w-full py-2 px-4 rounded text-slate-100 placeholder-slate-300 focus:outline-none ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea ref={ref} className={cn} data-testid="textarea" {...props} />
    ) : (
      <input ref={ref} className={cn} data-testid="input" {...props} />
    );
  }
);

Input.displayName = "Input";
